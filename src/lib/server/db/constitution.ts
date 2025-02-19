import type { ConstitutionParagraph } from '$lib/types';
import { constitutionData } from '$lib/data/constitution-data';

// Simulating database operations with delays
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// export const constitutionDb = {
//     async getAll(): Promise<ConstitutionParagraph[]> {
//         await delay(100); // Simulate DB query
//         return constitutionData;
//     },

//     async getById(id: string): Promise<ConstitutionParagraph | undefined> {
//         await delay(50);
//         return constitutionData.find(article => article.title === `Artikel ${id}`);
//     },

//     async search(query: string): Promise<ConstitutionParagraph[]> {
//         await delay(150);
//         return constitutionData.filter(article => 
//             article.content.some(text => 
//                 text.toLowerCase().includes(query.toLowerCase())
//             )
//         );
//     },

//     async getByCategory(category: string): Promise<ConstitutionParagraph[]> {
//         await delay(100);
//         // Simulate categorization (e.g., basic rights, state organization, etc.)
//         return constitutionData.filter(article => 
//             article.content.some(text => 
//                 text.toLowerCase().includes(category.toLowerCase())
//             )
//         );
//     }
// }; 