import api from "@/api";
import { ProductDetail, ProductImage, Review } from "@/types";

export const getProduct = async (
    slug: string
): Promise<ProductDetail | { error: string }> => {
    const product = await api.get(`api/product/routes.php?slug=${slug}`);
    const productImage = "";
    // get images for product, then return the product after adding the images
    return { error: "Not implemented" };
};

export const getAllProduct = async (): Promise<
    ProductDetail[] | { error: string }
> => {
    const products = await api.get("api/product/routes.php");
    const productImages = "";
    // get images for each product, then return the products after adding the images
    return products.data;
};

export const createProduct = async (
    product: ProductDetail
): Promise<{ message: string } | { error: string }> => {
    const response = await api.post("api/product/routes.php", {
        data: product,
    });
    return { error: "Not implemented" };
};

export const updateProduct = async (
    slug: string,
    product: ProductDetail
): Promise<{ message: string } | { error: string }> => {
    const response = await api.put("api/product/routes.php", {
        slug,
        data: product,
    });
    return { error: "Not implemented" };
};

export const deleteProduct = async (
    id: string
): Promise<{ message: string } | { error: string }> => {
    const response = await api.delete(`api/product/routes.php?id=${id}`);
    return { error: "Not implemented" };
};
