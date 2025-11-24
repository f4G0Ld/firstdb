import Elysia from "elysia";
import { userServices } from "./userServices";

const app = new Elysia({
	name: "app",
	prefix: "/api",
})

	.use(userServices)

	.listen(3000);
