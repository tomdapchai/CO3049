import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchInput } from "@/components/ui/searchinput"
import { Button } from "@/components/ui/button"
import { Pagination, PaginationItem, PaginationLink } from "@/components/ui/pagination"
import { posts } from "@/lib/constants"

// todo: implement pagination

const mockBlogPosts = Array.from({ length: 30}, (_, i) => ({
    title: `${posts[i%3].title}`,
    author: "Admin",
    date: `${Math.floor(Math.random())} Nov 2022`,
    tag: "Wood",
    image: `/images/blog-posts/post-${i%3}.png`,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."}
))

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Blog</h1>
                <p className="text-muted-foreground">November 21, 2024</p>
            </header>
            <div className="flex flex-col md:flex-row gap-8">
                <main className="flex-1 space-y-8">
                    {posts.map((post, index) => (
                        <Card key={index} className="flex flex-col">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={200}
                                className="object-cover md:w-full py-6 px-10"
                            />
                            <CardContent className="py-6 px-10">
                                <p className="text-md text-muted-foreground">
                                    <Image
                                        src="/images/icons/admin.svg"
                                        alt="user-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {post.author} | 
                                    <Image
                                        src="/images/icons/calendar.svg"
                                        alt="calendar-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {post.date} |
                                    <Image
                                        src="/images/icons/tag.svg"
                                        alt="calendar-icon"
                                        width={20}
                                        height={20}
                                        className="inline-block m-1 w-6"
                                    />
                                    {post.tag}
                                </p>
                                <CardHeader className="px-0">
                                    <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
                                </CardHeader>
                                <p className="text-md text-muted-foreground">{post.description}</p>
                                <Button variant="link" className="text-md mt-4 px-0">
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
                        <SearchInput placeholder="Search..." className="w-full" />
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
    )
}

