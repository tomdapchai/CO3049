"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import AddressForm from "@/components/form/AddressForm";
import { useToast } from "@/hooks/use-toast";
import { createOrder } from "@/services/OrderServices";
import * as z from "zod";
import { addressFormSchema } from "@/lib/validation";
export default function CheckoutPage() {
    const { cart } = useCart();
    const { userId, isLoggedIn } = useAuth();
    const { toast } = useToast();
    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.productPrice * item.quantity;
        }, 0);
    };

    const handleSubmit = async (data: z.infer<typeof addressFormSchema>) => {
        // Here you would typically send the order data to your backend
        const { streetAddress, city, province, ...rest } = data;
        console.log("Order submitted:", {
            userId,
            ...rest,
            address: `${streetAddress}, ${city}, ${province}`,
            products: cart,
            total: calculateTotal(),
        });

        await createOrder({
            userId,
            ...rest,
            address: `${streetAddress}, ${city}, ${province}`,
            products: cart,
            total: calculateTotal(),
        }).then((res) => {
            if ("error" in res) {
                return toast({
                    title: "Error",
                    description: "An error occurred while placing the order.",
                    variant: "destructive",
                });
            } else {
                return toast({
                    title: "Order placed successfully!",
                    description:
                        "We've received your order and will process it shortly.",
                });
            }
        });
        // Show a success message to the user

        // You might want to clear the cart or redirect the user after a successful order
        // clearCart()
        // router.push('/order-confirmation')
    };

    return (
        <div
            id="checkout-container"
            className="w-full h-full flex flex-col space-y-6">
            <div className="flex flex-col w-full h-[400px] relative justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
                <div className="absolute inset-0 bg-white/10"></div>
                <Image src={logoImg} alt="Furniro" priority className="z-10" />
                <h1 className="relative z-10 font-bold text-6xl text-sub">
                    Checkout
                </h1>
            </div>
            <div className="bg-white rounded px-8 pt-6 pb-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="w-full px-12 py-12">
                        <h2 className="text-3xl font-bold mb-6">
                            Billing details
                        </h2>
                        <AddressForm onSubmit={handleSubmit} />
                    </div>
                    <div className="max-w-3xl w-full px-24 py-24 bg-white rounded-md">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="text-left">
                                <h2 className="text-xl font-bold mb-4">
                                    Product
                                </h2>
                            </div>
                            <div className="text-right">
                                <h2 className="text-xl font-bold mb-4">
                                    Subtotal
                                </h2>
                            </div>
                        </div>
                        {cart.map((item, index) => (
                            <div
                                key={index}
                                className="flex justify-between mb-2">
                                <span className="text-gray-400">
                                    {item.productName}
                                    <span className="px-2 text-sm font-normal text-gray-700">
                                        x {item.quantity}
                                    </span>
                                </span>

                                <span className="text-gray-700 font-medium">
                                    {formatPrice(
                                        item.productPrice * item.quantity
                                    )}
                                </span>
                            </div>
                        ))}
                        <div className="flex justify-between pt-2">
                            <span className="text-gray-700">Total</span>
                            <span className="text-yellow-500 font-extrabold text-lg">
                                {formatPrice(calculateTotal())}
                            </span>
                        </div>

                        <div className="text-sm text-gray-600 mt-4">
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account, and for other purposes described in
                            our{" "}
                            <Link
                                href="/privacy-policy"
                                className="underline font-extrabold">
                                privacy policy
                            </Link>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
