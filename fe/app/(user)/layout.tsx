import Footer from "@/components/userLayout/Footer";
import Header from "@/components/userLayout/Header";
import React from "react";
import CartProvider from "@/context/CartContext";
import SocialMediaAndBot from "@/components/userLayout/SocialMediaAndBot";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full min-h-screen flex flex-col justify-between ">
            <CartProvider>
                <Header />
                <div className="flex min-w-full flex-grow">{children}</div>
                <SocialMediaAndBot />
                <Footer />
            </CartProvider>
        </div>
    );
};

export default layout;
