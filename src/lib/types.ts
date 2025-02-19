export interface ConstitutionParagraph {
    title: string;
    content: string[];
}

export interface PageData {
    constitutionParagraphs: ConstitutionParagraph[];
}

export interface HieroglyphUtils {
    symbols: string[];
    shuffle: () => string;
}

export interface ThemeConfig {
    colors: {
        primary: string;
        background: string;
        text: string;
    };
    images: {
        background: string;
        frame: string;
    };
} 