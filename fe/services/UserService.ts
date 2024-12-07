import api from "@/api";
import { User } from "@/types";
export const getAllUsers = async (): Promise<User[] | { error: string }> => {
    try {
        const response = await api.get(`api/user/routes.php`);
        console.log("Backend Response:", response.data);
        const res: User[] = response.data.data.map((user: any) => {
            return {
                userId: Number(user.userId),
                name: user.username ? user.username : "",
                email: user.email ? user.email : "",
                phoneNumber: user.phone_number ? user.phone_number : "",
                address:
                    user.street && user.city
                        ? {
                              street: user.street,
                              city: user.city,
                          }
                        : { street: "", city: "" },
                cart: user.cart ? JSON.parse(user.cart) : [],
                status: user.status,
            };
        });
        return res;
    } catch (error) {
        console.log("Error fetching users:", error);
        return { error: "Error fetching users" };
    }
};

export const getUserById = async (
    userId: string
): Promise<User | { error: string }> => {
    try {
        const response = await api.get(`api/user/routes.php?userId=${userId}`);
        console.log("Backend Response:", response.data);
        const user = response.data.data;
        return {
            userId: Number(user.userId),
            username: user.username,
            name: user.name ? user.name : "",
            email: user.email ? user.email : "",
            phoneNumber: user.phone_number ? user.phone_number : "",
            address:
                user.street && user.city
                    ? {
                          street: user.street,
                          city: user.city,
                      }
                    : { street: "", city: "" },
            cart: user.cart ? JSON.parse(user.cart) : [],
            status: user.status,
        };
    } catch (error) {
        console.log("Error fetching user:", error);
        return { error: "Error fetching user" };
    }
};

// userCart will be done last
