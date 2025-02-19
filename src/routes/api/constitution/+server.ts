import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { constitutionData } from '$lib/data/constitution-data';

export const GET: RequestHandler = async ({ url }) => {
    const query = url.searchParams.get('q');
    const category = url.searchParams.get('category');
    
    let data = constitutionData;
    
    if (query) {
        data = data.filter(article => 
            article.content.some(text => 
                text.toLowerCase().includes(query.toLowerCase())
            )
        );
    }
    
    if (category) {
        data = data.filter(article => 
            article.content.some(text => 
                text.toLowerCase().includes(category.toLowerCase())
            )
        );
    }
    
    return json(data);
}; 