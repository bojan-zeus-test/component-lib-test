import * as React from 'react';
import { cn } from '@/lib/utils';

export interface HowItWorksListProps {
  items: Array<{
    icon: string;
    title: string;
  }>;
}

const HowItWorksList: React.FC<HowItWorksListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-[26px] pb-10 md:flex-row md:gap-6 md:pb-32">
      {items.map((item, index) => (
        <HowItWorksListItem key={index} icon={item.icon}>
          {item.title}
        </HowItWorksListItem>
      ))}
    </ul>
  );
};

export interface HowItWorksListItemProps {
  icon: string;
  children?: React.ReactNode;
}

const HowItWorksListItem: React.FC<HowItWorksListItemProps> = ({
  children,
  icon,
}) => {
  return (
    <li
      className={cn(
        'text-[16px] pl-[76px] bg-left-top bg-no-repeat bg-[length:64px_64px] text-of-gray-200 leading-8 min-h-[64px]',
        'md:pl-0 md:pt-[168px] md:bg-[length:144px_144px] md:bg-top md:text-center md:flex-1'
      )}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {children}
    </li>
  );
};

export { HowItWorksList };
