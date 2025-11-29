import Elysia from "elysia";
import { userServices } from "./userServices";
import { productServices } from "./productServices";
import { favouriteServices } from "./favouriteServices";
import { cartServices } from "./cartServices";

const _app = new Elysia({
	name: "app",
	prefix: "/api",
})

	.use(userServices)
	.use(productServices)
	.use(favouriteServices)
	.use(cartServices)

	.listen(3000);
