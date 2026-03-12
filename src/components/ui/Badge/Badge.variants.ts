import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  'inline-flex items-center font-medium tracking-wide transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary/15 text-secondary border border-secondary/20',
        accent: 'bg-accent/15 text-accent border border-accent/20',
        outline:
          'border border-border text-foreground bg-transparent',
        muted: 'bg-muted text-muted-foreground',
        destructive: 'bg-destructive/10 text-destructive border border-destructive/20',
        success: 'bg-success/10 text-success border border-success/20',
      },
      size: {
        sm: 'px-2.5 py-0.5 text-[10px] uppercase tracking-widest',
        md: 'px-3 py-1 text-xs uppercase tracking-wider',
        lg: 'px-4 py-1.5 text-sm',
      },
      rounded: {
        default: 'rounded-full',
        full: 'rounded-full',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'full',
    },
  },
);
