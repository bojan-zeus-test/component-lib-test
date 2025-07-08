import { cn } from '@/lib/utils';
import React from 'react';

export const ContentfulH1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      className={cn('text-2xl  text-primary', className)}
      ref={ref}
      {...props}
    />
  );
});

export const ContentfulH2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      className={cn('text-xl font-semibold text-primary mt-10 mb-6', className)}
      ref={ref}
      {...props}
    />
  );
});

export const ContentfulH3 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn('text-lg font-semibold text-primary mt-10 mb-3', className)}
      ref={ref}
      {...props}
    />
  );
});

export const ContentFulP = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn('text-of-gray-200 mb-4', className)}
      ref={ref}
      {...props}
    />
  );
});
