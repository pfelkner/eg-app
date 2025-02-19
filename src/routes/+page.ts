import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { constitutionStore } from '$lib/stores/constitution';

export const load: PageLoad = async ({ fetch }) => {
	try {
		constitutionStore.setLoading(true);
		
		const response = await fetch('/api/constitution');
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const data = await response.json();
		constitutionStore.setArticles(data);
		
		return {
			constitutionParagraphs: data
		};
	} catch (e) {
		const err = e instanceof Error ? e : new Error('Unknown error occurred');
		constitutionStore.setError(err);
		throw error(500, err.message);
	}
}; 