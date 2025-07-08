import * as React from 'react';
import { cn } from '@/lib/utils';

interface SideHeaderProps {
  contentPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export const SideHeader: React.FC<SideHeaderProps> = ({
  children,
  contentPosition,
}) => {
  const isRight = contentPosition === 'right';
  return (
    <h3
      className={cn(
        'text-[28px] leading-[38px] text-of-gray-100 pb-2 mb-6 relative',
        'md:text-[32px] md:leading-[43px]',
        {
          'md:text-right': isRight,
        }
      )}
    >
      <div
        className={cn(
          'absolute bottom-0 border-b-2 w-[40px] border-of-accent left-0',
          {
            'md:left-auto md:right-0 md:text-': isRight,
          }
        )}
        aria-hidden="true"
      ></div>
      {children}
    </h3>
  );
};