import { H1, H4 } from '@/components/ui/typography';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { Button } from '@/components/ui/button';
import { ImageCard } from '@/components/ui/image-card';
import * as React from 'react';
import { HowItWorksList } from '@/components/ui/how-it-works-list';
import howItWorks1 from '@/assets/sales-talk-ai/how-it-works-1.svg';
import howItWorks2 from '@/assets/sales-talk-ai/how-it-works-2.svg';
import howItWorks3 from '@/assets/sales-talk-ai/how-it-works-3.svg';
import estateAgents from '@/assets/industries/estate-agents.gif';
import { SectionHeader } from '@/components/ui/section-header';
import whatsapp from '@/assets/whatsapp-white.svg';
import { SideHeader } from '@/components/ui/side-header';

export const EstateAgentsPage = () => {
  const whatsappLink =
    'https://wa.me/447397744021?text=Hi%2C%20I%20need%20some%20property%20assistance%21';
  return (
    <div>
      <ImageCard
        image={estateAgents}
        imagePosition="right"
        imagePositionSmall="bottom"
        imageClassName="sm:max-w-[397px]
         rounded-t-[40px]
         shadow-[0px_-10px_50px_-20px] shadow-of-primary-100"
      >
        <H1 className="md:mb-4">AI Sales Agent Just for Estate Agents</H1>
        <h3 className="text-xl text-of-gray-100 text-[21px] leading-[28px] mb-8 md:mb-16">
          <span className="text-gradient-dark bg-clip-text text-transparent">
            Built by Salespeople for Salespeople
          </span>
        </h3>
        <CheckedList>
          <CheckedListItem>
            Instantly reply to vendors and landlords 24/7 to win more instructions
          </CheckedListItem>
          <CheckedListItem>
            Capture the attention of more potential clients—most estate agents only engage with 2% of their website visitors
          </CheckedListItem>
          <CheckedListItem>
            Transform your estate agency with AI-driven conversations designed for today’s digital-first world
          </CheckedListItem>
        </CheckedList>
        <div className="mb-4">
          <Button
            className="pr-6 bg-wa-primary hover:bg-wa-primary-hover"
            size="lg"
            asChild
          >
            <a href={whatsappLink} target="_blank">
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
      <SectionHeader>How it Works</SectionHeader>
      <HowItWorksList
        items={[
          {
            icon: howItWorks1,
            title:
              'Adding an embedded pop-up chat to your estate agency website makes it easier for potential clients to get in touch with you',
          },
          {
            icon: howItWorks2,
            title:
              'Leveraging conversational AI ensures instant, 24/7 responses in multiple languages, all without increasing staff costs'
          },
          {
            icon: howItWorks3,
            title:
              'The AI will pre-qualify and nurture leads, passing the most promising prospects to your team for follow-up. This approach streamlines your sales process, helping you efficiently scale and boost profits',
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
              Our AI-powered WhatsApp tools, along with embedded pop-up chat options, automate lead pre-qualification for estate agents. By engaging prospects with targeted questions about their property needs and preferences, these tools identify high-quality leads and seamlessly book appointments for valuations. This saves time, enhances efficiency, and boosts conversion rates.
            </p>
          </div>
          <div>
            <H4>Improved Client Engagement</H4>
            <p>
              AI-powered chats enhance client engagement by proactively reaching out to visitors browsing listings or considering services, offering instant assistance to address their needs and questions. This keeps prospects engaged and reduces the likelihood of them leaving the website without taking action.
            </p>
          </div>
          <div>
            <H4>Reduced Operational Costs</H4>
            <p>
              Automating repetitive tasks such as answering FAQs and scheduling appointments ensures instant contact with customers, providing them with immediate responses and support. This reduces the need for human staff to handle routine interactions, allowing them to focus on more complex tasks while cutting operational costs and improving overall efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
