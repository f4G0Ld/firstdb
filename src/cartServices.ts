import Elysia from "elysia";
import { db } from "./db";
import { cartSchema } from "./lib/zod-schemas";
import { cart } from "./db/schema";
import { eq } from "drizzle-orm";

export const cartServices = new Elysia({
	name: "cartServices",
	prefix: "/cart",
})

	.post(
		"/",
		async ({ body }) => {
			await db.insert(cart).values(body);
			return { success: "ok" };
		},
		{
			body: cartSchema,
		},
	)
	.delete("/:id", async ({ params }) => {
		await db.delete(cart).where(eq(cart.id, params.id));
		return { success: "ok" };
	});
