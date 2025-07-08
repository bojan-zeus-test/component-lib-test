import { H1, H4 } from '@/components/ui/typography';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { Button } from '@/components/ui/button';
import { ImageCard } from '@/components/ui/image-card';
import * as React from 'react';
import headingChatImage from '@/assets/websummit/heading_chat.jpg';
import { SectionHeader } from '@/components/ui/section-header';
import whatsapp from '@/assets/whatsapp-white.svg';
import { HowItWorksList } from '@/components/ui/how-it-works-list';
import howItWorks1 from '@/assets/sales-talk-ai/how-it-works-1.svg';
import howItWorks2 from '@/assets/sales-talk-ai/how-it-works-2.svg';
import howItWorks3 from '@/assets/sales-talk-ai/how-it-works-3.svg';
import { SideHeader } from '@/components/ui/side-header';
import { SetupProcessCard } from '@/components/ui/setup-process-card';
import reporting from '@/assets/index/setup-process/reporting.svg';
import nurtureScript from '@/assets/index/setup-process/nurture-script.svg';
import website from '@/assets/index/setup-process/website.svg';

export const WebsummitPage = () => {
  const websummitLink =
    'https://wa.me/447492833135?text=Hi%20can%20you%20help%20me%20get%20the%20most%20out%20of%20Web%20Summit%3F';
  return (
    <div>
      <ImageCard
        image={headingChatImage}
        imagePosition="right"
        imagePositionSmall="bottom"
        imageClassName="sm:max-w-[365px] lg:max-w-[397px]
         rounded-t-[40px]
         shadow-[0px_-10px_50px_-20px] shadow-of-primary-100"
      >
        <H1 className="md:mb-4 md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[64px]">
          A conversational AI built for Web Summit
        </H1>
        <h3 className="text-xl text-of-gray-100 text-[21px] leading-[28px] mb-8 md:mb-16">
          <span className="text-gradient-dark bg-clip-text text-transparent">
            Do more business with less effort using AI
          </span>
        </h3>
        <CheckedList>
          <CheckedListItem>
            Ask about the Schedule, Speakers & Attendees.
          </CheckedListItem>
          <CheckedListItem>
            Discover secret unofficial side events!
          </CheckedListItem>
          <CheckedListItem>
            Try asking for interesting facts about web summit.
          </CheckedListItem>
        </CheckedList>
        <div className="mb-4">
          <Button
            className="pr-6 bg-wa-primary hover:bg-wa-primary-hover"
            size="lg"
            asChild
          >
            <a href={websummitLink} target="_blank">
              Give it a try
              <div
                className="w-8 h-8 bg-center bg-no-repeat ml-3"
                style={{
                  backgroundImage: `url(${whatsapp})`,
                  backgroundSize: '100%',
                }}
              />
            </a>
          </Button>
        </div>
      </ImageCard>

      <div className="flex flex-col gap-12 mt-36 md:mt-36">
        <SetupProcessCard image={reporting} title="Let’s celebrate Web Summit!">
          <p>
            To celebrate Web Summit 2024, we’ve built a custom AI to help you
            get the most out of the event. You can use it through LiveChat or on
            WhatsApp.
          </p>
        </SetupProcessCard>
        <SetupProcessCard
          image={nurtureScript}
          title="What does this AI Do?"
          imagePosition="right"
        >
          <p>
            You can ask the AI anything about Web Summit. This AI has a custom
            Web Summit knowledge base, including the official schedule,
            unofficial side events, and information about speakers and
            attendees.
          </p>
        </SetupProcessCard>
        <SetupProcessCard image={website} title="What’s in It for Zeus?">
          <p>
            We’ve built this to show YOU the power of conversational AI. We want
            to sell you AI live chat for your website. We’ll build your AI a
            custom knowledge base to be able to help answer all your customers
            questions, with the passion and accuracy of your founder! We’ll also
            teach the AI a sales script to qualify your web traffic and email
            qualified leads to your team, helping you grow your business.
          </p>
        </SetupProcessCard>
      </div>

      <SectionHeader>How it Works</SectionHeader>
      <HowItWorksList
        items={[
          {
            icon: howItWorks1,
            title:
              'Adding a WhatsApp Button to your website increases the number of people who will get in contact with you.',
          },
          {
            icon: howItWorks2,
            title:
              'Powering the communication with conversational AI means instant responses 24/7 in multiple languages' +
              ' without increased staff costs.',
          },
          {
            icon: howItWorks3,
            title:
              'The AI will pre-qualify and nurture leads, escalating the ripe leads to your human team for progression.' +
              ' Efficiently scaling sales to increase your profit.',
          },
        ]}
      />
      <div className="flex flex-col md:flex-row pb-12">
        <div className="basis-1/2 md:pr-[136px]">
          <SideHeader contentPosition="right">Benefits</SideHeader>
        </div>
        <div className="basis-1/2 flex flex-col gap-10 text-of-gray-200 leading-8">
          <div>
            <H4>Appointment Setting</H4>
            <p>
              Our AI-powered WhatsApp tools automate lead pre-qualification,
              engaging prospects with targeted questions to assess their needs.
              This allows businesses to quickly identify high-quality leads and
              seamlessly book appointments, saving time and increasing
              conversions.
            </p>
          </div>
          <div>
            <H4>Renewals</H4>
            <p>
              Retaining existing clients is often more valuable than acquiring
              new ones, and our tools are designed to help businesses capitalize
              on their client database. Through personalized WhatsApp
              conversations, businesses can engage clients about upcoming
              renewals, offering timely reminders and tailored incentives to
              encourage continued service.
            </p>
          </div>
          <div>
            <H4>Abandoned Applications</H4>
            <p>
              Our WhatsApp campaign feature enables businesses to re-engage
              prospects who abandoned applications with personalized follow-up
              messages. This strategy reignites interest and converts lost leads
              into new business, driving higher conversion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
