import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { SliderCalculator } from '../hidden-pricing-slider-calculator';
import { useUsageFeesAccordion } from './useUsageFees';

export interface UsageFeesState {
  monthlyTraffic: number;
  estimatedChats: number;
  chatMonthly: number;
  whatsappConversations: number;
  whatsappMonthly: number;
  totalMonthly: number;
  setup: number;
}

export function UsageFeesAccordion({
  value,
  onChange,
}: {
  value: UsageFeesState;
  onChange: (updated: UsageFeesState) => void;
}) {
  const {
    trafficSlider,
    whatsappSlider,
    estimatedChats,
    chatBlocks,
    chatMonthly,
    whatsappBlocks,
    whatsappMonthly,
  } = useUsageFeesAccordion(value, onChange);

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="usage"
      className="bg-blue-50/50"
    >
      <AccordionItem value="usage">
        <AccordionTrigger className="text-3xl font-bold text-purple-900">
          Usage Fees
        </AccordionTrigger>
        <AccordionContent className="space-y-8 p-8">
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              LLM Usage
            </h3>
            <p className="text-gray-600 mb-6">
              LLM Usage is charged at £8.90 per 100 chats. Based on our data,
              approximately 1.55% of website visitors engage in a chat
              conversation.
            </p>
            <SliderCalculator {...trafficSlider} />
            <div className="flex justify-between mt-2 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-600">
                  Monthly Traffic: {value.monthlyTraffic.toLocaleString()}
                </span>
                <span className="text-gray-600">
                  Estimated Chats: {estimatedChats.toLocaleString()} (
                  {chatBlocks} blocks of 100)
                </span>
              </div>
              <span className="font-semibold text-purple-900">
                £{chatMonthly.toLocaleString()}/month
              </span>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              WhatsApp Usage
            </h3>
            <p className="text-gray-600 mb-6">
              WhatsApp conversations are charged at £4.50 per 100 conversations.
              A conversation includes unlimited messages within 24 hours to the
              same recipient.
            </p>
            <SliderCalculator {...whatsappSlider} />
            <div className="flex justify-between mt-2 text-sm">
              <div className="flex flex-col">
                <span className="text-gray-600">
                  Monthly Converstaions:{' '}
                  {value.whatsappConversations.toLocaleString()}
                </span>
                <span className="text-gray-600">
                  Blocks: {whatsappBlocks.toLocaleString()} (100 conversations
                  each)
                </span>
              </div>
              <span className="font-semibold text-purple-900">
                £{whatsappMonthly.toLocaleString()}/month
              </span>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
