import { writable, derived } from 'svelte/store';
import type { ConstitutionParagraph } from '$lib/types';

interface ConstitutionState {
    articles: ConstitutionParagraph[];
    readArticles: Set<string>;
    bookmarked: Set<string>;
    activeArticle?: string;
    searchQuery: string;
    loading: boolean;
    error: Error | null;
}

function createConstitutionStore() {
    const initialState: ConstitutionState = {
        articles: [],
        readArticles: new Set(),
        bookmarked: new Set(),
        searchQuery: '',
        loading: false,
        error: null
    };

    const { subscribe, set, update } = writable<ConstitutionState>(initialState);

    return {
        subscribe,
        
        // Data loading
        setArticles: (articles: ConstitutionParagraph[]) => 
            update(state => ({ ...state, articles, loading: false, error: null })),
            
        setLoading: (loading: boolean) => 
            update(state => ({ ...state, loading })),
            
        setError: (error: Error | null) => 
            update(state => ({ ...state, error, loading: false })),

        // UI State management
        markAsRead: (articleTitle: string) => 
            update(state => ({
                ...state,
                readArticles: new Set([...state.readArticles, articleTitle])
            })),
            
        toggleBookmark: (articleTitle: string) => 
            update(state => {
                const bookmarked = new Set(state.bookmarked);
                if (bookmarked.has(articleTitle)) {
                    bookmarked.delete(articleTitle);
                } else {
                    bookmarked.add(articleTitle);
                }
                return { ...state, bookmarked };
            }),
            
        setActiveArticle: (articleTitle?: string) => 
            update(state => ({ ...state, activeArticle: articleTitle })),
            
        setSearchQuery: (query: string) => 
            update(state => ({ ...state, searchQuery: query })),
            
        reset: () => set(initialState)
    };
}

export const constitutionStore = createConstitutionStore();

// Derived stores for filtered data
export const filteredArticles = derived(
    constitutionStore,
    $store => {
        if (!$store.searchQuery) return $store.articles;
        
        const query = $store.searchQuery.toLowerCase();
        return $store.articles.filter(article => 
            article.content.some(text => 
                text.toLowerCase().includes(query)
            )
        );
    }
); 