import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/85 shadow-md hover:shadow-lg',
        accent:
          'bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg',
        outline:
          'border-2 border-primary/20 bg-transparent text-foreground hover:border-primary hover:bg-primary/5',
        ghost: 'hover:bg-muted/60 text-foreground',
        link: 'text-secondary underline-offset-4 hover:underline p-0 h-auto font-semibold',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md',
      },
      size: {
        sm: 'h-9 px-4 text-xs gap-1.5 uppercase tracking-widest',
        md: 'h-11 px-5 text-sm gap-2',
        lg: 'h-13 px-7 text-base gap-2.5',
        xl: 'h-15 px-10 text-lg gap-3',
        icon: 'h-11 w-11',
      },
      rounded: {
        default: 'rounded-base',
        lg: 'rounded-lg',
        full: 'rounded-full',
        none: 'rounded-none',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: 'default',
      fullWidth: false,
    },
  },
);
