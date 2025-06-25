// const categoriesEndpoint = import.meta.env.VITE_CATEGORIES_ENDPOINT;
// const sectionsEndpoint = import.meta.env.VITE_SECTIONS_ENDPOINT;
// const subsectionsEndpoint = import.meta.env.VITE_SUBSECTIONS_ENDPOINT;
// const servicesEndpoint = import.meta.env.VITE_SERVICES_ENDPOINT;
// const slidesEndpoint = import.meta.env.VITE_SLIDES_ENDPOINT;
// const employeesEndpoint = import.meta.env.VITE_EMPLOYEES_ENDPOINT;
//
// import {type IEntity, Type} from "~/classes.js";
//
// const {get} = useCustomFetch();
//
// function getUrl(type: Type): string {
//     switch (type) {
//         case Type.CATEGORY:
//             return categoriesEndpoint;
//         case Type.SECTION:
//             return sectionsEndpoint;
//         case Type.SUBSECTION:
//             return subsectionsEndpoint;
//         case Type.SERVICE:
//             return servicesEndpoint;
//         case Type.PROMO:
//             return slidesEndpoint;
//         case Type.EMPLOYEE:
//             return employeesEndpoint;
//         default:
//             throw new Error(`Unsupported type ${type}`);
//     }
// }
//
// export function useApi() {
//
//     async function getAll(type: Type, id?: number) {
//         let url = getUrl(type);
//
//         switch (type) {
//             case Type.CATEGORY:
//                 return await get(url);
//             case Type.PROMO:
//                 return await get(url);
//             case Type.EMPLOYEE:
//                 return await get(url);
//             case Type.SECTION:
//                 return await get(`${url}?categoryId=${id}`);
//             case Type.SUBSECTION:
//                 return await get(`${url}?sectionId=${id}`);
//             case Type.SERVICE:
//                 return await get(`${url}?subsectionId=${id}`);
//         }
//     }
//
//     async function getById(type: Type, id: number) {
//         const url = getUrl(type);
//
//         return await get(url + id);
//     }
//
//     return {
//         getAll, getById
//     }
// }