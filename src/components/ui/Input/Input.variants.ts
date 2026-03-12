import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full border bg-transparent px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-border',
        error: 'border-destructive focus-visible:ring-destructive',
      },
      inputSize: {
        sm: 'h-9 text-sm',
        md: 'h-10',
        lg: 'h-12 text-base',
      },
      rounded: {
        default: 'rounded-base',
        lg: 'rounded-lg',
        full: 'rounded-full px-4',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
      rounded: 'default',
    },
  },
);
