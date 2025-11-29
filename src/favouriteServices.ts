import Elysia from "elysia";
import { db } from "./db";
import { favouriteSchema } from "./lib/zod-schemas";
import { favourites } from "./db/schema";
import { eq } from "drizzle-orm";

export const favouriteServices = new Elysia({
	name: "favouriteServices",
	prefix: "/favourites",
})

	.post(
		"/",
		async ({ body }) => {
			await db.insert(favourites).values(body);
			return { success: "ok" };
		},
		{
			body: favouriteSchema.omit({ createdAt: true }),
		},
	)
	.delete("/:id", async ({ params }) => {
		await db.delete(favourites).where(eq(favourites.id, params.id));
		return { success: "ok" };
	});
