import * as z from "zod";

export const SignInSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
});

export const SignUpSchema = z
    .object({
        username: z.string().min(5),
        password: z.string().min(8),
        confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const reviewSchema = z.object({
    name: z.string().min(3, {
        message: "Name must be at least 3 characters.",
    }),
    rating: z.number().min(1).max(5),
    comment: z
        .string()
        .min(10, {
            message: "Comment must be at least 10 characters.",
        })
        .optional(),
});
