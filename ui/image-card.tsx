import React from 'react';
import { cn } from '@/lib/utils';

export interface ImageCardCardProps {
  children?: React.ReactNode;
  image: string;
  imagePosition?: 'left' | 'right';
  imagePositionSmall?: 'top' | 'bottom';
  className?: string;
  imageClassName?: string;
}

export const ImageCard: React.FC<ImageCardCardProps> = ({
  image,
  children,
  imagePosition,
  imagePositionSmall,
  className,
  imageClassName,
}) => {
  return (
    <div
      className={cn(
        {
          'flex flex-col md:flex-row gap-6': true,
          'flex-col-reverse': imagePositionSmall === 'bottom',
          'md:flex-row-reverse': imagePosition === 'right',
        },
        className
      )}
    >
      <div className="flex shrink md:flex-[7.4] justify-center">
        <img
          src={image}
          alt="logo"
          className={cn('object-contain', imageClassName)}
        />
      </div>
      <div className="flex flex-col md:flex-[5.6]">{children}</div>
    </div>
  );
};
