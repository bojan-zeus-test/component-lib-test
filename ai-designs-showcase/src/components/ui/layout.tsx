import React from 'react';
import { cn } from '@/lib/utils';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={cn('px-6 py-8 md:px-14 md:py-16 max-w-7xl mx-auto', className)}>
      {children}
    </div>
  );
};