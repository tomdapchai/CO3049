import api from "@/api";
import axios from "axios";

export const createTag = async (
    tag: string
): Promise<{ message: string } | { error: string }> => {
    const response = await api.post("/tag", tag);
    // check unique tag
    return { error: "Not implemented" };
};
