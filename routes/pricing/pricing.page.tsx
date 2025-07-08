import React from 'react';
import { H1, H2 } from '@/components/ui/typography';
import PricingForm from './pricing-form';

// const BOOST_YOUR_SALES_LINK =
//   'https://wa.me/447447952969?text=Hi%2C%20I%27d%20like%20to%20check%20your%20tools%20out%21';

export const PricingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-20 md:mb-32">
        <H1 className="mb-2 md:mb-4">Zeus Pricing</H1>
        <p className="text-[21px] leading-8 md:max-w-[872px] mb-16 md:mb-20">
          Our AI-powered WhatsApp conversational tools are designed to grow with
          your business and help you find more time to{' '}
          <span className="text-gradient-dark bg-clip-text text-transparent">
            follow up with old clients, improve the quality of leads from your
            website and adverts, and keep people engaged
          </span>{' '}
          so they respond and show up for calls. By automating these processes,
          we address these challenges head-on, allowing your business to thrive.
        </p>
        <H2>Interested in our pricing?</H2>
        <p className="text-[21px] leading-8 md:max-w-[872px]">
          Curious about the cost? Since every business is different, we don’t
          have fixed prices. Pop your details into the form below and we’ll
          share the pricing that fits your setup.
        </p>
      </div>
      <PricingForm />
    </>
  );
};
