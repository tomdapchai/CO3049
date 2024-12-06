import axios from "axios";
import api from "@/api";
import { Order, OrderCreate } from "@/types";

export const GetOrdersByUserId = async (
    userId: string
): Promise<Order[] | { error: string }> => {
    try {
        const response = await api.get(`api/order/routes.php?userId=${userId}`);
        console.log("Backend Response:", response.data);
        const res: Order[] = response.data.map((order: Order) => {
            return {
                orderId: order.orderId,
                products: order.products.map((product) => {
                    return {
                        productId: product.productId,
                        quantity: product.quantity,
                        color: product.color,
                        size: product.size,
                    };
                }),
                status: order.status,
                createdAt: new Date(order.createdAt),
                completedAt: new Date(order.completedAt),
            };
        });
        return res;
    } catch (error) {
        console.error("Error fetching orders:", error);
        return { error: "Error fetching orders" };
    }
};

export const getAllOrders = async (): Promise<Order[] | { error: string }> => {
    try {
        const response = await api.get(`api/order/routes.php`);
        console.log("Backend Response:", response.data);
        const res: Order[] = response.data.map((order: Order) => {
            return {
                orderId: order.orderId,
                products: order.products.map((product) => {
                    return {
                        productId: product.productId,
                        quantity: product.quantity,
                        color: product.color,
                        size: product.size,
                    };
                }),
                status: order.status,
                createdAt: new Date(order.createdAt),
                completedAt: new Date(order.completedAt),
            };
        });
        return res;
    } catch (error) {
        console.log("Error fetching orders:", error);
        return { error: "Error fetching orders" };
    }
};

export const getOderById = async (
    orderId: string
): Promise<Order | { error: string }> => {
    try {
        const response = await api.get(
            `api/order/routes.php?orderId=${orderId}`
        );
        console.log("Backend Response:", response.data);
        const res: Order = response.data.map((order: Order) => {
            return {
                orderId: order.orderId,
                products: order.products.map((product) => {
                    return {
                        productId: product.productId,
                        quantity: product.quantity,
                        color: product.color,
                        size: product.size,
                    };
                }),
                status: order.status,
                createdAt: new Date(order.createdAt),
                completedAt: new Date(order.completedAt),
            };
        });
        return res;
    } catch (error) {
        console.log("Error fetching orders:", error);
        return { error: "Error fetching orders" };
    }
};

export const createOrder = async (
    data: OrderCreate
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.post(`api/order/routes.php`, data);
        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error creating order:", error);
        return { error: "Error creating order" };
    }
};

export const updateOrderStatus = async (
    orderId: string,
    status: string
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.put(`api/order/routes.php`, {
            orderId,
            status,
        });
        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error updating order status:", error);
        return { error: "Error updating order status" };
    }
};

export const updateOrder = async (
    orderId: string,
    data: OrderCreate
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.put(
            `api/order/routes.php?orderId=${orderId}`,
            data
        );
        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error update order:", error);
        return { error: "Error update order" };
    }
};

export const deleteOrder = async (
    orderId: string
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.delete(
            `api/order/routes.php?orderId=${orderId}`
        );
        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error deleting order:", error);
        return { error: "Error deleting order" };
    }
};
