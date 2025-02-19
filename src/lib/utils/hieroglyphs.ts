import type { HieroglyphUtils } from '../types';

export const hieroglyphUtils: HieroglyphUtils = {
    symbols: ['𓀀', '𓃭', '𓂝', '𓆓', '𓇋', '𓈖', '𓅓', '𓊵', '𓄿', '𓂋', '𓏏'],
    shuffle: function() {
        return [...this.symbols].sort(() => Math.random() - 0.5).join(' ');
    }
}; 