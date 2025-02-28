"use client";
import { useState, useEffect } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploader from "@/components/form/ImageUploader";
import { uploadToCDN } from "@/lib/utils";
import { advertisementSchema } from "@/lib/validation";
import { UploadedImage } from "../blogs/create/page";
import { advertisement } from "@/types";

const page = () => {
    const { toast } = useToast();
    const [ad, setAd] = useState<advertisement | null>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isEdit, setIsEdit] = useState<advertisement | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Fetch ad data.
    });

    const handleAddAd = async (data: advertisement) => {
        setAd(data);
    };

    const handleEditAd = async (data: advertisement) => {
        setAd(data);
        setIsDialogOpen(false);
    };

    const handleDeleteAd = async () => {
        setAd(null);
    };

    const openEditAd = (data: advertisement) => {
        setIsEdit(data);
        setIsDialogOpen(true);
    };

    return (
        <div className="container mx-auto py-10">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Advertisment Banner Management</CardTitle>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button
                                onClick={() => setIsEdit(null)}
                                className="flex items-center gap-1">
                                <Plus className="h-4 w-4" /> Add new
                                advertisement
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>
                                    {isEdit
                                        ? "Edit social"
                                        : "Add New social media"}
                                </DialogTitle>
                            </DialogHeader>
                            <AdForm
                                onSubmit={isEdit ? handleEditAd : handleAddAd}
                                initialData={isEdit}
                            />
                        </DialogContent>
                    </Dialog>
                </CardHeader>
                <CardContent className="overflow-x-auto no-scrollbar">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Link</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ad ? (
                                <tr>
                                    <td>
                                        <img
                                            src={ad.image}
                                            alt="ad"
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                    </td>
                                    <td>{ad.link}</td>
                                    <td>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => openEditAd(ad)}>
                                            <Pencil />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={handleDeleteAd}>
                                            <Trash2 />
                                        </Button>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center">
                                        No data
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    );
};

export default page;

interface AdvertisementFormProps {
    onSubmit: (data: advertisement) => void;
    initialData: advertisement | null;
}

function AdForm({ onSubmit, initialData }: AdvertisementFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<z.infer<typeof advertisementSchema>>({
        resolver: zodResolver(advertisementSchema),
        defaultValues: initialData || {
            image: "",
            link: "",
        },
    });

    const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>(
        initialData?.image
            ? [{ alt: "ad", src: initialData.image, file: null }]
            : []
    );
    const [isUploading, setIsUploading] = useState(false);

    const handleImageUpload = async (file: File) => {
        setIsUploading(true);
        try {
            const result = await uploadToCDN(file);

            if (typeof result === "string") {
                const newImage = {
                    alt: file.name,
                    src: result,
                    file: file,
                };
                setUploadedImages([newImage]);
                setValue("image", result);
            } else {
                console.error("Upload failed:", result.error);
            }
        } catch (error) {
            console.error("Error uploading image:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleImageDelete = (src: string) => {
        setUploadedImages([]);
        setValue("image", "");
    };

    const handleUpdateAlt = (oldAlt: string, newAlt: string) => {
        setUploadedImages(
            uploadedImages.map((img) =>
                img.alt === oldAlt ? { ...img, alt: newAlt } : img
            )
        );
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="link">Link to product/blog</Label>
                <Input id="link" {...register("link")} />
                {errors.link && (
                    <p className="text-sm text-destructive">
                        {errors.link.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <Label>Social Logo</Label>
                <ImageUploader
                    uploadedImages={uploadedImages}
                    onUpload={handleImageUpload}
                    onDelete={handleImageDelete}
                    onUpdateAlt={handleUpdateAlt}
                    isMultiple={false}
                    isEditing={true}
                />
                <input type="hidden" {...register("image")} />
                {errors.image && (
                    <p className="text-sm text-destructive">
                        {errors.image.message}
                    </p>
                )}
            </div>

            <div className="flex justify-end gap-2 pt-4">
                <Button type="submit" disabled={isUploading}>
                    {isUploading
                        ? "Uploading..."
                        : initialData
                        ? "Update social media"
                        : "Add social media"}
                </Button>
            </div>
        </form>
    );
}
