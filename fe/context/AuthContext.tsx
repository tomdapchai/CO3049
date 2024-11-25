"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { login } from "@/services/AuthService";
import Cookies from "js-cookie";
interface AuthContextProps {
    isLoggedIn: boolean;
    userId: string;
    error: string | null;
    loginUser: (
        username: string,
        password: string
    ) => Promise<{ message: string } | { error: string }>;
    loginAdmin: (username: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>;
    logoutAdmin: () => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

const COOKIE_NAME = "authUser";
const COOKIE_OPTIONS = {
    expires: 1,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    path: "/",
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("1");
    const [error, setError] = useState<string | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const storedUserId = Cookies.get(COOKIE_NAME);
        if (storedUserId) {
            setUserId(storedUserId);
            setIsLoggedIn(true);
        }
        setIsInitialized(true);
    }, []);

    // Update cookie whenever the authentication state changes
    const updateAuthState = (newUserId: string, isLoggedIn: boolean) => {
        if (isLoggedIn) {
            Cookies.set(COOKIE_NAME, newUserId, COOKIE_OPTIONS);
        } else {
            Cookies.remove(COOKIE_NAME, { path: "/" });
        }
        setUserId(newUserId);
        setIsLoggedIn(isLoggedIn);
    };

    const loginUser = async (
        username: string,
        password: string
    ): Promise<{ message: string } | { error: string }> => {
        // res = await login({ email: username, password }, "user");
        // setUserId(res.userId);
        // would be try catch, not if else
        // below is testing phase
        if (username === "user" && password === "password") {
            updateAuthState(userId, true); // would be updateAuthState(res.userId, true);
            setError(null);
            return { message: "success" };
        } else {
            setError("Invalid credentials");
            return { error: "Invalid credentials" };
        }
    };

    const logoutUser = async (): Promise<void> => {
        updateAuthState("", false);
        setError(null);
    };

    const loginAdmin = async (username: string, password: string) => {
        // await login({ email: username, password }, "admin");

        // below is testing phase
        if (username === "admin" && password === "password") {
            /* setIsLoggedIn(true);
            setUserId(userId); */
        } else {
            setError("Invalid credentials");
        }
    };

    const logoutAdmin = async (): Promise<void> => {};

    const register = async (username: string, password: string) => {
        updateAuthState(userId, true);
        //setUserId(username);
    };

    if (!isInitialized) {
        return null; // Or a loading spinner
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                userId,
                error,
                loginUser,
                logoutUser,
                loginAdmin,
                logoutAdmin,
                register,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
