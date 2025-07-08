import React from 'react';
import { SideHeader } from '@/components/ui/side-header';

const data: PricingFeatureProps[] = [
  {
    title: 'SuperHuman Farmer',
    description:
      'Ads a WhatsApp widget to your website controlled by a' +
      ' SuperHuman Farmer to nurture, educate and pre-qualify leads, booking in more calls.',
  },
  {
    title: 'SuperHuman Hunter',
    description:
      'Reach out to both historic and current clients via personalized WhatsApp messages to re-engage them' +
      ' and seamlessly book calls, driving new business and strengthening relationships.',
  },
];

export const PricingFeatures: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row mb-16 md:mb-24">
      <div className="basis-1/2 md:pr-[136px]">
        <SideHeader contentPosition="right">Two sets of features</SideHeader>
      </div>
      <div className="basis-1/2 flex flex-col gap-8">
        {data.map((item, index) => (
          <PricingFeature
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export interface PricingFeatureProps {
  title: string;
  description: string;
}

export const PricingFeature: React.FC<PricingFeatureProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-[21px] leading-[28px] gap-2 text-of-gray-200 max-w-[536px]">
      <h5 className="text-primary">{title}</h5>
      <p className="text-[18px] leading-8">{description}</p>
    </div>
  );
};
