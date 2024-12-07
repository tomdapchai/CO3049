"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React, { useState, useEffect } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SelectGroup, SelectLabel } from "@radix-ui/react-select";
import { ProductView, ProductDetail } from "@/types";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "@/components/card/ProductCard";
import { getAllProduct } from "@/services/ProductService";
const filters = [
    {
        name: "Price",
        type: "price",
        optionName: ["Low to High", "High to Low"],
        option: ["price_l2h", "price_h2l"],
    },
    {
        name: "Rating",
        type: "rating",
        optionName: ["Low to High", "High to Low"],
        option: ["rating_l2h", "rating_h2l"],
    },
];

const page = () => {
    const [sortBy, setSortBy] = useState("");
    const [products, setProducts] = useState<ProductDetail[]>([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState<ProductDetail[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const [totalPages, setTotalPages] = useState(1);
    /* const totalPages = Math.ceil(mockProducts.length / productsPerPage); */
    const [indexOfFirstProduct, setIndexOfFirstProduct] = useState(0);
    const [indexOfLastProduct, setIndexOfLastProduct] = useState(0);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        // fetch products
        setSortBy("price");
        getAllProduct().then((data) => {
            if ("error" in data) {
                console.error(data.error);
            } else {
                console.log("Products:", data);
                setProducts(data);
            }
        });
    }, []);

    useEffect(() => {
        setTotalPages(Math.ceil(products.length / productsPerPage));
    }, [products]);

    const handleValueChange = (value: string) => {
        setSelectedValue(value);
        console.log(value);
        const [filterName, optionName] = value.split(": ");
        const filter = filters.find((f) => f.name === filterName);
        if (filter) {
            const optionIndex = filter.optionName.indexOf(optionName);
            const optionValue = filter.option[optionIndex];
            console.log(`Selected: ${value}, Value: ${optionValue}`);
            // Perform your filter action here
        }
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    useEffect(() => {
        const last = currentPage * productsPerPage;
        const first = last - productsPerPage;
        setIndexOfLastProduct(last);
        setIndexOfFirstProduct(first);
        setCurrentProducts(products.slice(first, last));
    }, [currentPage, products]);

    useEffect(() => {
        //sort products
    }, [sortBy]);
    return (
        <div className="w-full h-full flex flex-col space-y-6">
            <div className="w-full flex flex-col">
                <div className="w-full h-[400px] relative flex justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat filter blur-sm"></div>
                    <div className="absolute inset-0 bg-white/10"></div>
                    <h1 className="relative z-10 font-bold text-6xl text-sub">
                        Shop
                    </h1>
                </div>

                <div className="bg-main flex justify-between h-fit py-4 px-6 items-center">
                    <div className="flex justify-between gap-2 items-center h-fit">
                        <p>
                            Showing {indexOfFirstProduct + 1} -{" "}
                            {indexOfLastProduct} of {products.length} products
                        </p>
                        <Button variant={"ghost"} onClick={() => {}}>
                            Filter
                        </Button>
                        <Separator orientation="vertical" />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <p className="whitespace-nowrap">Sort by</p>
                        <Select
                            value={selectedValue}
                            onValueChange={handleValueChange}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Default" />
                            </SelectTrigger>
                            <SelectContent className="p-2">
                                {filters.map((filter) => (
                                    <SelectGroup key={filter.name}>
                                        <SelectLabel className="font-bold">
                                            {filter.name}
                                        </SelectLabel>
                                        <Separator />
                                        {filter.optionName.map(
                                            (name, index) => (
                                                <SelectItem
                                                    key={`${filter.type}_${filter.option[index]}`}
                                                    value={`${filter.name}: ${name}`}>
                                                    {name}
                                                </SelectItem>
                                            )
                                        )}
                                    </SelectGroup>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 py-8 flex justify-center items-center flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {currentProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            overview={product.overview}
                            price={Number(product.price)}
                            slug={product.slug}
                            image={product.images[0].src}
                            rating={5}
                        />
                    ))}
                </div>
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage > 1)
                                        paginate(currentPage - 1);
                                }}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <PaginationItem key={i + 1}>
                                <PaginationLink
                                    href="#"
                                    className={`${
                                        currentPage === i + 1
                                            ? "bg-sub hover:bg-[#b88e2f]/90 hover:text-main text-main"
                                            : "bg-main hover:bg-[#fff3e3]/90 hover:text-sub text-sub"
                                    }`}
                                    isActive={currentPage === i + 1}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        paginate(i + 1);
                                    }}>
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (currentPage < totalPages)
                                        paginate(currentPage + 1);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default page;
