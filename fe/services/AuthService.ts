import axios from "axios";
import api from "@/api";

export const login = async (
    values: { email: string; password: string },
    type: "admin" | "user"
): Promise<{ message: string } | { error: string }> => {
    const repsonse = await api.post(`/login/${type}`, {
        email: values.email,
        password: values.password,
    });

    return { error: "Not implemented" };
};

export const register = async (
    email: string,
    password: string
): Promise<{ message: string } | { error: string }> => {
    const response = await api.post("/register", {
        email,
        password,
    });

    return { error: "Not implemented" };
};
