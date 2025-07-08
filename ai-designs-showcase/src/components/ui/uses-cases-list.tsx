import React from 'react';
import { cn } from '@/lib/utils';

export interface UsesCasesListProps {
  items: Array<{
    icon: string;
    title: string;
  }>;
}

export const UsesCasesList: React.FC<UsesCasesListProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-8 pb-20 md:flex-row md:pb-[208px]">
      {items.map((item, index) => (
        <UsesCasesListItem key={index} icon={item.icon}>
          {item.title}
        </UsesCasesListItem>
      ))}
    </ul>
  );
};

export interface UsesCasesListItemProps {
  icon: string;
  children?: React.ReactNode;
}

const UsesCasesListItem: React.FC<UsesCasesListItemProps> = ({
  children,
  icon,
}) => {
  return (
    <li
      className={cn(
        'pt-[92px] bg-top bg-no-repeat bg-[length:88px_88px] text-of-gray-200 text-[21px] leading-[28px] text-center',
        'md:basis-1/4 md:mt-4'
      )}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {children}
    </li>
  );
};