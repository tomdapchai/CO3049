import api from "@/api";

export const login = async (
    values: { email: string; password: string },
    type: "admin" | "user"
): Promise<
    { message: string; status: string; data?: any } | { error: string }
> => {
    try {
        console.log("Sending login request with data:", { values, type });

        const response = await api.post(`api/login.php`, {
            email: values.email,
            password: values.password,
        });

        // Log the entire response
        console.log("Backend Response:", response.data);

        return {
            status: response.data.status,
            message: response.data.message,
            data: response.data.receivedData,
        };
    } catch (error: any) {
        console.error("Login Error:", error);
        return {
            error: error.response?.data?.message || "Login failed",
        };
    }
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
