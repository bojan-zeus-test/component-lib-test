import { ImageCard } from '@/components/ui/image-card';
import { H1 } from '@/components/ui/typography';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { HowItWorksList } from '@/components/ui/how-it-works-list';
import { SideHeader } from '@/components/ui/side-header';
import { UsesCasesList } from '@/components/ui/uses-cases-list';
import { SetupTimeline } from '@/components/ui/setup-timeline';
import * as React from 'react';
import socialBoostAi from '@/assets/social-boost-ai.svg';
import howItWorks1 from '@/assets/social-boost-ai/how-it-works-1.svg';
import howItWorks2 from '@/assets/social-boost-ai/how-it-works-2.svg';
import howItWorks3 from '@/assets/social-boost-ai/how-it-works-3.svg';
import useCase24_7 from '@/assets/use-case-24-7.svg';
import useCaseResponse from '@/assets/use-case-response.svg';
import useCaseLanguage from '@/assets/use-case-language.svg';
import useCaseWhatsApp from '@/assets/use-case-whatsapp.svg';
import timelineCall from '@/assets/timeline-call.svg';
import timelineProposal from '@/assets/timeline-proposal.svg';
import timelineAccount from '@/assets/timeline-account.svg';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';

export const SocialBoostAiPage: React.FC = () => {
  return (
    <>
      <ImageCard image={socialBoostAi} imagePosition="right">
        <H1 className="md:mb-4">SocialBoost AI</H1>
        <h3 className="text-xl text-of-gray-100 text-[21px] leading-[28px] mb-8 md:mb-16">
          <span className="text-gradient-dark bg-clip-text text-transparent">
            Discover a new way to make paid advertising ROI positive
          </span>
        </h3>
        <CheckedList>
          <CheckedListItem>
            Leverage conversational AI to make previously poor-performing lead
            gen channels commercially viable.
          </CheckedListItem>
          <CheckedListItem>
            Improve your brand image with consistent social content.
          </CheckedListItem>
          <CheckedListItem>
            Nurture and educate new leads without having to hire more humans
          </CheckedListItem>
        </CheckedList>
        <div>
          <Button size="lg" asChild>
            <DemoWhatsappLink>Boost your sales now</DemoWhatsappLink>
          </Button>
        </div>
      </ImageCard>

      <SectionHeader>How it Works</SectionHeader>
      <HowItWorksList
        items={[
          {
            icon: howItWorks1,
            title:
              'Utilise SocialBoostAI to manage your social paid marketing, create content and generate incremental ' +
              'new leads.',
          },
          {
            icon: howItWorks2,
            title:
              'Using conversational AI automatically and instantly respond to social media leads 24/7 in multiple' +
              ' languages without increased staff costs.',
          },
          {
            icon: howItWorks3,
            title:
              'Pre-qualify and educate leads using AI ensuring only hot leads are handled by your human team.' +
              ' Enable your team to focus on closing business not nurturing it.',
          },
        ]}
      />
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/2 md:pr-[136px]">
          <SideHeader contentPosition="right">Why use it?</SideHeader>
        </div>
        <div className="basis-1/2 flex flex-col gap-10 text-of-gray-200 leading-8">
          <p>
            Instant Social Media live response yields significantly higher
            conversion than standard form fills or website click through. Try
            the future not the past.
          </p>
          <p>
            Communicate with and nurture leads without any human costs via
            accurate and consistent conversational AI developed to be an expert
            in your product and/or service.
          </p>
          <p>
            No technical or development work is required - this is what we do.
          </p>
        </div>
      </div>
      <SectionHeader>Features / Use cases</SectionHeader>
      <UsesCasesList
        items={[
          {
            icon: useCase24_7,
            title: '24/7 customer response',
          },
          {
            icon: useCaseResponse,
            title: 'Fast response',
          },
          {
            icon: useCaseLanguage,
            title: 'Multi Language Support',
          },
          {
            icon: useCaseWhatsApp,
            title: 'All the leading brands are using WhatsApp and AI',
          },
        ]}
      />
      <SetupTimeline
        items={[
          {
            description:
              "Discovery call to understand your brand, it's positioning, current social strategy - 1 hour call",
            icon: timelineCall,
          },
          {
            description:
              'Proposal creation, our team will create example adverts and demo' +
              ' Facebook campaign for you to review - 4 days set up time 1 hour call',
            icon: timelineProposal,
          },
          {
            description:
              'Account creation / access management / KPI reporting, ' +
              'account kick off',
            icon: timelineAccount,
          },
        ]}
      />
    </>
  );
};
