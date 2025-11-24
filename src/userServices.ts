import Elysia from "elysia";
import { db } from "./db";
import { userSchema } from "./lib/zod-schemas";
import { users } from "./db/schema";

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

	.post(
		"/",
		async ({ body }) => {
			await db.insert(users).values(body);
			return {
				success: "ok",
			};
		},
		{
			body: userSchema,
		},
	);
