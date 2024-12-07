"use client";
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SearchInput } from "@/components/ui/searchinput";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { posts } from "@/lib/constants";
import { GetAllBlogs } from "@/services/BlogService";
import { useEffect, useState } from "react";
import { Blog, BlogImageCreate, BlogTrue, ImageDetail } from "@/types";
import { getImagesFromBlog } from "@/services/ImageService";
import parser from "html-react-parser";
import { useRouter } from "next/navigation";
// todo: implement pagination

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogTrue[]>([]);
    const [thumbs, setThumbs] = useState<BlogImageCreate[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    useEffect(() => {
        GetAllBlogs().then((data) => {
            if ("error" in data) {
                console.error(data.error);
                return;
            } else {
                setPosts(data);
            }
        });
    }, []);

    // after getting all the blogs, get the thumbs
    useEffect(() => {
        if (posts.length > 0) {
            Promise.all(
                posts.map(async (post) => {
                    await getImagesFromBlog(post.blogId).then((data) => {
                        if ("error" in data) {
                            console.error(data.error);
                            return;
                        } else {
                            const thumb = data.filter(
                                (thumb) => thumb.isThumbnail
                            );
                            setThumbs((prev) => [...prev, ...thumb]);
                        }
                    });
                })
            ).then(() => setLoading(false));
        }
    }, [posts]);

    useEffect(() => {
        console.log(thumbs);
    }, [thumbs]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-muted-foreground">November 21, 2024</p>
            </header>
            <div className="flex flex-col md:flex-row gap-8">
                <main className="flex-1 space-y-8">
                    {posts.map((post, index) => (
                        <Card
                            key={index}
                            className="flex flex-col overflow-hidden">
                            <div className="relative h-[300px]">
                                <Image
                                    src={thumbs[index].src}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    style={{ filter: "blur(2px)" }}
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                            <CardContent className="py-6 px-10">
                                <p className="text-md text-muted-foreground">
                                    <Image
                                        src="/images/icons/admin.svg"
                                        alt="user-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {"admin"} |
                                    <Image
                                        src="/images/icons/calendar.svg"
                                        alt="calendar-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {post.posted} |
                                    <Image
                                        src="/images/icons/tag.svg"
                                        alt="calendar-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {
                                        // @ts-ignore
                                        post.tags.join(", ")
                                    }
                                </p>
                                <CardHeader className="px-0">
                                    <CardTitle className="text-2xl font-bold">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <Button
                                    variant="link"
                                    className="text-md mt-4 px-0"
                                    onClick={() => {
                                        router.push(`/blog/${post.blogId}`);
                                    }}>
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                    <Pagination className="mt-8">
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">Next</PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </main>
                <aside className="w-full md:w-1/3 space-y-8">
                    <div>
                        <SearchInput
                            placeholder="Search..."
                            className="w-full"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Categories</h2>
                        <ul className="space-y-2">
                            <li>Crafts</li>
                            <li>Design</li>
                            <li>Inspiration</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
                        <ul className="space-y-2">
                            <li>Going all-in with millennial design</li>
                            <li>Exploring new ways of decorating</li>
                            <li>Handmade pieces that took time to make</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
