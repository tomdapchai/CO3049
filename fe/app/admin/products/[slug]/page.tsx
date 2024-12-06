"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const { slug } = params;
    return <div>page</div>;
};

export default page;
