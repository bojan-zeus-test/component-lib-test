import * as React from 'react';

export interface CheckedListProps {
  children?: React.ReactNode;
  gap?: number;
}

const CheckedList: React.FC<CheckedListProps> = ({ children, gap }) => {
  return (
    <ul className={`text-of-gray-200 flex flex-col gap-${gap || 6} pb-10`}>
      {children}
    </ul>
  );
};

export interface CheckedListItemProps {
  children?: React.ReactNode;
}

const CheckedListItem: React.FC<CheckedListItemProps> = ({ children }) => {
  return (
    <li
      className={`pl-9 bg-left-top bg-[url('/assets/carbon-checkmark-filled.svg')] bg-no-repeat`}
    >
      {children}
    </li>
  );
};

export { CheckedList, CheckedListItem };
