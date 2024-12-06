"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import TagInput from "@/components/form/TagInput";
import ImageUploader from "@/components/form/ImageUploader";
import { UploadedImage } from "../../blogs/create/page";
import { uploadToCDN } from "@/lib/utils";
import { convertToReact } from "@/lib/utils";

const productSchema = z.object({
    productId: z.string().min(1, "Product ID is required"),
    name: z.string().min(1, "Name is required"),
    price: z.number().min(0, "Price must be a positive number"),
    size: z.array(z.string()),
    color: z.array(z.string()),
    shortDescription: z.string().min(1, "Short description is required"),
    fullDescription: z.string().min(1, "Full description is required"),
    tags: z.array(z.string()),
});

type ProductFormValues = z.infer<typeof productSchema>;

export default function page() {
    const [tags, setTags] = useState<string[]>([]);
    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
    const [descriptionImages, setDescriptionImages] = useState<UploadedImage[]>(
        []
    );
    const [previewContent, setPreviewContent] = useState<string>("");

    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            productId: "",
            name: "",
            price: 0,
            size: [],
            color: [],
            shortDescription: "",
            fullDescription: "",
            tags: [],
        },
    });

    const onSubmit = (data: ProductFormValues) => {
        // Here you would typically send the data to your API
        console.log(data);
        console.log("Uploaded Images:", uploadedImages);
        console.log("Description Images:", descriptionImages);
    };

    const handleImageUpload = (file: File) => {
        const blobUrl = URL.createObjectURL(file);
        const alt = file.name.split(".").slice(0, -1).join(".");
        setUploadedImages((prev) => [...prev, { alt, src: blobUrl, file }]);
    };

    const deleteImageUpload = (srcToDelete: string) => {
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

    const handleDescriptionImageUpload = (file: File) => {
        const blobUrl = URL.createObjectURL(file);
        const alt = file.name.split(".").slice(0, -1).join(".");
        setDescriptionImages((prev) => [...prev, { alt, src: blobUrl, file }]);
    };

    const deleteImageDescription = (srcToDelete: string) => {
        setDescriptionImages((prev) => {
            const updatedImages = prev.filter(
                (image) => image.src !== srcToDelete
            );
            URL.revokeObjectURL(srcToDelete);
            return updatedImages;
        });
    };

    const updateDescriptionImageAlt = (oldAlt: string, newAlt: string) => {
        setDescriptionImages((prev) =>
            prev.map((img) =>
                img.alt === oldAlt ? { ...img, alt: newAlt } : img
            )
        );
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Create New Product</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8">
                    <FormField
                        control={form.control}
                        name="productId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product ID</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a unique identifier for the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter the name of the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(
                                                parseFloat(e.target.value)
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter the price of the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="size"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Sizes</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="S, M, L"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((s) => s.trim())
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter sizes separated by commas.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Colors</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Red, Blue, Green"
                                        onChange={(e) =>
                                            field.onChange(
                                                e.target.value
                                                    .split(",")
                                                    .map((s) => s.trim())
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormDescription>
                                    Enter colors separated by commas.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="shortDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Short Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a brief description of the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fullDescription"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} />
                                </FormControl>
                                <FormDescription>
                                    Enter a detailed description of the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <TagInput
                                        tags={tags}
                                        setTags={(newTags) => {
                                            setTags(newTags);
                                            field.onChange(newTags);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>
                                    Add tags to categorize the product.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Product Images
                        </h3>
                        <ImageUploader
                            uploadedImages={uploadedImages}
                            onUpload={handleImageUpload}
                            onDelete={(src) =>
                                setUploadedImages((prev) =>
                                    prev.filter((img) => img.src !== src)
                                )
                            }
                            onUpdateAlt={(oldAlt, newAlt) =>
                                setUploadedImages((prev) =>
                                    prev.map((img) =>
                                        img.alt === oldAlt
                                            ? { ...img, alt: newAlt }
                                            : img
                                    )
                                )
                            }
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            Description Images
                        </h3>
                        <ImageUploader
                            uploadedImages={descriptionImages}
                            onUpload={handleDescriptionImageUpload}
                            onDelete={(src) =>
                                setDescriptionImages((prev) =>
                                    prev.filter((img) => img.src !== src)
                                )
                            }
                            onUpdateAlt={(oldAlt, newAlt) =>
                                setDescriptionImages((prev) =>
                                    prev.map((img) =>
                                        img.alt === oldAlt
                                            ? { ...img, alt: newAlt }
                                            : img
                                    )
                                )
                            }
                        />
                    </div>
                    <Button type="submit">Create Product</Button>
                </form>
            </Form>
        </div>
    );
}
