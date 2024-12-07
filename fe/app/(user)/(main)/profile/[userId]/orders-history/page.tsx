"use client";
import { useState, useEffect } from "react";
import { GetOrdersByUserId } from "@/services/OrderServices";
import { useAuth } from "@/context/AuthContext";
import { Order } from "@/types";
import OrderCard from "@/components/card/OrderCard";
const page = () => {
    const { userId } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        GetOrdersByUserId(userId).then((data) => {
            if ("error" in data) {
                console.error(data.error);
            } else {
                console.log("Orders:", data);
                setOrders(data);
            }
        });
    }, []);
    return (
        <div className="w-full flex flex-col justify-start items-start space-y-4">
            {orders.map((order) => (
                <OrderCard key={order.orderId} order={order} />
            ))}
        </div>
    );
};

export default page;
