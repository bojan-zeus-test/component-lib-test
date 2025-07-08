import { ImageCard } from '@/components/ui/image-card';
import { H1 } from '@/components/ui/typography';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { HowItWorksList } from '@/components/ui/how-it-works-list';
import * as React from 'react';
import genesisAi from '@/assets/genesis-ai.svg';
import howItWorks1 from '@/assets/genesis-ai/how-it-works-1.svg';
import howItWorks2 from '@/assets/genesis-ai/how-it-works-2.svg';
import howItWorks3 from '@/assets/genesis-ai/how-it-works-3.svg';
import { GenesisAiFeatures } from '@/components/routes/genesis-ai/genesis-ai-features';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import { DemoApolloLink } from '@/components/ui/demo-apollo-link';

export const GenesisAiPage: React.FC = () => {
  return (
    <>
      <ImageCard image={genesisAi} imagePosition="right">
        <H1 className="md:mb-4">Genesis AI</H1>
        <h3 className="text-xl text-of-gray-100 text-[21px] leading-[28px] mb-8 md:mb-16">
          <span className="text-gradient-dark bg-clip-text text-transparent">
            Future proof your business with bespoke AI innovation and
            implementation advisory
          </span>
        </h3>
        <CheckedList>
          <CheckedListItem>
            Utilize AI and WhatsApp to re-engage historic customers, improving
            loyalty and return rates.
          </CheckedListItem>
          <CheckedListItem>
            Custom LLM creation in tailor-made development environments.
          </CheckedListItem>
          <CheckedListItem>
            Process engineering to inject AI with custom requirements creation
            and compliance guard rail implementation.
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
              'Discovery call to understand the 80:20 opportunities for AI implementation within your business.',
          },
          {
            icon: howItWorks2,
            title:
              'Proposal creation and strategy day presentation - on site meeting with your senior management team ' +
              'to present how AI can be implemented in your business.',
          },
          {
            icon: howItWorks3,
            title:
              "We'll create a custom LLM to meet your conversational AI needs that includes any required compliance" +
              ' guardrails.',
          },
        ]}
      />
      <SectionHeader>Features / Use cases</SectionHeader>
      <GenesisAiFeatures />
      <div className="pb-12 flex md:justify-center">
        <Button size="lg" variant={'outline'} asChild>
          <DemoApolloLink>Book your discovery call now</DemoApolloLink>
        </Button>
      </div>
    </>
  );
};
