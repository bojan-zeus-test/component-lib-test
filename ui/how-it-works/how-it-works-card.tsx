import * as React from 'react';
import { cn } from '@/lib/utils';

interface HowItWorksCardProps {
  gifPosition?: 'left' | 'right';
  gif: string;
  title: string;
  icon: string;
  description: React.ReactNode;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  gif,
  gifPosition = 'left',
  title,
  description,
  icon,
}) => {
  return (
    <div
      className={cn('flex flex-col md:flex-row gap-6', {
        'md:flex-row-reverse': gifPosition === 'left',
      })}
    >
      <div className="flex-1 flex flex-col gap-2 md:gap-7 justify-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <img src={icon} alt="icon" className="w-12 h-12" />
          <h3 className="text-[28px] leading-[38px] md:text-[32px] md:leading-[43px] text-of-gray-100">
            {title}
          </h3>
        </div>
        <p className="text-of-gray-200 text-[18px] leading-[32px]">
          {description}
        </p>
      </div>
      <div className="flex-1 flex">
        <img
          src={gif}
          className="mx-auto md:h-[320px] object-contain"
          alt="gif"
        />
      </div>
    </div>
  );
};
