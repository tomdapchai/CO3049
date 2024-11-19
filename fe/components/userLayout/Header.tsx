"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { useAuth } from "@/context/AuthContext";
import { links } from "@/lib/constants";
import { Separator } from "../ui/separator";

const Header = () => {
    // const {userId} = useAuth();
    const userId = 1;
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const headerIcons = [
        {
            alt: "Cart",
            src: "/images/icons/cart.svg",
            url: "/cart",
        },
        {
            alt: "Profile",
            src: "/images/icons/user.svg",
            url: `/profile/${userId}`,
        },
    ];

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <header className="w-full flex justify-between p-4 sticky top-0 left-0 z-50 backdrop-blur-md border-b border-gray-400">
            <div className="flex justify-between items-center gap-2">
                <Link href="/">
                    <Image
                        src={"/images/logo.png"}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <h1 className="font-bold text-xl">Furniro</h1>
            </div>

            {isLargeScreen ? (
                <>
                    <div className="flex justify-between items-center gap-10">
                        {links.map((link) => (
                            <Link key={link.title} href={link.url}>
                                <Button variant="link" className="font-bold">
                                    {link.title}
                                </Button>
                            </Link>
                        ))}
                    </div>

                    <div className="flex justify-between items-center gap-4">
                        <Button size="icon" variant="ghost">
                            <Image
                                src={"/images/icons/search.svg"}
                                alt="Search"
                                width={20}
                                height={20}
                            />
                        </Button>
                        {headerIcons.map((icon) => (
                            <Link key={icon.alt} href={icon.url}>
                                <Button size="icon" variant="ghost">
                                    <Image
                                        src={icon.src}
                                        alt={icon.alt}
                                        width={20}
                                        height={20}
                                    />
                                </Button>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src={"/images/icons/menu.svg"}
                            alt="Menu"
                            width={30}
                            height={30}
                        />
                    </SheetTrigger>
                    <SheetContent className="w-[250px]">
                        <SheetHeader>
                            <SheetTitle className="text-xl">Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col space-y-4">
                            <div className="flex flex-col justify-start items-start">
                                {links.map((link) => (
                                    <div className="w-full" key={link.title}>
                                        <Link href={link.url}>
                                            <Button
                                                variant="ghost"
                                                className="font-bold text-md p-0 m-0">
                                                {link.title}
                                            </Button>
                                        </Link>
                                        <Separator />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center gap-2 h-[20px]">
                                <Button size="icon" variant="ghost">
                                    <Image
                                        src={"/images/icons/search.svg"}
                                        alt="Search"
                                        width={24}
                                        height={24}
                                    />
                                </Button>

                                {headerIcons.map((icon) => (
                                    <Link key={icon.alt} href={icon.url}>
                                        <Button size="icon" variant="ghost">
                                            <Image
                                                src={icon.src}
                                                alt={icon.alt}
                                                width={24}
                                                height={24}
                                            />
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </header>
    );
};

export default Header;
