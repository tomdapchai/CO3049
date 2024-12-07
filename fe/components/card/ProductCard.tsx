"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { ProductView } from "@/types";
import { useState, useEffect } from "react";

const ProductCard = ({
    name,
    overview,
    price,
    image,
    slug,
    rating,
    size,
    color,
}: ProductView) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const { addToCart } = useCart();
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 968);
        };
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <Card className="group relative overflow-hidden rounded-lg border w-[300px] h-[500px]">
            <div className="flex flex-col h-full">
                <div className="relative h-[300px]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="300px"
                    />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-sm text-muted-foreground flex-grow">
                        {overview}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                        <p className="font-semibold">{formatPrice(price)}</p>
                    </div>
                    {!isLargeScreen && (
                        <div className="flex gap-4 mt-4">
                            <Link href={`/product/${slug}`} className="w-3/4">
                                <Button
                                    variant="secondary"
                                    className="w-3/4 bg-main hover:bg-[#fff3e3]/90">
                                    More details
                                </Button>
                            </Link>

                            <Button
                                variant="secondary"
                                className="w-3/4 bg-sub hover:bg-[#b88e2f]/90"
                                onClick={() => {
                                    console.log(size, color);
                                    addToCart({
                                        productName: name,
                                        productId: slug,
                                        productImage: image,
                                        productPrice: price,
                                        size: size,
                                        color: color,
                                    });
                                }}>
                                Add to cart
                            </Button>
                        </div>
                    )}
                </div>
            </div>

            {isLargeScreen && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <Link href={`/product/${slug}`} className="w-3/4">
                        <Button
                            variant="secondary"
                            className="w-full bg-main hover:bg-[#fff3e3]/90">
                            More details
                        </Button>
                    </Link>

                    <Button
                        variant="secondary"
                        className="w-3/4 bg-sub hover:bg-[#b88e2f]/90"
                        onClick={() => {
                            console.log(size, color);
                            addToCart({
                                productName: name,
                                productId: slug,
                                productImage: image,
                                productPrice: price,
                                size: size,
                                color: color,
                            });
                        }}>
                        Add to cart
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default ProductCard;
