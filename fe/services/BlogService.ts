import api from "@/api";
import { Blog } from "@/types";

export const GetAllBlogs = async (): Promise<Blog[] | { error: string }> => {
    try {
        const response = await api.get("api/blog/routes.php");

        console.log("Backend Response:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return { error: "An error occurred while fetching blogs" };
    }
};

export const GetBlogById = async (
    blogId: string
): Promise<Blog | { error: string }> => {
    try {
        const response = await api.get(`api/blog/routes.php?blogId=${blogId}`);

        console.log("Backend Response:", response.data);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return { error: "An error occurred while fetching blog" };
    }
};

export const CreateBlog = async (
    data: Blog
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.post("api/blog/routes.php", data);

        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error:", error);
        return { error: "An error occurred while creating blog" };
    }
};

export const UpdateBlog = async (
    data: Blog
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.put("api/blog/routes.php", data);

        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error:", error);
        return { error: "An error occurred while updating blog" };
    }
};

export const DeleteBlog = async (
    blogId: string
): Promise<{ message: string } | { error: string }> => {
    try {
        const response = await api.delete(
            `api/blog/routes.php?blogId=${blogId}`
        );

        console.log("Backend Response:", response.data);
        return { message: response.data.message };
    } catch (error) {
        console.log("Error:", error);
        return { error: "An error occurred while deleting blog" };
    }
};
