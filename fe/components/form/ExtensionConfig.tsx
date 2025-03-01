"use client";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { extension } from "@/types";

import { IFile, fetchFiles, deleteFile } from "@/utils/file";
import FileUploader from "../chatbot/FileUploader";
import { Separator } from "@radix-ui/react-separator";
import { X } from "lucide-react";
interface ConfigDialogProps {
    isOpen: boolean;
    extension: extension | null;
    onClose: () => void;
}

export function ConfigDialog({
    isOpen,
    extension,
    onClose,
}: ConfigDialogProps) {
    const [files, setFiles] = useState<IFile[]>([]);

    const [isDeleting, setIsDeleting] = useState<number | null>(null);

    const onSaveFile = (file: IFile) => setFiles((v) => [file, ...v]);

    const handleDeleteFile = async (id: number | undefined) => {
        if (!id) return;

        try {
            setIsDeleting(id);
            await deleteFile(id);
            setFiles((prev) => prev.filter((file) => file.id !== id));
        } catch (err) {
            console.error(err);
            alert("Failed to delete file");
        } finally {
            setIsDeleting(null);
        }
    };

    useEffect(() => {
        if (extension?.id === "chatbot") {
            console.log("fetching files");
            (async () => {
                try {
                    const files = await fetchFiles();
                    setFiles(files);
                } catch (err) {
                    console.error(err);
                }
            })();
        }
    }, [extension]);

    if (!extension) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Configure {extension.name}</DialogTitle>
                    <DialogDescription>
                        Adjust the settings for this extension. Click save when
                        you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue={extension.name}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            defaultValue={extension.description}
                            className="col-span-3 min-h-[150px]"
                        />
                    </div>
                    {extension.id === "chatbot" && (
                        <div className="flex flex-col items-start w-full justify-start">
                            <FileUploader onSave={onSaveFile} />
                            <Separator />
                            <div className="w-full flex flex-col gap-2 mt-2">
                                <p className="font-bold">Uploaded Files:</p>
                                <div className="w-full flex flex-col gap-4">
                                    {files.map((file) => (
                                        <div
                                            key={file.id}
                                            className="flex items-center gap-4 w-full justify-between">
                                            <Label>{file.name}</Label>
                                            <Button
                                                className="bg-red-500 hover:bg-red-500/90"
                                                onClick={() =>
                                                    handleDeleteFile(file.id)
                                                }
                                                disabled={
                                                    isDeleting === file.id
                                                }>
                                                <X />
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                    {extension.id === "products-for-you" && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label
                                htmlFor="max-products"
                                className="text-right">
                                Max Products
                            </Label>
                            <Input
                                id="max-products"
                                type="number"
                                defaultValue="4"
                                className="col-span-3"
                            />
                        </div>
                    )}
                    {extension.id === "image-gallery" && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="layout" className="text-right">
                                Layout
                            </Label>
                            <select
                                id="layout"
                                className="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                defaultValue="grid">
                                <option value="grid">Grid</option>
                                <option value="carousel">Carousel</option>
                                <option value="masonry">Masonry</option>
                            </select>
                        </div>
                    )}
                    {extension.id === "price-comparison" && (
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="competitors" className="text-right">
                                Competitors
                            </Label>
                            <Textarea
                                id="competitors"
                                placeholder="Enter competitor URLs (one per line)"
                                className="col-span-3"
                            />
                        </div>
                    )}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={onClose}>
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
