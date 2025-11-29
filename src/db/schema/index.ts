import { relations } from 'drizzle-orm'
import * as pg from 'drizzle-orm/pg-core'

export const users = pg.pgTable('users', {
    id: pg
    .varchar({length: 255})
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),

    name: pg
    .text()
    .notNull(),

    email: pg
    .text()
    .notNull()
    .unique(),

    dob: pg
    .timestamp()
    .notNull(),

})

export const userToCartsAndFavourites = relations(users, ({many}) => ({
    carts: many(cart),
    favourites: many(favourites)
}))

export const products = pg.pgTable('products', {
    id: pg
    .varchar({length: 255})
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),

    name: pg
    .text()
    .notNull(),
    
    description: pg
    .text()
    .notNull()

})

export const favourites = pg.pgTable('favourite', {
    id: pg
    .varchar({length: 255})
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),

    userId: pg
    .varchar({length: 255})
    .notNull()
    .references(() => users.id, {onDelete:'cascade', onUpdate:'cascade'}),

    productId: pg
    .varchar({length: 255})
    .notNull()
    .references(() => products.id, {onDelete:'cascade', onUpdate:'cascade'}),

    createdAt: pg
    .timestamp()
    .notNull()
    .defaultNow()
})

export const favouriteToUserAndProduct = relations(favourites, ({one}) => ({
    user: one(users, {
        fields: [favourites.userId], 
        references: [users.id]
    }),

    product: one(products, {
        fields: [favourites.productId],
        references: [products.id]
    })
}))

export const cart = pg.pgTable('cart', {
    id: pg
    .varchar({length: 255})
    .notNull()
    .primaryKey()
    .$defaultFn(() => Bun.randomUUIDv7()),

    userId: pg
    .varchar({length: 255})
    .notNull()
    .references(() => users.id, {onDelete:'cascade', onUpdate:'cascade'}),

    productId: pg
    .varchar({length: 255})
    .notNull()
    .references(() => products.id, {onDelete:'cascade', onUpdate:'cascade'}),
})

export const cartToUserAndProduct = relations(cart, ({one}) => ({
    user: one(users, {
        fields: [cart.userId], 
        references: [users.id]
    }),

    product: one(products, {
        fields: [cart.productId],
        references: [products.id]
    })
}))

