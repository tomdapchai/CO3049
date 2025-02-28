"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { socialMedia } from "@/types";
import { useProduct } from "@/context/ProductContext";
import Image from "next/image";

interface Props {
    socialMedia: socialMedia[];
}

const fake_socialMedia: socialMedia[] = [
    {
        id: "1",
        name: "Facebook",
        info: "https://www.facebook.com",
        image: "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png",
    },
    {
        id: "2",
        name: "Instagram",
        info: "https://www.instagram.com",
        image: "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png",
    },
    {
        id: "3",
        name: "Twitter",
        info: "https://www.twitter.com",
        image: "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png",
    },
    {
        id: "4",
        name: "LinkedIn",
        info: "https://www.linkedin.com",
        image: "https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png",
    },
];

const SocialMedia = () => {
    const { socials } = useProduct();

    return (
        <div className="fixed right-6 bottom-6">
            <div className="flex flex-col justify-start items-start space-y-2 bg-transparent">
                {socials.map((media) => {
                    return (
                        <a
                            key={media.id}
                            className="w-12 h-12 rounded-full cursor-pointer shadow-xl border-2"
                            href={media.info}
                            target="_blank"
                            rel="noreferrer">
                            <Image
                                src={media.image}
                                alt={media.name}
                                width={100}
                                height={100}
                                className="rounded-full"
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default SocialMedia;
