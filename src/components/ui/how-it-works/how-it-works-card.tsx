import * as React from 'react';
import { cn } from '@/lib/utils';

interface HowItWorksCardProps {
  gifPosition?: 'left' | 'right';
  emoji: string;
  title: string;
  description: React.ReactNode;
}

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  emoji,
  gifPosition = 'left',
  title,
  description,
}) => {
  return (
    <div
      className={cn('flex flex-col md:flex-row gap-6', {
        'md:flex-row-reverse': gifPosition === 'left',
      })}
    >
      <div className="flex-1 flex flex-col gap-2 md:gap-7 justify-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          <div className="w-12 h-12 text-4xl flex items-center justify-center">{emoji}</div>
          <h3 className="text-[28px] leading-[38px] md:text-[32px] md:leading-[43px] text-of-gray-100">
            {title}
          </h3>
        </div>
        <p className="text-of-gray-200 text-[18px] leading-[32px]">
          {description}
        </p>
      </div>
      <div className="flex-1 flex">
        <div className="mx-auto md:h-[320px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center w-full">
          <div className="text-8xl">{emoji}</div>
        </div>
      </div>
    </div>
  );
};