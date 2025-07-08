import { ImageCard } from '@/components/ui/image-card';
import * as React from 'react';
import about from '@/assets/about.svg';
import { H1 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { AboutApart } from '@/components/routes/about/about-apart';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import { ManagementTeam } from '@/components/routes/about/management-team';

export const AboutPage = () => {
  return (
    <>
      <ImageCard image={about} imagePositionSmall="top" imagePosition="right">
        <H1 className="mb-6">
          Zeus's mission is to empower and{' '}
          <span className="text-gradient-dark bg-clip-text text-transparent">
            redefine customer conversations through AI
          </span>
        </H1>
        <p className="text-[18px] leading-[32px] text-of-gray-200 mb-12 md:mb-6">
          Our purpose is to deliver consistent, responsible and outstanding
          conversational AI. Using our market-leading conversational AI, our
          customers can safely harness the power of Generative AI to automate
          client interactions and set new standards.
        </p>
        <div className="mb-4">
          <Button size="lg" asChild>
            <DemoWhatsappLink>Boost your sales now</DemoWhatsappLink>
          </Button>
        </div>
      </ImageCard>
      <SectionHeader>Our Story</SectionHeader>
      <p
        className={cn(
          'text-[21px] leading-[32px] text-of-gray-300 text-center  mb-[100px]',
          'md:text-[24px] md:leading-[40px] md:max-w-[872px] md:mx-auto md:mb-[200px]'
        )}
      >
        Zeus was born out of a passion for problem solving and the belief that
        interactions with customers and leads could be simpler and more
        manageable. By automating human-to-organization interactions, we help
        businesses scale effortlessly, delivering unprecedented efficiencies and
        results.
      </p>
      <AboutApart />
      <SectionHeader>Management Team</SectionHeader>
      <ManagementTeam />
    </>
  );
};
