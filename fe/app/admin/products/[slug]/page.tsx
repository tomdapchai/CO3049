"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ProductDetail } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploader from "@/components/form/ImageUploader";
import TagInput from "@/components/form/TagInput";
import { Review } from "@/types";

// This is a mock function to fetch product data. Replace with actual API call in a real application.
const getProduct = async (slug: string): Promise<ProductDetail> => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
        slug,
        name: "Example Product",
        price: 99.99,
        size: ["S", "M", "L"],
        color: ["Red", "Blue", "Green"],
        images: [{ src: "/placeholder.svg", alt: "Example Product" }],
        overview: "This is an example product.",
        description: "This is a longer description of the example product.",
        reviews: [
            {
                reviewId: "1",
                productId: slug,
                comment: "Great product!",
                rating: 5,
                reviewer: "John Doe",
                date: "2023-06-01",
            },
        ],
        tags: ["example", "product"],
    };
};

export default function ProductDetailPage() {
    const params = useParams();
    const { slug } = params;
    const [product, setProduct] = useState<ProductDetail | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useState(() => {
        getProduct(slug).then(setProduct);
    }, [slug]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Implement save logic here
        setIsEditing(false);
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prev) => (prev ? { ...prev, [name]: value } : null));
    };

    const handleImageUpload = (file: File) => {
        // Implement image upload logic
    };

    const handleImageDelete = (src: string) => {
        // Implement image delete logic
    };

    const handleImageAltUpdate = (oldAlt: string, newAlt: string) => {
        // Implement image alt update logic
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Product Details</h1>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    {isEditing ? (
                        <Input
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="mt-1"
                        />
                    ) : (
                        <p>{product.name}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Price
                    </label>
                    {isEditing ? (
                        <Input
                            name="price"
                            type="number"
                            value={product.price}
                            onChange={handleInputChange}
                            className="mt-1"
                        />
                    ) : (
                        <p>${product.price.toFixed(2)}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Size
                    </label>
                    {isEditing ? (
                        <Input
                            name="size"
                            value={product.size.join(", ")}
                            onChange={(e) =>
                                setProduct((prev) =>
                                    prev
                                        ? {
                                              ...prev,
                                              size: e.target.value.split(", "),
                                          }
                                        : null
                                )
                            }
                            className="mt-1"
                        />
                    ) : (
                        <p>{product.size.join(", ")}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Color
                    </label>
                    {isEditing ? (
                        <Input
                            name="color"
                            value={product.color.join(", ")}
                            onChange={(e) =>
                                setProduct((prev) =>
                                    prev
                                        ? {
                                              ...prev,
                                              color: e.target.value.split(", "),
                                          }
                                        : null
                                )
                            }
                            className="mt-1"
                        />
                    ) : (
                        <p>{product.color.join(", ")}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Overview
                    </label>
                    {isEditing ? (
                        <Textarea
                            name="overview"
                            value={product.overview}
                            onChange={handleInputChange}
                            className="mt-1"
                        />
                    ) : (
                        <p>{product.overview}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    {isEditing ? (
                        <Textarea
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            className="mt-1"
                        />
                    ) : (
                        <p>{product.description}</p>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Images
                    </label>
                    <ImageUploader
                        uploadedImages={product.images}
                        onUpload={handleImageUpload}
                        onDelete={handleImageDelete}
                        onUpdateAlt={handleImageAltUpdate}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Tags
                    </label>
                    {isEditing ? (
                        <TagInput
                            tags={product.tags}
                            setTags={(newTags) =>
                                setProduct((prev) =>
                                    prev ? { ...prev, tags: newTags } : null
                                )
                            }
                        />
                    ) : (
                        <p>{product.tags.join(", ")}</p>
                    )}
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Reviews</h2>
                    {product.reviews.map((review: Review) => (
                        <div
                            key={review.reviewId}
                            className="border-b pb-4 mb-4">
                            <p>
                                <strong>{review.reviewer}</strong> -{" "}
                                {review.date}
                            </p>
                            <p>Rating: {review.rating}/5</p>
                            <p>{review.comment}</p>
                        </div>
                    ))}
                </div>
                {isEditing ? (
                    <Button onClick={handleSave}>Save Changes</Button>
                ) : (
                    <Button onClick={handleEdit}>Edit Product</Button>
                )}
            </div>
        </div>
    );
}
