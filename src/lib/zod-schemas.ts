import z from "zod";

export const userSchema = z.object({
	name: z.string(),
	email: z.email(),
	dob: z.coerce.date(),
});

export const productSchema = z.object({
	name: z.string(),
	description: z.string(),
});

export const favouriteSchema = z.object({
	userId: z.string(),
	productId: z.string(),
	createdAt: z.string(),
});

export const cartSchema = z.object({
	userId: z.string(),
	productId: z.string(),
});
