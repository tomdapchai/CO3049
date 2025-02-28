"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { ProductDetail, siteInfo } from "@/types";
import { getAllProduct } from "@/services/ProductService";
import { getSiteInfo } from "@/services/SiteInfoService";
import { getAllCategories } from "@/services/CategoryService";
import { getAllSocialMedia } from "@/services/SocialService";
import { getAdvertisement } from "@/services/AdService";
import { category, socialMedia, advertisement } from "@/types";

interface ProductContextProps {
    products: ProductDetail[];
    siteInfo: siteInfo | null;
    categories: category[];
    socials: socialMedia[];
    advertisement: advertisement;
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
    const [siteInfo, setSiteInfo] = useState<siteInfo | null>(null);
    const [categories, setCategories] = useState<category[]>([]);
    const [socials, setSocials] = useState<socialMedia[]>([]);
    const [advertisement, setAdvertisement] = useState<advertisement>();
    const [isInitialized, setIsInitialized] = useState(false);
    useEffect(() => {
        Promise.all([
            getAllProduct(),
            getSiteInfo(),
            getAllCategories(),
            getAllSocialMedia(),
            getAdvertisement(),
        ])
            .then(
                ([
                    productData,
                    siteInfoData,
                    categoryData,
                    socialData,
                    adData,
                ]) => {
                    if ("error" in productData) {
                        console.error(productData.error);
                    } else {
                        setProducts(productData);
                    }
                    if ("error" in siteInfoData) {
                        console.error(siteInfoData.error);
                    } else {
                        setSiteInfo(siteInfoData);
                    }
                    if ("error" in categoryData) {
                        console.error(categoryData.error);
                    } else {
                        setCategories(categoryData);
                    }
                    if ("error" in socialData) {
                        console.error(socialData.error);
                    } else {
                        setSocials(socialData);
                    }
                    if ("error" in adData) {
                        console.error(adData.error);
                    } else {
                        setAdvertisement(adData);
                    }
                }
            )
            .finally(() => setIsInitialized(true));
    }, []);

    if (!isInitialized || !advertisement) {
        return null; // Or a loading spinner
    }
    return (
        <ProductContext.Provider
            value={{ products, siteInfo, categories, socials, advertisement }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
