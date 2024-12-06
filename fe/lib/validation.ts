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

export const addressFormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phoneNumber: z.string().regex(/^(\+84|0)[3|5|7|8|9][0-9]{8}$/, {
        message: "Please enter a valid Vietnamese phone number.",
    }),
    streetAddress: z.string().min(5, {
        message: "Street address must be at least 5 characters.",
    }),
    city: z.string().min(2, {
        message: "City must be at least 2 characters.",
    }),
    province: z.string().min(2, {
        message: "Please select a province.",
    }),
});
