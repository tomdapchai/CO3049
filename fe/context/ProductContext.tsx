"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ProductDetail } from "@/types";
import { getAllProduct } from "@/services/ProductService";

interface ProductContextProps {
    products: ProductDetail[];
}

const ProductContext = createContext<ProductContextProps | undefined>(
    undefined
);

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};

interface ProductProviderProps {
    children: React.ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const [products, setProducts] = useState<ProductDetail[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        getAllProduct().then((data) => {
            if ("error" in data) {
                console.error(data.error);
            } else {
                console.log("Products:", data);
                setProducts(data);
                setIsInitialized(true);
            }
        });
    }, []);

    if (!isInitialized) {
        return null; // Or a loading spinner
    }
    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
