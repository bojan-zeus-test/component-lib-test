import { FC } from 'react';
import { cn } from '@/lib/utils';
import { SectionHeader } from "@/components/ui/section-header";
import { Layout } from "@/components/ui/layout";
import * as React from "react";

export const StepByStep = () => {
  const steps = [
    { title: 'A visitor arrives to your website', emoji: '🌐' },
    { title: 'The AI engages with the visitor via chat or form', emoji: '💬' },
    { title: 'Pre‑qualification takes place', emoji: '✅' },
    { title: 'AI books the appointment', emoji: '📅' },
    { title: 'Confirmation and Follow‑up', emoji: '📧' },
  ];

  return (
    <Layout className="pb-5 pt-0 md:pt-0 md:pb-10">
      <SectionHeader className="pt-3 md:pt-2 mb-6 md:mb-20">
        Step-by-Step
      </SectionHeader>

      <div className="relative flex flex-col md:flex-row md:justify-between md:max-w-[1000px] md:mx-auto">
        <div
          className={cn(
            'absolute bg-primary w-[1px] top-[64px] md:top-[16px] bottom-[64px] left-[19.5px] z-[-1]',
            'md:w-auto md:top-[16px] md:left-24 md:right-24 md:bottom-auto md:h-[1px]'
          )}
        />
        {steps.map((step, index) => (
          <Step key={index} index={index + 1} title={step.title} emoji={step.emoji} />
        ))}
      </div>
    </Layout>
  );
};

interface StepProps {
  index: number;
  title: string;
  emoji: string;
}

export const Step: FC<StepProps> = ({ index, title, emoji }) => {
  return (
    <div className="flex flex-1 basis-0 gap-2 md:gap-6 h-32 items-center md:flex-col md:h-auto md:max-w-48 md:w-48">
      <div className="shrink-0 rounded-full text-white bg-primary w-10 h-10 leading-10 text-center md:mb-10">
        {index}
      </div>
      <div className="shrink-0 grow-0 w-[88px] h-[120px] md:h-[102px] md:w-auto object-center flex items-center justify-center text-6xl">
        {emoji}
      </div>
      <div className="text-primary text-[16px] leading-[24px] md:text-center font-semibold">
        {title}
      </div>
    </div>
  );
};