import { productOrder } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatPrice = (price: number): string => {
    return price.toLocaleString("en-US", {
        style: "currency",
        currency: "VND",
        currencyDisplay: "code",
    });
};

export const sortProducts = (products: any[], sortBy: string) => {};
