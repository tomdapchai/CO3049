import Footer from "@/components/adminLayout/Footer";
import Header from "@/components/adminLayout/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative w-full h-full flex flex-col justify-between ">
            <Header />
            <div className="flex min-w-full flex-grow">{children}</div>
            <Footer />
        </div>
    );
};

export default layout;
