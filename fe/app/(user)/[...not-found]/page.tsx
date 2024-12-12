import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const page = () => {
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">
            Oops! The page you're looking for doesn't exist.
        </p>
        <Link href="/">
            <Button variant="default">Go back home</Button>
        </Link>
    </div>;
};

export default page;
