export type ProductView = {
    slug: string;
    name: string;
    price: number;
    image: string;
    overview: string;
    rating: number;
};

export type Product = {
    slug: string;
    name: string;
    price: number;
    overview: string;
    description: string;
    size: string[];
    color: string[];
    tags: string[];
};

// this will be the return type of getProduct(slug: string): Promise<ProductDetail>
export type ProductDetail = {
    slug: string;
    name: string;
    price: number;
    size?: string[];
    color?: string[];
    images: Image[];
    overview: string;
    description: string;
    reviews: Review[];
    tags: string[];
};

export type ImageDetail = {
    imageId: string;
    src: string;
};

export type ProductImage = {
    imageId: string;
    src: string;
    productId: string;
};

export type ProductImageCreate = Omit<ProductImage, "productId"> & {
    type: string;
};

export type BlogImage = {
    imageId: string;
    src: string;
};

export type Review = {
    reviewId: string;
    productId?: string;
    comment: string;
    rating: number;
    reviewer: string;
    date: string;
};

export type Order = {
    orderId: string;
    products: {
        productId: string;
        quantity: number;
        color: string;
        size: string;
    }[];
    status: string;
    createdAt: Date;
    completedAt: Date;
};

export type productOrderTrue = {
    productId: string;
    quantity: number;
    color: string;
    size: string;
    productName: string;
    productImage: string;
    productPrice: number;
};

export type productOrder = Omit<
    productOrderTrue,
    "productPrice" | "productImage" | "productName"
>;

export type OrderCreate = {
    userId: string;
    products: productOrder[];
    phoneNumber: string;
    email: string;
    address: string;
    total: number;
};

type Address = {
    street: string;
    city: string;
};

export type CartItem = {
    quantity: number;
    color: string;
    size: string;
    productName: string;
    productId: string;
    productImage: string; // Path to the product image
    productPrice: number; // Price of the product
};

export type User = {
    userId: string | number; // AUTO INCREMENT or UUID
    password: string; // encrypted
    name?: string;
    email?: string;
    phoneNumber?: string;
    cart: CartItem[]; // JSON structure for cart
    status: "active" | "banned";
    address?: Address;
};

export type Contact = {
    contactId: number; // AUTO INCREMENT
    name: string;
    email: string;
    phoneNumber: string;
    furtherInfo?: string;
};

export type Blog = {
    blogId: string; // slug
    title: string;
    content: string;
    tags?: string[]; // JSON array referencing TAG.tagName
};

export type BlogTrue = {
    blogId: string; // slug
    title: string;
    content: string;
    tags: string[];
    posted: string;
};

export type Tag = {
    tagName: string; // primary key
};
