import Elysia from "elysia";
import { db } from "./db";
import { userSchema } from "./lib/zod-schemas";
import { users } from "./db/schema";
import { eq } from "drizzle-orm";

export const userServices = new Elysia({
	name: "userServices",
	prefix: "/users",
})

	.get("/", async () => {
		return await db.query.users.findMany({
			with: {
				favourites: {
					with: {
						product: true,
					},
				},
				carts: {
					with: {
						product: true,
					},
				},
			},
		});
	})
	.get("/:id", async ({ params }) => {
		return await db.query.users.findFirst({
			where: eq(users.id, params.id),
			with: {
				favourites: {
					with: {
						product: true,
					},
				},
				carts: {
					with: {
						product: true,
					},
				},
			},
		});
	})
	.post(
		"/",
		async ({ body }) => {
			await db.insert(users).values(body);
			return { success: "ok" };
		},
		{
			body: userSchema,
		},
	)
	.put(
		"/:id",
		async ({ params, body }) => {
			await db.update(users).set(body).where(eq(users.id, params.id));
			return { success: "ok" };
		},
		{
			body: userSchema.partial(),
		},
	)
	.delete("/:id", async ({ params }) => {
		await db.delete(users).where(eq(users.id, params.id));
		return { success: "ok" };
	});
