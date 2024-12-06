"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import ImageUploader from "@/components/form/ImageUploader";
import BlogPreview from "@/components/dialog/Preview";
import TagInput from "@/components/form/TagInput";
import { convertToReact } from "@/lib/utils";
import Image from "next/image";
import { uploadToCDN } from "@/lib/utils";
import { CreateBlog } from "@/services/BlogService";
import { createBlogImage } from "@/services/ImageService";
import { Blog } from "@/types";
export type UploadedImage = {
    alt: string;
    src: string;
    file: File;
};

const formSchema = z.object({
    title: z.string().min(1, "Blog title is required"),
    blogId: z
        .string()
        .min(1, "Blog ID is required")
        .regex(
            /^[a-z0-9-]+$/,
            "Blog ID must contain only lowercase letters, numbers, and hyphens"
        ),
    content: z.string().min(1, "Content is required"),
    tags: z.array(z.string()),
});

export default function BlogCreator() {
    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
    const [previewContent, setPreviewContent] = useState<string>("");
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            blogId: "",
            content: "",
            tags: [],
        },
    });

    const handleImageUpload = (file: File) => {
        const blobURL = URL.createObjectURL(file);
        // take the file name and remove the extension, there would be file with . in the middle so to be saft, split at the last dot
        const alt = file.name.split(".").slice(0, -1).join(".");
        setUploadedImages((prev) => [...prev, { alt, src: blobURL, file }]);
    };

    const deleteImage = (srcToDelete: string) => {
        setUploadedImages((prev) => {
            const updatedImages = prev.filter(
                (image) => image.src !== srcToDelete
            );
            URL.revokeObjectURL(srcToDelete);
            return updatedImages;
        });
    };

    const updateImageAlt = (oldAlt: string, newAlt: string) => {
        setUploadedImages((prev) =>
            prev.map((img) =>
                img.alt === oldAlt ? { ...img, alt: newAlt } : img
            )
        );
    };

    const handlePreview = () => {
        let processedContent = form.getValues("content");
        const imgRegex = /IMG<([^,]+)(?:,\s*(\d+))?(?:,\s*(\d+))?>/g;

        processedContent = processedContent.replace(
            imgRegex,
            (match, alt, width, height) => {
                const image = uploadedImages.find((img) => img.alt === alt);
                if (!image) {
                    toast({
                        title: "Error",
                        description: `Image with alt "${alt}" not found`,
                        variant: "destructive",
                    });
                    return match;
                }
                return `IMG<${alt},${image.src}${width ? `,${width}` : ""}${
                    height ? `,${height}` : ""
                }>`;
            }
        );

        setPreviewContent(convertToReact(processedContent));
    };

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            // Wait for all images to be uploaded
            const successfulUploads = await Promise.all(
                uploadedImages.map(async (image) => {
                    try {
                        console.log(`Starting upload for image: ${image.alt}`);
                        const uploadedImage = await uploadToCDN(image.file);
                        if (typeof uploadedImage === "string") {
                            console.log(
                                `Successfully uploaded image: ${image.alt}`
                            );
                            return { alt: image.alt, src: uploadedImage };
                        } else {
                            console.error(
                                `Failed to upload image: ${image.alt}`,
                                uploadedImage
                            );
                            toast({
                                title: "Error",
                                description: `Failed to upload image "${image.alt}"`,
                                variant: "destructive",
                            });
                            return null;
                        }
                    } catch (error) {
                        console.error(
                            `Error uploading image "${image.alt}":`,
                            error
                        );
                        toast({
                            title: "Error",
                            description: `Failed to upload image "${image.alt}"`,
                            variant: "destructive",
                        });
                        return null;
                    }
                })
            );

            const finalUploadedImages = successfulUploads.filter(
                (image) => image !== null
            );

            console.log("uploaded", finalUploadedImages);

            let processedContent = values.content;
            const imgRegex = /IMG<([^,]+)(?:,\s*(\d+))?(?:,\s*(\d+))?>/g;
            processedContent = processedContent.replace(
                imgRegex,
                (match, alt, width, height) => {
                    const image = finalUploadedImages.find(
                        (img) => img.alt === alt
                    );
                    if (!image) {
                        toast({
                            title: "Error",
                            description: `Image with alt "${alt}" not found`,
                            variant: "destructive",
                        });
                        return match;
                    }
                    return `IMG<${alt},${image.src}${width ? `,${width}` : ""}${
                        height ? `,${height}` : ""
                    }>`;
                }
            );

            const convertedContent = convertToReact(processedContent);
            console.log({
                ...values,
                finalUploadedImages,
                convertedContent,
            });

            console.log({
                blogId: values.blogId,
                title: values.title,
                content: convertedContent,
                tags: values.tags,
            });

            await CreateBlog({
                blogId: values.blogId,
                title: values.title,
                content: convertedContent,
                tags: values.tags,
            })
                .then((res) => {
                    if ("error" in res) {
                        toast({
                            title: "Error",
                            description:
                                "Something went wrong while creating the blog.",
                            variant: "destructive",
                        });
                    } else {
                        toast({
                            title: "Blog Created",
                            description:
                                "Your blog has been successfully created!",
                        });
                    }
                })
                .then(() => {
                    // create blog images
                    finalUploadedImages.forEach(async (image) => {
                        await createBlogImage(values.blogId, {
                            src: image.src,
                            imageId: image.alt,
                        }).then((res) => {
                            if ("error" in res) {
                                toast({
                                    title: "Error",
                                    description:
                                        "Something went wrong while creating the blog images.",
                                    variant: "destructive",
                                });
                            }
                        });
                    });
                });
        } catch (error) {
            console.error("Error in onSubmit:", error);
            toast({
                title: "Error",
                description: "Something went wrong while creating the blog.",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="w-full ">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 p-4">
                    <div className="flex space-x-10">
                        <div className="w-3/4 space-y-4">
                            <div className="flex gap-4">
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Blog Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter blog name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="blogId"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Blog ID</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter blog ID"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="content"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Content</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Write your blog content here..."
                                                className="min-h-[300px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="w-1/4 space-y-4">
                            <ImageUploader
                                uploadedImages={uploadedImages}
                                onUpload={handleImageUpload}
                                onDelete={deleteImage}
                                onUpdateAlt={updateImageAlt}
                            />
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        onClick={handlePreview}
                                        className="w-full">
                                        Preview
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-3xl max-h-[80vh]">
                                    <DialogHeader>
                                        <DialogTitle>Blog Preview</DialogTitle>
                                    </DialogHeader>
                                    <ScrollArea className="h-full max-h-[calc(80vh-4rem)]">
                                        <BlogPreview content={previewContent} />
                                    </ScrollArea>
                                </DialogContent>
                            </Dialog>
                            <FormField
                                control={form.control}
                                name="tags"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Tags</FormLabel>
                                        <FormControl>
                                            <TagInput
                                                tags={field.value}
                                                setTags={field.onChange}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Create Blog
                            </Button>
                        </div>
                    </div>
                </form>
                <Toaster />
            </Form>
        </div>
    );
}
