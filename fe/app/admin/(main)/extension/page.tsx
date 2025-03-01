"use client";

import { useState } from "react";
import { ExtensionCard } from "@/components/card/ExtensionCard";
import { ConfigDialog } from "@/components/form/ExtensionConfig";
import { extension } from "@/types";

const initialExtensions: extension[] = [
    {
        id: "chatbot",
        name: "Chatbot",
        description:
            "Add an AI-powered chatbot to assist your customers with inquiries and support.",
        installed: true,
        enabled: true,
    },
    {
        id: "products-for-you",
        name: "Products For You",
        description:
            "Personalized product recommendations based on user browsing history and preferences.",
        installed: true,
        enabled: true,
    },
    {
        id: "image-gallery",
        name: "Image Gallery",
        description:
            "Beautiful, responsive image galleries to showcase your products or portfolio.",
        installed: false,
        enabled: false,
    },
    {
        id: "price-comparison",
        name: "Price Comparison",
        description:
            "Compare prices with competitors to help customers make informed decisions.",
        installed: true,
        enabled: false,
    },
    {
        id: "advertisement",
        name: "Advertisement",
        description:
            "Monetize your website by displaying ads from partners and sponsors.",
        installed: true,
        enabled: true,
    },
];

export default function Extensions() {
    const [extensions, setExtensions] =
        useState<extension[]>(initialExtensions);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedExtension, setSelectedExtension] =
        useState<extension | null>(null);

    const handleInstall = (id: string) => {
        setExtensions(
            extensions.map((ext) =>
                ext.id === id ? { ...ext, installed: true, enabled: true } : ext
            )
        );
    };

    const handleToggle = (id: string, enabled: boolean) => {
        setExtensions(
            extensions.map((ext) => (ext.id === id ? { ...ext, enabled } : ext))
        );
    };

    const openConfigDialog = (extension: extension) => {
        setSelectedExtension(extension);
        setIsDialogOpen(true);
    };

    const closeConfigDialog = () => {
        setIsDialogOpen(false);
        setSelectedExtension(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Extensions</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {extensions.map((extension) => (
                    <ExtensionCard
                        key={extension.id}
                        extension={extension}
                        onInstall={handleInstall}
                        onToggle={handleToggle}
                        // if extension id is price-comparison, no onConfigure
                        onConfigure={
                            extension.id === "price-comparison" ||
                            extension.id === "products-for-you" ||
                            extension.id === "image-gallery"
                                ? undefined
                                : openConfigDialog
                        }
                    />
                ))}
            </div>

            <ConfigDialog
                isOpen={isDialogOpen}
                extension={selectedExtension}
                onClose={closeConfigDialog}
            />
        </div>
    );
}
