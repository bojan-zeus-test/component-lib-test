import { Layout } from '@/components/root/layout';
import { H2 } from '@/components/ui/typography';
import {
  CircleHelp,
  LucideProps,
  ShieldCheck,
  SquareFunction,
  Webhook,
} from 'lucide-react';
import { ComponentType, FC } from 'react';
import * as react from 'react';
import * as React from 'react';
import { Link, NavLink } from '@remix-run/react';
import { Paths } from '@/constants/paths';
import { Button } from '@/components/ui/button';

export const GuidesPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center mb-10 md:mb-20">
        <H2 className="mb-2 md:mb-4">Guides</H2>
        <p className="md:max-w-[872px]">
          Welcome to our guides collection, where you’ll find everything you
          need to get the most out of our platform. In case you can't find what
          you're looking for, please don't hesitate to reach out to our team for
          assistance.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 pb-20">
        <GuideItem
          Icon={SquareFunction}
          title="Zeus Lead API"
          description="A comprehensive guide on integrating and utilizing the Zeus Lead API to automate customer interactions on Whatsapp"
          path={Paths.GuidesApi}
        />
        <GuideItem
          Icon={ShieldCheck}
          title="Domain Whitelisting Guide"
          description="Instructions on how to whitelist our domains to ensure seamless delivery of lead notifications"
          path={Paths.GuidesDomainWhitelisting}
        />
        <GuideItem
          Icon={Webhook}
          title="Webhooks Guide"
          description="Learn how to configure webhooks to receive real-time notifications of lead activities and automate workflows with Zeus"
          path={Paths.GuidesWebhooks}
        />
        <GuideItem
          Icon={CircleHelp}
          title="FAQ"
          description="Frequently asked questions covering common inquiries about Zeus products, features, and usage best practices"
          path={Paths.GuidesFaq}
        />
      </div>
      <div className="text-center mb-12 md:mt-6">
        <p className="text-of-gray-200 text-[21px] leading-[32px] mb-6 md:text-[24px] md:leading-[40px]">
          You can't find what are you looking for?
        </p>
        <Button size="lg" variant={'outline'} asChild>
          <NavLink to={Paths.Contact}>Contact Us</NavLink>
        </Button>
      </div>
    </Layout>
  );
};

interface GuideItemProps {
  Icon: ComponentType<
    Omit<LucideProps, 'ref'> & react.RefAttributes<SVGSVGElement>
  >;
  title: string;
  description: string;
  path: string;
}

const GuideItem: FC<GuideItemProps> = ({ Icon, title, description, path }) => {
  return (
    <div className="flex gap-4">
      <Icon className="w-8 h-8 md:w-12 md:h-12 mt-0.5 md:mt-0 md:self-center text-of-gray-400 flex-shrink-0" />
      <div>
        <h2 className="text-of-primary text-[21px] leading-8 font-semibold">
          <Link to={path}>{title}</Link>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
