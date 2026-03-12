import { cva } from 'class-variance-authority';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      // Headings
      h1: 'text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl font-heading leading-[1.05]',
      h2: 'text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-heading',
      h3: 'text-2xl font-semibold tracking-tight sm:text-3xl font-heading',
      h4: 'text-xl font-semibold tracking-tight font-heading',
      h5: 'text-lg font-semibold font-heading',
      h6: 'text-base font-semibold font-heading',
      // Body
      body1: 'text-base leading-relaxed',
      body2: 'text-sm leading-relaxed',
      // Subtitle
      subtitle1: 'text-lg leading-relaxed text-muted-foreground',
      subtitle2: 'text-base leading-relaxed text-muted-foreground',
      // Overline / Label / Caption
      overline: 'text-xs font-semibold uppercase tracking-[0.2em]',
      caption: 'text-xs',
      label: 'text-sm font-medium',
      // Legacy / Utility
      lead: 'text-xl text-muted-foreground leading-relaxed',
      large: 'text-lg font-semibold',
      small: 'text-sm leading-relaxed',
      muted: 'text-sm text-muted-foreground leading-relaxed',
      blockquote: 'border-l-2 border-primary pl-6 italic text-base leading-relaxed',
    },
    color: {
      default: '',
      primary: 'text-primary',
      secondary: 'text-secondary',
      accent: 'text-accent',
      muted: 'text-muted-foreground',
      inherit: 'text-inherit',
      white: 'text-white',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      inherit: '',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      inherit: '',
    },
    italic: {
      true: 'italic',
      false: '',
    },
    noWrap: {
      true: 'truncate',
      false: '',
    },
    gutterBottom: {
      true: 'mb-4',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'default',
    align: 'inherit',
    weight: 'inherit',
    italic: false,
    noWrap: false,
    gutterBottom: false,
  },
});
