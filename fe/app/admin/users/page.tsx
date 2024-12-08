"use client";
import { useState, useEffect } from "react";
import { Review } from "@/types";
import { User } from "@/types";
import { getAllUsers } from "@/services/UserService";
import { Order } from "@/types";
import { getAllOrders } from "@/services/OrderServices";
import { getAllReviews } from "@/services/ReviewService";
const page = () => {
    return <div>page</div>;
};

export default page;
