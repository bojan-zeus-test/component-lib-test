import setup from '@/assets/setup.svg';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { H3 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { DemoApolloLink } from '@/components/ui/demo-apollo-link';

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
        <H3 className="mb-4 md:mb-8">Set up timeline</H3>
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
        <Button size="lg" variant={'outline'} asChild>
          <DemoApolloLink>Book your discovery call now</DemoApolloLink>
        </Button>
      </div>
      <img src={setup} className="md:basis-1/2" alt="setup" />
    </div>
  );
};
