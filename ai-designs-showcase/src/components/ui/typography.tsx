import { cn } from '@/lib/utils';
import * as React from 'react';

export const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h1
      className={cn(
        'text-[40px] leading-[48px] md:text-[56px] md:leading-[64px] text-primary md:mt-10 mb-2',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      className={cn(
        'text-[32px] leading-[40px] md:text-[40px] md:leading-[48px] text-primary md:mt-10 mb-4',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

export const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => {
  return (
    <h3
      className={cn(
        'text-[24px] leading-[32px] md:text-[24px] md:leading-[32px] text-of-gray-100',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});