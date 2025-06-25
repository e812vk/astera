import {ServerFile} from "nuxt-file-storage";

export default defineEventHandler(async (event) => {

    switch (event.method) {
        case "GET":
            return await getFilesLocally('');

        case "POST":
            const {files} = await readBody<{ files: ServerFile[] }>(event)

            for (const file of files) {
                await storeFileLocally(
                    file,
                    8,
                    ''  // the folder the file will be stored in
                )
            }
            break;

        case "DELETE":
            const filename = getQuery(event).filename as string;
            await deleteFile(filename, '');
            break;

        default:
            console.log(`Unknown event method: ${event.method}`);
    }
})