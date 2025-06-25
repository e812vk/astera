import 'dotenv/config';
import {drizzle} from 'drizzle-orm/libsql';
import {eq} from 'drizzle-orm';
import {employees} from '~/db/schema';
import {Employee} from "~/classes";

export default defineEventHandler(async (event) => {
    const db = drizzle(process.env.VITE_DATABASE!);

    const id = getQuery(event).id as number;

    switch (event.method) {
        case 'GET':
            return id
                ? await db
                    .select()
                    .from(employees)
                    .where(eq(employees.id, id))
                    .limit(1)
                    .get()
                : await db
                    .select()
                    .from(employees);

        case 'POST':
            const newCategory = await readBody(event) as Employee;
            const postResult = await db.insert(employees).values(newCategory);
            console.log('POST Result:', postResult);
            break;

        case 'PUT':
            const updatedEmployee = await readBody(event) as Employee;
            const putResult = await db
                .update(employees)
                .set(updatedEmployee);
            console.log('PUT Result:', putResult);
            break;

        case 'DELETE':
            const deleteResult = await db.delete(employees).where(eq(employees.id, id));
            console.log('DELETE Result:', deleteResult);
            break;

        default:
            console.log('Can not define method');
    }
})