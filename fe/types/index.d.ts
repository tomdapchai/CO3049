export interface ProductView {
    slug: string;
    name: string;
    price: number;
    image: string;
    overview: string;
}

export interface Product {
    slug: string;
    name: string;
    price: number;
    overview: string;
    description: string;
    tags: string[];
}

// this will be the return type of getProduct(slug: string): Promise<ProductDetail>
export interface ProductDetail {
    slug: string;
    name: string;
    price: number;
    images: ProductImage[];
    overview: string;
    description: string;
    reviews: Review[];
    tags: string[];
}

export interface ProductImage {
    imageId: string;
    src: string;
    productId: string;
}

export interface BlogImage {
    imageId: string;
    src: string;
    blogId: string;
}

export interface Review {
    reviewId: string;
    productId?: string;
    comment: string;
    rating: number;
    reviewer: string;
    date: string;
}

export interface Order {
    orderId: string;
    products: {
        productId: string;
        quantity: number;
        color: string;
        size: string;
    }[];
    status: string;
    createdAt: Date;
}

export interface productOrder {
    productId: string;
    quantity: number;
    color: string;
    size: string;
    productName: string;
    productImage: string;
    productPrice: number;
}
