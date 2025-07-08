import { H1 } from '@/components/ui/typography';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { IntegrationsList } from '@/components/routes/integrations/integrations-list';
import { NavLink } from '@remix-run/react';
import { Paths } from '@/constants/paths';

export const IntegrationsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center mb-[72px] md:mb-[128px]">
        <H1 className="mb-2 md:mb-4">Integrations</H1>
        <p className="text-[21px] leading-8 md:max-w-[872px]">
          Zeus integrates with most Estate Agent CRMs, and the{' '}
          <span className="text-gradient-dark bg-clip-text text-transparent">
            majority of other software through
          </span>{' '}
          our Zapier integration.
        </p>
      </div>

      <IntegrationsList />

      <div className="text-center mb-12 md:mb-[128px]">
        <p className="text-of-gray-200 text-[21px] leading-[32px] mb-6 md:text-[24px] md:leading-[40px]">
          Need a custom integration? Get in touch.
        </p>
        <Button size="lg" variant={'outline'} asChild>
          <NavLink to={Paths.Contact}>Contact Us</NavLink>
        </Button>
      </div>
    </>
  );
};
