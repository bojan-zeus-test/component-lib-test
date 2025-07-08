import { FC } from 'react';
import step1 from '@/assets/index/step-by-step/step-1.svg';
import step2 from '@/assets/index/step-by-step/step-2.svg';
import step3 from '@/assets/index/step-by-step/step-3.svg';
import step4 from '@/assets/index/step-by-step/step-4.svg';
import step5 from '@/assets/index/step-by-step/step-5.svg';
import { cn } from '@/lib/utils';
import { SectionHeader } from "@/components/ui/section-header";
import { Layout } from "@/components/root/layout";
import * as React from "react";

export const StepByStep = () => {
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
        <Step index={1} title="A visitor arrives to your website" icon={step1}/>
        <Step
          index={2}
          title="The AI engages with the visitor via chat or form"
          icon={step2}
        />
        <Step index={3} title="Pre‑qualification takes place" icon={step3}/>
        <Step index={4} title="AI books the appointment" icon={step4}/>
        <Step index={5} title="Confirmation and Follow‑up" icon={step5}/>
      </div>
    </Layout>
  );
};

interface StepProps {
  index: number;
  title: string;
  icon: string;
}

export const Step: FC<StepProps> = ({index, title, icon}) => {
  return (
    <div className="flex flex-1 basis-0 gap-2 md:gap-6 h-32 items-center md:flex-col md:h-auto md:max-w-48 md:w-48">
      <div className="shrink-0 rounded-full text-white bg-primary w-10 h-10 leading-10 text-center md:mb-10">
        {index}
      </div>
      <img
        src={icon}
        alt="icon"
        className="shrink-0 grow-0 w-[88px] h-[120px] md:h-[102px] md:w-auto object-center"
      />
      <div className="text-primary text-[16px] leading-[24px] md:text-center font-semibold">
        {title}
      </div>
    </div>
  );
};
