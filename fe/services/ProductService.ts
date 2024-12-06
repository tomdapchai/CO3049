import api from "@/api";
import { ProductDetail, ProductImage, Review } from "@/types";
import { getImagesFromProduct } from "./ImageService";
import { getReviewsByProductId } from "./ReviewService";

export const getProductBySlug = async (
    slug: string
): Promise<ProductDetail | { error: string }> => {
    try {
        const product = await api.get(`api/product/routes.php?slug=${slug}`);
        const { productId, short_description, full_description, ...rest } =
            product.data.data;

        // get images for product
        const images = await getImagesFromProduct(slug);
        if ("error" in images) {
            return { error: images.error };
        }

        // get reviews for product, then return the product after adding the reviews
        const reviews = await getReviewsByProductId(slug);
        return {
            ...rest,
            slug: productId,
            overview: short_description,
            description: full_description,
            images,
            reviews,
        };
    } catch (error) {
        console.log("Error fetching product:", error);
        return { error: "Error fetching product" };
    }
};

export const getAllProduct = async (): Promise<
    ProductDetail[] | { error: string }
> => {
    try {
        const products = await api.get("api/product/routes.php");
        // the same as getProductBySlug, but larget scale
        // map through all products and get images and reviews for each
        const data = products.data.data;
        const res = await Promise.all(
            data.map(async (product: any) => {
                const {
                    productId,
                    short_description,
                    full_description,
                    ...rest
                } = product;
                const images = await getImagesFromProduct(productId);
                if ("error" in images) {
                    return { error: images.error };
                }
                const reviews = await getReviewsByProductId(productId);
                return {
                    ...rest,
                    slug: productId,
                    overview: short_description,
                    description: full_description,
                    images,
                    reviews,
                };
            })
        );

        return res;
    } catch (error) {
        console.log("Error fetching products:", error);
        return { error: "Error fetching products" };
    }
};

type ProductCreate = Omit<ProductDetail, "images" | "reviews">;
export const createProduct = async (
    product: ProductCreate
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.post("api/product/routes.php", product);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error creating product:", error);
        return { error: "Error creating product" };
    }
};

export const updateProduct = async (
    slug: string,
    product: ProductDetail
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.put(
            `api/product/routes.php?slug=${slug}`,
            product
        );
        return { message: response.data.message };
    } catch (error) {
        console.log("Error updating product:", error);
        return { error: "Error updating product" };
    }
};

export const deleteProduct = async (
    id: string
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.delete(`api/product/routes.php?slug=${id}`);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error deleting product:", error);
        return { error: "Error deleting product" };
    }
};
