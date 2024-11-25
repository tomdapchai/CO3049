import api from "@/api";
import axios from "axios";
import { ProductDetail, ProductImage, Review } from "@/types";

export const getProduct = async (
    slug: string
): Promise<ProductDetail | { error: string }> => {
    const product = await api.get(`/product/${slug}`);

    return { error: "Not implemented" };
};

export const createProduct = async (): Promise<
    { message: string } | { error: string }
> => {
    return { error: "Not implemented" };
};
