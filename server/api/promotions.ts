import 'dotenv/config';
import {drizzle} from 'drizzle-orm/libsql';
import {eq} from 'drizzle-orm';
import {promotions} from '~/db/schema';
import {Promo} from "~/classes";

export default defineEventHandler(async (event) => {
    const db = drizzle(process.env.VITE_DATABASE!);

    const id = getQuery(event).id as number;

    switch (event.method) {
        case 'GET':
            return id
                ? await db
                    .select()
                    .from(promotions)
                    .where(eq(promotions.id, id))
                    .limit(1)
                    .get()
                : await db
                    .select()
                    .from(promotions);

        case 'POST':
            const newPromo = await readBody(event) as Promo;
            const postResult = await db.insert(promotions).values(newPromo);
            console.log('POST Result:', postResult);
            break;

        case 'PUT':
            const updatedPromo = await readBody(event) as Promo;
            const putResult = await db
                .update(promotions)
                .set(updatedPromo);
            console.log('PUT Result:', putResult);
            break;

        case 'DELETE':
            const deleteResult = await db.delete(promotions).where(eq(promotions.id, id));
            console.log('DELETE Result:', deleteResult);
            break;

        default:
            console.log('Can not define method');
    }
})