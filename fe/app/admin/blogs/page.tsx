"use client";
import { useState, useEffect } from "react";
import { GetAllBlogs } from "@/services/BlogService";
import { Blog } from "@/types";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const page = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        GetAllBlogs().then((data) => {
            if ("error" in data) {
                console.error(data.error);
            } else {
                console.log("Blogs:", data);
                setBlogs(data);
            }
        });
    }, []);
    // display will be done later, easy to do
    return <div>page</div>;
};

export default page;
