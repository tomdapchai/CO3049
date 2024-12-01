export type ProductView = {
    slug: string;
    name: string;
    price: number;
    image: string;
    overview: string;
};

export type Product = {
    slug: string;
    name: string;
    price: number;
    overview: string;
    description: string;
    tags: string[];
};

// this will be the return type of getProduct(slug: string): Promise<ProductDetail>
export type ProductDetail = {
    slug: string;
    name: string;
    price: number;
    images: ProductImage[];
    overview: string;
    description: string;
    reviews: Review[];
    tags: string[];
};

export type ProductImage = {
    imageId: string;
    src: string;
    productId: string;
};

export type BlogImage = {
    imageId: string;
    src: string;
    blogId: string;
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
};

export type productOrder = {
    productId: string;
    quantity: number;
    color: string;
    size: string;
    productName: string;
    productImage: string;
    productPrice: number;
};
