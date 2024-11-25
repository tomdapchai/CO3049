import api from "@/api";
import axios from "axios";
import { BlogImage, ProductImage } from "@/types";
// upload image will be done via cdn, cloudinary (already had the code)

export const getProductImages = async (
    productId: string
): Promise<ProductImage[] | { error: string }> => {
    const images = await api.get(`/image/product/${productId}`);
    return { error: "Not implemented" };
};

export const getBlogImages = async (
    blogId: string
): Promise<BlogImage[] | { error: string }> => {
    const images = await api.get(`/image/blog/${blogId}`);
    return { error: "Not implemented" };
};
