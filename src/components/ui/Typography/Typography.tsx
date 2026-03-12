import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';
import { typographyVariants } from './Typography.variants';

type TypographyElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'blockquote'
  | 'div'
  | 'label'
  | 'li'
  | 'dt'
  | 'dd'
  | 'figcaption'
  | 'cite'
  | 'em'
  | 'strong'
  | 'small'
  | 'time'
  | 'address';

const variantElementMap: Record<string, TypographyElement> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  lead: 'p',
  large: 'p',
  small: 'span',
  muted: 'p',
  caption: 'span',
  overline: 'span',
  label: 'label',
  blockquote: 'blockquote',
};

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  /** Override the rendered HTML element */
  as?: TypographyElement;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      color,
      align,
      weight,
      italic,
      noWrap,
      gutterBottom,
      as,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as || variantElementMap[variant || 'body1'] || 'p';

    return React.createElement(
      Component,
      {
        className: cn(
          typographyVariants({
            variant,
            color,
            align,
            weight,
            italic,
            noWrap,
            gutterBottom,
            className,
          }),
        ),
        ref,
        ...props,
      },
      children,
    );
  },
);

Typography.displayName = 'Typography';

export { Typography };
