"use client";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const { orderId } = params;
    return <div>page</div>;
};

export default page;
