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
    <li className="pl-9 bg-left-top bg-no-repeat flex items-start">
      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span>{children}</span>
    </li>
  );
};

export { CheckedList, CheckedListItem };