// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/libsql';
// import { eq } from 'drizzle-orm';
// import { usersTable } from './db/schema';
//
// const db = drizzle(process.env.VITE_DB_FILENAME!);
// async function main() {
//     const user: typeof usersTable.$inferInsert = {
//         name: 'John',
//         age: 30,
//         email: 'john@example.com',
//     };
//     await db.insert(usersTable).values(user);
//     console.log('New user created!')
//     const users = await db.select().from(usersTable);
//     console.log('Getting all users from the database: ', users)
//
//     await db
//         .update(usersTable)
//         .set({
//             age: 31,
//         })
//         .where(eq(usersTable.email, user.email));
//     console.log('User info updated!')
//     //await db.delete(usersTable).where(eq(usersTable.email, user.email));
//     //console.log('User deleted!')
// }
// await main();