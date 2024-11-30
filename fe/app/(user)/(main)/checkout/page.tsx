"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { PlaceOrder } from "@/lib/placeOrderAction";
import { useActionState } from "react";
import Link from "next/link";
import NavLink from "@/components/profile/nav-link";
import Image from "next/image";
import logoImg from "@/public/images/logo.png";
import AddressesForm from "@/components/form/AddressesForm";

export default function CheckoutPage() {
    const [state, formAction, isPending] = useActionState(PlaceOrder, null);
    const { cart } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => {
            return total + item.productPrice * item.quantity;
        }, 0);
    };

    return (
        <div
            id="checkout-container"
            className="w-full h-full flex flex-col space-y-6">
            <div className="flex flex-col w-full h-[400px] relative flex justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
                <div className="absolute inset-0 bg-white/10"></div>
                <Image src={logoImg} alt="Furniro" priority className="z-10" />
                <h1 className="relative z-10 font-bold text-6xl text-sub">
                    Checkout
                </h1>
                <nav className="z-10 font-bold text-sm">
                    <ul className="flex list-none space-x-2">
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <span className="text-gray-500">{"<"}</span>
                        <li>
                            <NavLink href="/checkout">Checkout</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <form
                action={formAction}
                className="bg-white rounded px-8 pt-6 pb-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <AddressesForm />
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
                        {cart.map((item) => (
                            <div
                                key={`${item.productId}_${item.productName}`}
                                className="flex justify-between mb-2">
                                <span className="text-gray-400">
                                    {item.productName}
                                    <span className="px-2 text-sm font-normal text-gray-700">
                                        x {item.quantity}
                                    </span>
                                </span>

                                <span className="text-gray-700 font-medium">
                                    {formatPrice(item.productPrice)}
                                </span>
                            </div>
                        ))}
                        <div className="flex justify-between pt-2">
                            <span className="text-gray-700">Total</span>
                            <span className="text-yellow-500 font-extrabold text-lg">
                                {formatPrice(calculateTotal())}
                            </span>
                        </div>

                        <div className="border-t mt-4 pt-4">
                            <h3 className="text-lg font-bold">
                                Payment Options
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                            </p>
                            <div className="mt-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payment-method"
                                        value="direct-bank-transfer"
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2 font-medium text-gray-700">
                                        Direct Bank Transfer
                                    </span>
                                </label>
                            </div>
                            <div className="mt-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payment-method"
                                        value="cash-on-delivery"
                                        className="form-radio text-blue-600"
                                    />
                                    <span className="ml-2 font-medium text-gray-700">
                                        Cash On Delivery
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="text-sm text-gray-600 mt-4">
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account, and for other purposes described in
                            our{" "}
                            <Link
                                href="/checkout"
                                className="underline font-extrabold">
                                privacy policy
                            </Link>
                            .
                        </div>

                        <div className="flex flex-col mt-6 justify-items-center items-center">
                            {/* when using "use server" */}
                            {/* <Suspense fallback={<p>Fetching order...</p>}> */}
                            <button
                                type="submit"
                                className="w-3/5 bg-white text-gray-500 py-3 border rounded-md shadow-md hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Place Order
                            </button>
                            {isPending ? (
                                <p className="mt-2 text-gray-500">Loading...</p>
                            ) : (
                                <p className="mt-2 text-gray-500">{state}</p>
                            )}
                            {/* </Suspense> */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
