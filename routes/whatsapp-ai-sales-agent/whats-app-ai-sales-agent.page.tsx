import useCase24_7 from '@/assets/use-case-24-7.svg';
import useCaseResponse from '@/assets/use-case-response.svg';
import useCaseLanguage from '@/assets/use-case-language.svg';
import useCaseWhatsApp from '@/assets/use-case-whatsapp.svg';
import timelineCall from '@/assets/timeline-call.svg';
import timelineAi from '@/assets/timeline-ai.svg';
import timelineEmail from '@/assets/timeline-email.svg';
import { H1 } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import * as React from 'react';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { SideHeader } from '@/components/ui/side-header';
import { UsesCasesList } from '@/components/ui/uses-cases-list';
import { SetupTimeline } from '@/components/ui/setup-timeline';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import whatsapp from '@/assets/whatsapp-white.svg';
import { HowItWorks } from "@/components/ui/how-it-works/how-it-works";
import whatsappHeadImg from '@/assets/whatsapp-head-img.svg';
import { Layout } from "@/components/root/layout";

export const WhatsAppAiSalesAgentPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row gap-6 align-middle">
          <div className="flex-1 flex flex-col justify-center">
            <H1 className="mb-4 md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[64px]">A WhatsApp AI Sales
              Agent For Your Website</H1>
            <p
              className="text-[21px] leading-[32px] text-gradient-dark bg-clip-text text-transparent mb-4 md:mb-6 md:text-[24px] md:leading-[40px]">
              Built by sales people for sales people
            </p>
            <div className="mt-1 md:mt-10">
              <CheckedList gap={2}>
                <CheckedListItem>
                  Get 11% to 32% more enquiries from your website without additional
                  ad spend.
                </CheckedListItem>
                <CheckedListItem>
                  Filter, triage & nurture clients, so your sales team focus on high
                  value leads.
                </CheckedListItem>
                <CheckedListItem>
                  More superhuman conversations without having to hire more humans.
                </CheckedListItem>
              </CheckedList>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <Button
                size="lg"
                className="bg-wa-primary hover:bg-wa-primary-hover mr-auto md:mr-0"
                asChild
              >
                <DemoWhatsappLink>
                  <div
                    className="w-8 h-8 bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${whatsapp})`,
                      backgroundSize: '24px',
                    }}
                  />
                  Chat on WhatsApp
                </DemoWhatsappLink>
              </Button>
            </div>
            <div className="text-sm leading-6 text-of-gray-400">
              Conversational AI is 100X better than old chatbots
            </div>
          </div>
          <div className="flex-1 content-center items-center">
            <div className="p-5 w-full h-fit relative">
              <img
                src={whatsappHeadImg}
                alt="whatsApp ai sales agent"
                className={'object-contain'}
              />
              {/*<Vimeo videoId="1027271267"/>*/}
            </div>
          </div>
        </div>
      </Layout>

      <HowItWorks/>

      <Layout>
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2 md:pr-[136px]">
            <SideHeader contentPosition="right">Why use it?</SideHeader>
          </div>
          <div className="basis-1/2 flex flex-col gap-10 text-of-gray-200 leading-8">
            <p>
              Cost effective bespoke AI creation. Human communication without
              human costs. Your AI is consistent, it is customised with accurate
              product and service knowledge, it is not a chat bot.
            </p>
            <p>
              Fast & simple set up. No staff training required. From day one
              reduce your operational administrative work, data entry and
              scheduling while Improve CRM accuracy and reporting. There is no
              need to set up multiple WhatsApp accounts.
            </p>
            <p>
              Legally compliant and secure. Feel safe with full GDPR and FCA
              compliance
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
                'Discovery call to customize your AI, and train it on your company materials',
              icon: timelineCall,
            },
            {
              description: 'Install the AI on your website with a code snippet',
              icon: timelineAi,
            },
            {
              description: 'Leads Via Email or to your CRM',
              icon: timelineEmail,
            },
          ]}
        />
      </Layout>
    </>
  );
};
