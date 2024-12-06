"use client";
import { useState, useEffect } from "react";
import AdminProductCard from "@/components/admin/AdminProductCard";
import { Button } from "@/components/ui/button";
import { ProductDetail } from "@/types";
import { useRouter } from "next/navigation";
async function getProducts(): Promise<ProductDetail[]> {
    // This is a placeholder function. In a real application, you would fetch this data from your API or database.
    return [
        {
            slug: "example-product",
            name: "Example Product",
            price: 99.99,
            size: ["S", "M", "L"],
            color: ["Red", "Blue", "Green"],
            images: [{ src: "/placeholder.svg", imageId: "Example Product" }],
            overview: "This is an example product.",
            description: "This is a longer description of the example product.",
            reviews: [
                {
                    reviewId: "1",
                    productId: "example-product",
                    comment: "Great product!",
                    rating: 5,
                    reviewer: "John Doe",
                    date: "2023-06-01",
                },
            ],
            tags: ["example", "product"],
        },
        // Add more products as needed
    ];
}

export default function ProductsPage() {
    const [products, setProduct] = useState<ProductDetail[]>([]);
    useEffect(() => {
        getProducts().then(setProduct);
    }, []);
    const router = useRouter();
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Product Management</h1>
            <Button
                className="mb-4"
                onClick={() => router.push("./products/create")}>
                Add Product
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <AdminProductCard
                        key={product.slug}
                        slug={product.slug}
                        name={product.name}
                        price={product.price}
                        image={product.images[0].src}
                        overview={product.overview}
                        rating={
                            product.reviews.reduce(
                                (acc, review) => acc + review.rating,
                                0
                            ) / product.reviews.length
                        }
                    />
                ))}
            </div>
        </div>
    );
}
