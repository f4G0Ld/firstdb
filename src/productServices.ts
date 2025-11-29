import Elysia from "elysia";
import { db } from "./db";
import { productSchema } from "./lib/zod-schemas";
import { products } from "./db/schema";
import { eq } from "drizzle-orm";

export const productServices = new Elysia({
	name: "productServices",
	prefix: "/products",
})

	.get("/", async () => {
		return await db.query.products.findMany();
	})
	.post(
		"/",
		async ({ body }) => {
			await db.insert(products).values(body);
			return { success: "ok" };
		},
		{
			body: productSchema,
		},
	)
	.put(
		"/:id",
		async ({ params, body }) => {
			await db.update(products).set(body).where(eq(products.id, params.id));
			return { success: "ok" };
		},
		{
			body: productSchema.partial(),
		},
	)
	.delete("/:id", async ({ params }) => {
		await db.delete(products).where(eq(products.id, params.id));
		return { success: "ok" };
	});
