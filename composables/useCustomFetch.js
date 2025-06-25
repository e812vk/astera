// const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
//
// async function validateResponse(response) {
//     if (response.ok) {
//         return;
//     }
//
//     switch (response.status) {
//         case 401:
//             throw new Error("Пожалуйста авторизуйтесь")
//
//         case 403:
//             throw new Error("Доступ запрещён")
//
//         default:
//             const data = await response.json();
//
//             throw new Error(data.title);
//     }
// }
//
//
// function showError(error) {
//     switch (error.name) {
//         case 'TimeoutError':
//         case 'TypeError':
//             console.log('Сервис недоступен. Обратитесь к администратору')
//             break;
//         default:
//             const message = error.toString().replace('Error: ', '');
//             console.log(message);
//     }
//
//     throw error;
// }
//
//
// export function useCustomFetch() {
//
//     // async function get(endpoint) {
//     //     try {
//     //         return await $fetch(baseApiUrl + endpoint);
//     //         //     , {
//     //         //     method: 'GET',
//     //         //     signal: AbortSignal.timeout(3000)
//     //         // });
//     //
//     //         // await validateResponse(response);
//     //         //
//     //         // return response;
//     //     } catch (error) {
//     //         showError(error);
//     //     }
//     // }
//
//     // async function post(endpoint, formData) {
//     //     try {
//     //         const response = await fetch(baseApiUrl + endpoint, {
//     //             method: 'POST',
//     //             body: formData,
//     //             signal: AbortSignal.timeout(3000)
//     //         });
//     //
//     //         await validateResponse(response);
//     //
//     //         return await response.json();
//     //     } catch (error) {
//     //         showError(error);
//     //     }
//     // }
//
//     // async function put(endpoint, body) {
//     //     try {
//     //         const response = await fetch(baseApiUrl + endpoint, {
//     //             method: 'PUT',
//     //             body: body,
//     //             signal: AbortSignal.timeout(3000)
//     //         });
//     //
//     //         await validateResponse(response);
//     //
//     //         return await response.json();
//     //     } catch (error) {
//     //         showError(error);
//     //     }
//     // }
//     //
//     // async function del(endpoint) {
//     //     try {
//     //         const response = await fetch(baseApiUrl + endpoint, {
//     //             method: 'DELETE',
//     //             signal: AbortSignal.timeout(3000)
//     //         });
//     //
//     //         await validateResponse(response);
//     //     } catch (error) {
//     //         showError(error);
//     //     }
//     // }
//
//     return {};
// }
