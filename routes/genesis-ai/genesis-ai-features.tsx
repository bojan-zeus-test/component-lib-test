import * as React from 'react';
import featureCalendar from '@/assets/feature-calendar.svg';
import featureCRM from '@/assets/feature-crm.svg';
import featureReEngage from '@/assets/feature-re-engage.svg';
import featureScalable from '@/assets/feature-scalable.svg';
import { cn } from '@/lib/utils';

export const GenesisAiFeatures = () => {
  return (
    <ul className="flex flex-col gap-6 mb-10 md:pb-12 md:mx-[100px] md:flex-row flex-wrap">
      <GenesisAiFeature icon={featureCalendar}>
        Nurture and educate current customers through features like automated
        appointment reminders, making sure you reduce the number of no-shows.
      </GenesisAiFeature>
      <GenesisAiFeature icon={featureCRM}>
        Keep your CRM up to date with 100% confidence and accuracy. All leads
        are automatically added to your CRM with all fields completed.
      </GenesisAiFeature>
      <GenesisAiFeature icon={featureReEngage}>
        Re-engage your old customers on a new channel using WhatsApp, without
        lengthy set-up times or complex training. AI can now automatically
        schedule calls with existing, ready-to-convert customers, placing booked
        calls directly into diaries.
      </GenesisAiFeature>
      <GenesisAiFeature icon={featureScalable}>
        Automatically adapt to meet the demands of an unpredictable market. By
        integrating our conversational AI, your business can scale without
        additional costs — removing limits from your growth potential and
        profits. It’s not just about having WhatsApp on your website, it’s about
        always meeting customers where they are.
      </GenesisAiFeature>
    </ul>
  );
};

interface GenesisAiFeatureProps {
  icon: string;
  children: React.ReactNode;
}

export const GenesisAiFeature: React.FC<GenesisAiFeatureProps> = ({
  icon,
  children,
}) => {
  return (
    <li
      className={cn(
        'text-[16px] pl-[76px] bg-left-top bg-no-repeat bg-[length:64px_64px] text-of-gray-200 leading-8 min-h-[64px]',
        'md:pl-0 md:pt-[96px] md:bg-[length:88px_88px] md:basis-[calc(50%-12px)]'
      )}
      style={{ backgroundImage: `url(${icon})` }}
    >
      {children}
    </li>
  );
};
