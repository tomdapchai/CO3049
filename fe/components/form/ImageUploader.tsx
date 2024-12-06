import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check } from "lucide-react";

type UploadedImage = {
    alt: string;
    src: string;
    file: File;
};

type ImageUploaderProps = {
    uploadedImages: UploadedImage[];
    onUpload: (file: File) => void;
    onDelete: (src: string) => void;
    onUpdateAlt: (oldAlt: string, newAlt: string) => void;
};

export default function ImageUploader({
    uploadedImages,
    onUpload,
    onDelete,
    onUpdateAlt,
}: ImageUploaderProps) {
    const [editingAlt, setEditingAlt] = useState<string | null>(null);
    const [newAlt, setNewAlt] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach(onUpload);
        }
    };

    const handleAltChange = (oldAlt: string) => {
        onUpdateAlt(oldAlt, newAlt);
        setEditingAlt(null);
        setNewAlt("");
    };

    const startEditing = (alt: string) => {
        setEditingAlt(alt);
        setNewAlt(alt);
    };

    return (
        <div className="flex flex-col gap-4">
            <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                multiple
            />
            <ScrollArea className="h-fit">
                {uploadedImages.map((image) => (
                    <div
                        key={image.src}
                        className="flex items-center gap-2 mb-2">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-16 h-16 object-cover"
                        />
                        {editingAlt === image.alt ? (
                            <div className="flex items-center gap-2">
                                <Input
                                    value={newAlt}
                                    onChange={(e) => setNewAlt(e.target.value)}
                                    autoFocus
                                />
                                <Button
                                    size="icon"
                                    onClick={() => handleAltChange(image.alt)}>
                                    <Check className="h-4 w-4" />
                                </Button>
                            </div>
                        ) : (
                            <span onClick={() => startEditing(image.alt)}>
                                {image.alt}
                            </span>
                        )}
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => onDelete(image.src)}>
                            Delete
                        </Button>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
}
