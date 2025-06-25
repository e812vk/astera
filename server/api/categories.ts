import 'dotenv/config';
import {drizzle} from 'drizzle-orm/libsql';
import {eq} from 'drizzle-orm';
import {categories} from '~/db/schema';
import {Category} from "~/classes";

export default defineEventHandler(async (event) => {
    const db = drizzle(process.env.VITE_DATABASE!);

    const id = getQuery(event).id as number;

    switch (event.method) {
        case 'GET':
            return id
                ? await db
                    .select()
                    .from(categories)
                    .where(eq(categories.id, id))
                : await db
                    .select()
                    .from(categories);

        case 'POST':
            const newCategory = await readBody(event) as Category;

            // const entity: typeof categoriesTable.$inferInsert = {
            //     name: newCategory.name,
            //     image: newCategory.image
            // };

            const postResult = await db.insert(categories).values(newCategory);
            console.log('POST Result:', postResult);
            break;

        case 'PUT':
            const updatedCategory = await readBody(event) as Category;

            const putResult = await db
                .update(categories)
                .set(updatedCategory);

            console.log('PUT Result:', putResult);

            break;

        case 'DELETE':
            const deleteResult = await db.delete(categories).where(eq(categories.id, id));

            console.log('DELETE Result:', deleteResult);

            break;

        default:
            console.log('Can not define method');
    }
})