import api from "@/api";
import axios from "axios";
import { Review } from "@/types";

export const addReviews = async (
    productId: string,
    review: Review
): Promise<{ message: string } | { error: string }> => {
    const reviewId = await api.post(`/review`, review);
    return { error: "Not implemented" };
};
