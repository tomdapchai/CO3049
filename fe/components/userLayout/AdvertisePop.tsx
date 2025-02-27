"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { advertisement } from "@/types";

const fake_advertisement: advertisement = {
    image: "https://res.cloudinary.com/dgwujcdba/image/upload/v1733934045/ouuqyci7ua3jgqtwu8xo.png",
    link: "https://www.google.com",
};

export function AdvertisementPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [advertisement, setAdvertisement] = useState<advertisement | null>(
        null
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [500]);

    useEffect(() => {
        setAdvertisement(fake_advertisement);
        setIsVisible(true);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg bg-white shadow-xl">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-2 top-2 z-10 rounded-full bg-black/70 p-2 text-white transition-colors hover:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                    aria-label="Close advertisement">
                    <X className="h-6 w-6" />
                </button>

                <Link
                    href={advertisement!.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block">
                    <div className="relative h-[min(80vh,600px)] w-[min(90vw,800px)]">
                        <Image
                            src={advertisement!.image || "/placeholder.svg"}
                            alt="Advertisement"
                            fill
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}
