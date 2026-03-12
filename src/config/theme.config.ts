import type { ThemeStyle } from '@/types/site.types';

export const theme = {
  colors: {
    primary: '#1a1a2e',
    'primary-foreground': '#faf8f5',
    secondary: '#c9a96e',
    'secondary-foreground': '#1a1a2e',
    accent: '#e07a5f',
    'accent-foreground': '#ffffff',
    background: '#faf8f5',
    foreground: '#1a1a2e',
    muted: '#f0ebe3',
    'muted-foreground': '#6b6577',
    border: '#e8e0d4',
    ring: '#c9a96e',
    destructive: '#d64545',
    'destructive-foreground': '#ffffff',
    success: '#4a9d6e',
    'success-foreground': '#ffffff',
  },
  fonts: {
    heading: 'Playfair Display',
    body: 'Inter',
  },
  borderRadius: {
    base: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgb(26 26 46 / 0.04)',
    base: '0 2px 8px rgb(26 26 46 / 0.06), 0 1px 2px rgb(26 26 46 / 0.04)',
    md: '0 8px 24px rgb(26 26 46 / 0.08), 0 2px 6px rgb(26 26 46 / 0.04)',
    lg: '0 16px 48px rgb(26 26 46 / 0.1), 0 4px 12px rgb(26 26 46 / 0.06)',
    xl: '0 24px 64px rgb(26 26 46 / 0.12), 0 8px 20px rgb(26 26 46 / 0.06)',
  },
  animation: {
    /** Duration multiplier: 1 = normal, 0.5 = snappy, 1.5 = relaxed */
    speed: 1,
    /** Easing curve — smooth deceleration for premium feel */
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  },
  style: 'elegant' as ThemeStyle,
} as const;

export type Theme = typeof theme;

/**
 * Style presets that can be applied by changing `theme.style`.
 * Components can read this to adjust their default variants.
 */
export const stylePresets: Record<ThemeStyle, {
  buttonRounded: 'default' | 'full' | 'none';
  cardShadow: boolean;
  animationIntensity: 'subtle' | 'normal' | 'energetic';
  headingWeight: 'normal' | 'bold' | 'black';
}> = {
  minimal: {
    buttonRounded: 'none',
    cardShadow: false,
    animationIntensity: 'subtle',
    headingWeight: 'normal',
  },
  bold: {
    buttonRounded: 'default',
    cardShadow: true,
    animationIntensity: 'energetic',
    headingWeight: 'black',
  },
  elegant: {
    buttonRounded: 'default',
    cardShadow: true,
    animationIntensity: 'normal',
    headingWeight: 'bold',
  },
  playful: {
    buttonRounded: 'full',
    cardShadow: true,
    animationIntensity: 'energetic',
    headingWeight: 'bold',
  },
};

export function getStylePreset() {
  return stylePresets[theme.style];
}
