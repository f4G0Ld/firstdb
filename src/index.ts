// import { eq } from "drizzle-orm";
// import { db } from "./db";
// import { cart, favourites, products, users } from "./db/schema";

// async function createUser(body: { name: string; email: string; dob: Date }) {
// 	await db.insert(users).values(body);
// }

// async function updateUser(
// 	userId: string,
// 	body: { name?: string; email?: string },
// ) {
// 	await db.update(users).set(body).where(eq(users.id, userId));
// }

// async function deleteUser(userId: string) {
// 	await db.delete(users).where(eq(users.id, userId));
// }

// async function getUsers() {
// 	const users = await db.query.users.findMany({
// 		with: {
// 			favourites: {
// 				with: {
// 					product: true,
// 				},
// 			},
// 			carts: {
// 				with: {
// 					product: true,
// 				},
// 			},
// 		},
// 	});
// 	return users;
// }

// async function createProduct(body: { name: string; description: string }) {
// 	await db.insert(products).values(body);
// }

// async function updateProduct(
// 	productId: string,
// 	body: { name?: string; description?: string },
// ) {
// 	await db.update(products).set(body).where(eq(products.id, productId));
// }

// async function deleteProduct(productId: string) {
// 	await db.delete(products).where(eq(products.id, productId));
// }

// async function createFavourite(body: { userId: string; productId: string }) {
// 	await db.insert(favourites).values(body);
// }

// async function deleteFavourite(favouriteId: string) {
// 	await db.delete(favourites).where(eq(favourites.id, favouriteId));
// }

// async function createCart(body: { userId: string; productId: string }) {
// 	await db.insert(cart).values(body);
// }

// async function deleteCart(jopa: string) {
// 	await db.delete(cart).where(eq(cart.id, jopa));
// }

// await createUser({name: 'twins', email: 'nineelevenseptember@boom.com', dob: new Date('2001-09-11')})
// await createProduct({name: 'пельмени', description: 'сибирская коллекция'})
// await createCart({userId: '019aa64a-4714-7000-99a1-110936f177bb', productId: '019aa64b-bc34-7000-9845-b7201097d52f'})
// await createFavourite({userId: '019aa64a-4714-7000-99a1-110936f177bb', productId: '019aa650-e9fd-7000-814e-507f64e68e0d'})

// console.log(await getUsers());
