import { cn } from '@/lib/utils';
import * as React from 'react';
import finova from '@/assets/integrations/small/finova.svg';
import salesforce from '@/assets/integrations/small/salesforce.svg';
import hubspot from '@/assets/integrations/small/hubspot.svg';
import zapier from '@/assets/integrations/small/zapier.svg';
import pipedrive from '@/assets/integrations/small/pipedrive.svg';
import googleTm from '@/assets/integrations/small/google-tm.svg';
import calendly from '@/assets/integrations/small/calendly.svg';
import zendesk from '@/assets/integrations/small/zendesk.svg';

export const IntegrationsList = () => {
  return (
    <ul className="flex flex-col gap-8 mb-20 md:gap-6 md:mb-[108px] md:pb-12 md:flex-row md:flex-wrap md:justify-between">
      <IntegrationsListItem icon={finova} title="Finova">
        Finova is a SaaS based open-architecture software that helps lenders and
        brokers in the Mortgage, Lending and Savings sectors.
      </IntegrationsListItem>
      <IntegrationsListItem icon={salesforce} title="Salesforce">
        Salesforce is a cloud-based software company known for its customer
        relationship management (CRM) product, which provides tools for sales,
        customer service, marketing automation, analytics, and application
        development.
      </IntegrationsListItem>
      <IntegrationsListItem icon={hubspot} title="HubSpot">
        HubSpot is a customer platform that connects everything scaling
        companies need to deliver a best-in-class customer experience in one
        place.
      </IntegrationsListItem>
      <IntegrationsListItem icon={zapier} title="Zapier">
        Zapier is a web-based automation tool that connects different apps and
        services, enabling users to create automated workflows that streamline
        repetitive tasks without the need for coding.
      </IntegrationsListItem>
      <IntegrationsListItem icon={pipedrive} title="Pipedrive">
        Pipedrive is a sales pipeline CRM designed to help small businesses
        manage leads, track sales activities and close more deals.
      </IntegrationsListItem>
      <IntegrationsListItem icon={googleTm} title="Google Tag Manager">
        Google Tag Manager helps make website tag management simple with tools &
        solutions that allow small businesses to deploy and edit tags all in one
        place.
      </IntegrationsListItem>
      <IntegrationsListItem icon={calendly} title="Calendly">
        Calendly is a software company that develops a business communication
        platform used for teams to schedule, prepare and follow up on external
        meetings.
      </IntegrationsListItem>
      <IntegrationsListItem icon={zendesk} title="Zendesk">
        Zendesk is an award-winning customer service software trusted by 200K+
        customers all over the world.
      </IntegrationsListItem>
    </ul>
  );
};

interface IntegrationsListItemProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

export const IntegrationsListItem: React.FC<IntegrationsListItemProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <li
      className={cn(
        'text-[16px] pl-[76px] bg-left-top bg-no-repeat bg-[length:64px_64px] text-of-gray-200 leading-8 min-h-[64px]',
        'md:bg-top md:pl-0 md:pt-[168px] md:bg-[length:154px_154px] md:basis-[280px]'
      )}
      style={{ backgroundImage: `url(${icon})` }}
    >
      <div className="text-of-gray-100 text-[21px] leading-[28px] mb-2">
        {title}
      </div>
      <p className="text-of-gray-200 text-[16px] leading-[24px]">{children}</p>
    </li>
  );
};
