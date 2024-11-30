import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
    withCredentials: true, // Important for CORS with credentials
});

export default api;
