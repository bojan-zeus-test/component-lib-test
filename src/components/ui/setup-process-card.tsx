import * as React from "react";
import { cn } from "@/lib/utils";

interface SetupProcessCardProps {
  imagePosition?: 'left' | 'right';
  emoji: string;
  title: string;
  children?: React.ReactNode;
}

export const SetupProcessCard: React.FC<SetupProcessCardProps> = ({
  emoji,
  imagePosition = 'left',
  title,
  children,
}) => {
  return (
    <div
      className={cn('flex flex-col flex-col-reverse md:flex-row gap-6', {
        'md:flex-row-reverse': imagePosition === 'left',
      })}
    >
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <h3 className="text-[28px] leading-[38px] md:text-[32px] md:leading-[43px] text-of-gray-100">
          {title}
        </h3>
        <div className="text-of-gray-200 text-[18px] leading-[32px]">
          {children}
        </div>
      </div>
      <div className="flex-1 flex gap-4">
        <div className="mx-auto h-[268px] md:h-[354px] w-[390px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
          <div className="text-8xl">{emoji}</div>
        </div>
      </div>
    </div>
  );
};