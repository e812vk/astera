import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const categories = sqliteTable("categories", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    image: text().notNull()
});

export const employees = sqliteTable("employees", {
    id: int().primaryKey({ autoIncrement: true }),
    name: text().notNull(),
    surname: text().notNull(),
    position: text().notNull(),
    info: text(),
    image: text().notNull()
});

export const promotions = sqliteTable("promotions", {
    id: int().primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    desc: text().notNull(),
    image: text().notNull(),
    url: text().notNull()
});

