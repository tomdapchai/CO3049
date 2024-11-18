"use client";
import React, { createContext, useContext, useState } from "react";

interface AuthContextProps {
    isLoggedIn: boolean;
    userId: string;
    error: string | null;
    login: (userId: string, password: string) => Promise<void>;
    logout: () => void;
    register: (userId: string, password: string) => Promise<void>;
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [error, setError] = useState<string | null>(null);

    const login = async (userId: string, password: string) => {
        if (userId === "admin" && password === "admin") {
            setIsLoggedIn(true);
            setUserId(userId);
        } else {
            setError("Invalid credentials");
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserId("");
    };

    const register = async (userId: string, password: string) => {
        setIsLoggedIn(true);
        setUserId(userId);
    };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, userId, error, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};
