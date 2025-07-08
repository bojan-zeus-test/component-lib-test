import { Button } from '@/components/ui/button';
import * as React from 'react';
import { H4 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';

export interface SetupTimelineProps {
  items: {
    description: string;
    icon: string;
  }[];
}

export const SetupTimeline: React.FC<SetupTimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:mx-[100px] md:mb-40">
      <div className="md:basis-1/2 md:pl-12">
        <H4 className="mb-4 md:mb-8">Set up timeline</H4>
        <ul className="flex flex-col gap-4 pb-8 md:pr-8 md:gap-8">
          {items.map((item, index) => (
            <li
              key={index}
              className={cn(
                `pl-[72px] bg-left-top bg-no-repeat bg-[length:48px_48px] text-of-gray-200 text-[18px] leading-[32px] min-h-12`,
                'text-[21px] leading-[28px]',
                'md:flex md:items-center md:bg-left md:min-h-14 md:my-auto'
              )}
              style={{ backgroundImage: `url(${item.icon})` }}
            >
              {item.description}
            </li>
          ))}
        </ul>
        <Button size="lg" variant={'outline'}>
          Book your discovery call now
        </Button>
      </div>
      <div className="md:basis-1/2 bg-gray-200 rounded-lg h-64 flex items-center justify-center">
        <span className="text-gray-500">Setup Timeline Visual</span>
      </div>
    </div>
  );
};