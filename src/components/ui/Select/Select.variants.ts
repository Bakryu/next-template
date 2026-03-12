import { cva } from 'class-variance-authority';

export const selectVariants = cva(
  'flex w-full border bg-transparent px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer',
  {
    variants: {
      variant: {
        default: 'border-border',
        error: 'border-destructive focus-visible:ring-destructive',
      },
      selectSize: {
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
      selectSize: 'md',
      rounded: 'default',
    },
  },
);
