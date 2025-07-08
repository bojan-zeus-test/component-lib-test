import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={cn(
        'font-semibold text-of-gray-100 pb-4 text-center relative',
        'text-[32px] leading-[40px] pt-36 mb-16',
        'md:text-[40px] md:leading-[48px] md:pt-36 md:mb-12',
        'after:absolute after:bottom-0 after:left-[calc(50%-32px)]',
        'after:border-b-4 after:w-[64px] after:border-of-accent',
        className
      )}
    >
      {children}
    </h2>
  );
};
