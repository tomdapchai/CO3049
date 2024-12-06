"use client";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    RegionDropdown,
    CountryRegionData,
} from "react-country-region-selector";
import { addressFormSchema } from "@/lib/validation";

export type AddressFormValues = z.infer<typeof addressFormSchema>;

interface AddressFormProps {
    onSubmit: (data: AddressFormValues) => void;
}

export default function AddressForm({ onSubmit }: AddressFormProps) {
    const country = "Vietnam";
    const [region, setRegion] = useState("");
    const form = useForm<AddressFormValues>({
        resolver: zodResolver(addressFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phoneNumber: "",
            streetAddress: "",
            city: "",
            province: "",
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="johndoe@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="0912345678" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="streetAddress"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Street Address</FormLabel>
                            <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Ho Chi Minh City"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="province"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Province</FormLabel>
                            <FormControl>
                                <RegionDropdown
                                    country={country}
                                    value={field.value}
                                    onChange={(value) => {
                                        field.onChange(value);
                                        setRegion(value);
                                    }}
                                    classes="w-full border border-gray-300 rounded-md px-3 py-2"
                                    valueType="full"
                                    disableWhenEmpty={true}
                                    defaultOptionLabel="Select Province"
                                    labelType="full"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
