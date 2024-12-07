"use client";
import { useEffect, useState, use } from "react";
import Image from "next/image";
import { Star, Plus, Minus, Facebook, Linkedin, Twitter } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReviewForm } from "@/components/form/ReviewForm";
import { ImageDetail, ProductDetail, Review } from "@/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ReviewStar } from "@/components/decoration/ReviewStar";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { useCart } from "@/context/CartContext";
import { ReviewCard } from "@/components/card/ReviewCard";
import parse from "html-react-parser";
import { ReviewSection } from "@/components/ReviewSection";
import { getProductBySlug } from "@/services/ProductService";
import { colorMapping } from "@/components/decoration/ColorMaping";
import { createReview, ReviewCreate } from "@/services/ReviewService";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
/* const mockProductDetail: ProductDetail = {
    reviews: [
        {
            reviewId: "1",
            reviewer: "John Doe",
            rating: 4,
            comment:
                "Great experience! The service was excellent, and I'll definitely come back.",
            date: "2024-11-24",
        },
        {
            reviewId: "2",
            reviewer: "Jane Smith",
            rating: 3,
            comment: "The product was decent, but the delivery was delayed.",
            date: "2024-11-22",
        },
        {
            reviewId: "3",
            reviewer: "Michael Johnson",
            rating: 5,
            comment:
                "Outstanding quality! Exceeded my expectations in every way.",
            date: "2024-11-20",
        },
        {
            reviewId: "4",
            reviewer: "Emily Davis",
            rating: 2,
            comment:
                "Not worth the price. The materials felt cheap, and the fit was poor.",
            date: "2024-11-18",
        },
        {
            reviewId: "5",
            reviewer: "Chris Lee",
            rating: 4,
            comment:
                "Good overall, but there’s room for improvement in the packaging.",
            date: "2024-11-15",
        },
    ],
    tags: ["office", "furniture", "chair"],
}; */

const page = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { addToCart } = useCart();
    const { slug } = use(params);
    const { userId, isLoggedIn } = useAuth();
    const [product, setProduct] = useState<ProductDetail>();
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [sizes, setSizes] = useState<string[]>([]);
    const [colors, setColors] = useState<string[]>([]);
    const [productImages, setProductImages] = useState<ImageDetail[]>([]);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const { toast } = useToast();
    const router = useRouter();
    type OrderFormValues = {
        size: string;
        color: string;
        quantity: number;
    };

    useEffect(() => {
        // await getProduct(slug).then((res) => {if (res.error) {console.error(res.error);} else {setProduct(res);}});
        getProductBySlug(slug).then((res) => {
            if ("error" in res) {
                console.log(res.error);
            } else {
                console.log(res);
                const images = res.images.filter(
                    (image) => image.type == "product"
                );
                setProductImages(images);
                setProduct(res);
                setSizes(res.size!);
                setColors(res.color!);
            }
        });
    }, []);

    const form = useForm<OrderFormValues>({
        defaultValues: {
            size: sizes[0],
            color: colors[0],
            quantity: 1,
        },
    });

    const onSubmit = (data: OrderFormValues) => {
        console.log("Form submitted:", data);

        const productOrderTrue = {
            productId: slug,
            quantity: data.quantity,
            size: data.size,
            color: data.color,
            productName: product ? product.name : "Product",
            productImage: product ? product.images[0].src : "",
            productPrice: product ? product.price : 0,
        };

        addToCart(productOrderTrue);
        // Handle form submission here (e.g., add to cart logic)
    };

    const handleReviewSubmit = async (data: any) => {
        await createReview({ ...data, productId: slug, userId: userId }).then(
            (res) => {
                if ("error" in res) {
                    console.log(res.error);
                    toast({
                        title: "Error",
                        description: "Failed to submit review",
                        variant: "destructive",
                        duration: 5000,
                    });
                } else {
                    console.log(res);
                    toast({
                        title: "Success",
                        description: "Review submitted successfully",
                        variant: "default",
                        duration: 5000,
                    });
                    /* setProduct((prev) => {
                    if (!prev) {
                        return prev;
                    }
                    return {
                        ...prev,
                        reviews: [...prev.reviews, res],
                    };
                }); */
                }
            }
        );
    };

    if (!product) {
        return (
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900" />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Product Images */}
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="order-2 md:order-1 flex md:flex-col gap-4 overflow-x-auto md:overflow-x-visible">
                        {productImages.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={cn(
                                    "border rounded-lg overflow-hidden flex-shrink-0",
                                    selectedImage === index && "border-primary"
                                )}>
                                <Image
                                    src={image.src}
                                    alt={`Product thumbnail ${index + 1}`}
                                    width={100}
                                    height={100}
                                    className="object-cover w-[100px] h-[100px]"
                                />
                            </button>
                        ))}
                    </div>
                    <div className="order-1 md:order-2 flex-1">
                        <Image
                            src={productImages[selectedImage].src}
                            alt="Main product image"
                            width={600}
                            height={600}
                            className="w-full rounded-lg"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {product.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        {formatPrice(product.price)}
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2 flex-wrap">
                            <ReviewStar
                                rating={
                                    product.reviews.length > 0
                                        ? product.reviews.reduce(
                                              (acc, review) =>
                                                  acc + review.rating,
                                              0
                                          ) / product.reviews.length
                                        : 0
                                }
                            />
                            <span className="text-muted-foreground">
                                {product.reviews.length > 0
                                    ? product.reviews.reduce(
                                          (acc, review) => acc + review.rating,
                                          0
                                      ) / product.reviews.length
                                    : 0}
                                /5
                            </span>
                        </div>

                        <span className="text-muted-foreground">
                            ({product.reviews.length} Customer Reviews)
                        </span>
                    </div>

                    <p className="text-muted-foreground">{product.overview}</p>

                    <div className="space-y-4">
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="size"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium mb-2">
                                                Size
                                            </FormLabel>
                                            <FormControl>
                                                <div className="flex gap-2 flex-wrap">
                                                    {sizes.map((size) => (
                                                        <Button
                                                            key={size}
                                                            type="button"
                                                            variant={
                                                                field.value ===
                                                                size
                                                                    ? "default"
                                                                    : "outline"
                                                            }
                                                            onClick={() =>
                                                                field.onChange(
                                                                    size
                                                                )
                                                            }
                                                            className={`${
                                                                field.value ===
                                                                size
                                                                    ? "bg-sub hover:bg-sub"
                                                                    : ""
                                                            }`}>
                                                            {size}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="color"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-medium mb-2">
                                                Color
                                            </FormLabel>
                                            <FormControl>
                                                <div className="flex gap-2">
                                                    {colors.map((color) => (
                                                        <button
                                                            key={color}
                                                            type="button"
                                                            onClick={() =>
                                                                field.onChange(
                                                                    color
                                                                )
                                                            }
                                                            className={cn(
                                                                "w-8 h-8 rounded-full border-2",
                                                                field.value ===
                                                                    color
                                                                    ? "border-primary"
                                                                    : "border-transparent"
                                                            )}
                                                            style={{
                                                                backgroundColor:
                                                                    // @ts-ignore
                                                                    colorMapping[
                                                                        color
                                                                    ],
                                                            }}
                                                            aria-label={`Select ${color} color`}
                                                        />
                                                    ))}
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-wrap items-end justify-start gap-4 w-full">
                                    <FormField
                                        control={form.control}
                                        name="quantity"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="font-medium mb-2">
                                                    Quantity
                                                </FormLabel>
                                                <FormControl>
                                                    <div className="flex items-center gap-4 flex-wrap">
                                                        <div className="flex items-center border rounded-md">
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => {
                                                                    const newQuantity =
                                                                        Math.max(
                                                                            1,
                                                                            field.value -
                                                                                1
                                                                        );
                                                                    setQuantity(
                                                                        newQuantity
                                                                    );
                                                                    field.onChange(
                                                                        newQuantity
                                                                    );
                                                                }}
                                                                aria-label="Decrease quantity">
                                                                <Minus className="w-4 h-4" />
                                                            </Button>
                                                            <span className="w-12 text-center">
                                                                {field.value}
                                                            </span>
                                                            <Button
                                                                type="button"
                                                                variant="ghost"
                                                                size="icon"
                                                                onClick={() => {
                                                                    const newQuantity =
                                                                        field.value +
                                                                        1;
                                                                    setQuantity(
                                                                        newQuantity
                                                                    );
                                                                    field.onChange(
                                                                        newQuantity
                                                                    );
                                                                }}
                                                                aria-label="Increase quantity">
                                                                <Plus className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <Button
                                        type="submit"
                                        className="flex-1 flex-grow bg-sub hover:bg-[#b88e2f]/90">
                                        Add To Cart
                                    </Button>
                                </div>
                            </form>
                        </Form>

                        <div className="border-t pt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <span className="text-muted-foreground">
                                        Tags:
                                    </span>
                                    <span className="ml-2">
                                        {product.tags.join(", ")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="description" className="space-y-4">
                <TabsList className="flex-wrap">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="reviews">
                        Reviews ({product.reviews.length})
                    </TabsTrigger>
                </TabsList>
                <TabsContent
                    value="description"
                    className="space-y-4 flex w-full justify-center items-center">
                    <div className="w-[800px] flex justify-center items-center space-y-2">
                        {parse(product.description)}
                    </div>
                </TabsContent>
                <TabsContent value="reviews" className="space-y-4 w-full">
                    <div className="space-y-8">
                        {product.reviews.length > 0 ? (
                            <ReviewSection reviews={product.reviews} />
                        ) : (
                            <div className="w-full flex justify-center items-center">
                                <p className="text-xl font-bold text-sub">
                                    No review yet, be the first!
                                </p>
                            </div>
                        )}

                        <div className="max-w-md mx-auto">
                            {isLoggedIn ? (
                                <div className="max-w-md mx-auto">
                                    <h3 className="text-lg text-sub font-semibold mb-4">
                                        Write a Review
                                    </h3>
                                    <ReviewForm onSubmit={handleReviewSubmit} />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center space-y-4">
                                    <Button
                                        onClick={() => {
                                            router.push("/sign-in");
                                        }}
                                        className="bg-sub p-6 hover:bg-[#b88e2f]/90">
                                        <p className="text-lg font-bold">
                                            Log in to review
                                        </p>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default page;
