import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export const PricingPlans = () => {
  return (
    <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-4 mb-24 md:mb-32">
      <PricingPlan
        title="Starter Plan"
        description="Great for small businesses with up to 100 leads/months."
        price="£199"
        features={[
          'No setup fees',
          'Up to 100 leads/month',
          'Superhuman Farmer  (website widget)',
          'No custom scripts or knowledge base',
          'No CRM integration',
        ]}
      />
      <PricingPlan
        title="Premium Plan"
        description="Ideal for customers looking for higher chat volumes"
        price="£499"
        features={[
          '£499 one-off setup fee',
          'Up to 500 leads/month',
          'Superhuman Farmer  (website widget)',
          'Custom scripts and knowledge base',
          'No CRM integration',
          'White Label Branding',
        ]}
      />
      <PricingPlan
        title="Enterprise Plan"
        description="Fully customisable and integrated with your CRM system"
        price="£1,999"
        highlight
        features={[
          '£1,999 one-off setup fee',
          'Up to 2000 leads/month',
          'Superhuman Farmer & Hunter',
          'Custom scripts and knowledge base',
          'Salesforce integration',
          'Calendly integration',
          'White Label Branding',
        ]}
      />
      <PricingPlan
        title="Global Plan"
        description="A plan tailored specifically to meet your business' needs"
        price="Custom"
        features={[
          '£1,999 one-off setup fee',
          'Up to 2000 leads/month',
          'Superhuman Farmer & Hunter',
          'Custom scripts and knowledge base',
          'Salesforce integration',
          'Calendly integration',
          'White Label Branding',
        ]}
      />
    </div>
  );
};

export interface PricingPlanProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export const PricingPlan: React.FC<PricingPlanProps> = ({
  title,
  description,
  price,
  features,
  highlight = false,
}) => {
  const titleColor = highlight ? 'text-white' : 'text-of-gray-200';
  const textColor = highlight ? 'text-of-gray-500' : 'text-of-gray-300';
  return (
    <div
      className={cn('border rounded-2xl py-6 px-4 relative', {
        'bg-white': !highlight,
        'bg-of-background': highlight,
        'background-gradient': highlight,
        'shadow-lg': highlight,
      })}
    >
      {highlight && (
        <div
          className="absolute top-6 right-4 bg-of-gray-300 px-2 py-1 rounded-2xl text-of-gray-500
        font-bold text-[10px] uppercase"
        >
          recommended
        </div>
      )}
      <div className={cn('font-bold mb-6', titleColor)}>{title}</div>
      <div className={cn('text-[14px] mb-2', textColor)}>{description}</div>
      <div className={cn('leading-[64px] font-semibold', titleColor)}>
        <span className="text-[32px]">{price}</span>
        <span>/month</span>
      </div>
      <ul
        className={cn('text-[14px] xl:text-[12px] leading-[32px]', textColor)}
      >
        {features.map((feature, i) => (
          <li key={i}>
            <Check className="inline h-4 text-of-gray-400 mr-1" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};
