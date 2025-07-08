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
import { HowItWorks } from '@/components/ui/how-it-works/how-it-works';
import { Layout } from '@/components/root/layout';
import { DemoApolloLink } from '@/components/ui/demo-apollo-link';
import ZeusAiChatGif from '@/assets/index/zeus-chat-widget.gif';

export const AiLiveChatPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row gap-6 align-middle">
          <div className="flex-1 flex flex-col ">
            <H1 className="mb-4  md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[64px]">
              AI Live Chat
            </H1>
            <p className="text-[21px] leading-[32px] text-gradient-dark bg-clip-text text-transparent mb-4 md:mb-6 md:text-[24px] md:leading-[40px]">
              Built by sales people for sales people
            </p>
            <div className="mt-1 md:mt-10">
              <CheckedList gap={2}>
                <CheckedListItem>
                  Your contact us form is trapped in the 90's, replace it with
                  Conversational AI Live chat that replies instantly to all of
                  your website visitors.
                </CheckedListItem>
                <CheckedListItem>
                  Upgrade 'computer says no' chat bots that have ridged flows to
                  a AI powered with a knowledge base that can answer any
                  question with the passion of your founder.
                </CheckedListItem>
                <CheckedListItem>
                  Generate more qualified enquiries from your website and
                  provide a customer experience your brand can be proud of.
                </CheckedListItem>
              </CheckedList>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <Button
                variant={'outline'}
                size="lg"
                className="mr-auto md:mr-0"
                asChild
              >
                <DemoApolloLink>Book your discovery call now</DemoApolloLink>
              </Button>
            </div>
            <div className="text-sm leading-6 text-of-gray-400">
              Conversational AI is 100X better than old chatbots
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center">
            <img
              src={ZeusAiChatGif}
              alt="ai live chat"
              className={'object-contain max-w-80'}
            />
          </div>
        </div>
      </Layout>

      <HowItWorks />

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
