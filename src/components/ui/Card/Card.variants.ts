import { cva } from 'class-variance-authority';

export const cardVariants = cva(
  'bg-card text-card-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
  {
    variants: {
      variant: {
        default: 'border border-border/60 shadow-sm',
        elevated:
          'shadow-md border border-border/30 backdrop-blur-sm',
        ghost: 'bg-transparent',
        glass:
          'bg-white/60 backdrop-blur-xl border border-white/30 shadow-lg',
      },
      rounded: {
        default: 'rounded-xl',
        '2xl': 'rounded-2xl',
        none: 'rounded-none',
      },
      padding: {
        none: '',
        sm: 'p-5',
        md: 'p-7',
        lg: 'p-9',
      },
      hoverable: {
        true: 'hover:shadow-xl hover:-translate-y-1 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'default',
      padding: 'md',
      hoverable: false,
    },
  },
);
