import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { SliderCalculator } from '../hidden-pricing-slider-calculator';
import { FlowDiagram } from './flow-diagram';
import TierFeatures from '../hidden-pricing-tier-features';
import { usePlatformFeesAccordion } from './usePlatformFees';
import { Database } from 'lucide-react';

export interface PlatformFeesState {
  selectedItems: string[];
  knowledgeSnippets: number;
  knowledgeMonthly: number;
  knowledgeSetup: number;
  flowStages: number;
  flowSetup: number;
  totalMonthly: number;
}

export function PlatformFeesAccordion({
  value,
  onChange,
}: {
  value: PlatformFeesState;
  onChange: (updated: PlatformFeesState) => void;
}) {
  const {
    columns,
    tier,
    tierFeatures,
    blocksOf50,
    blocksOf100,
    setupHours,
    setupCost,
    toggleItem,
    isSelected,
    flowSlider,
    knowledgeSlider,
  } = usePlatformFeesAccordion(value, onChange);

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="platform"
      className="bg-purple-50/50"
    >
      <AccordionItem value="platform">
        <AccordionTrigger className="text-3xl font-bold text-purple-900">
          Platform Fees
        </AccordionTrigger>
        <AccordionContent className="space-y-8 p-8">
          {/* Conversation Flows */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              Conversation Flow
            </h3>
            <p className="text-gray-600 mb-6">
              A Conversation Flow is a structured script that guides the Zeus
              through a complete dialogue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {['Sales', 'Support', 'Nurture'].map((item) => (
                <div
                  key={item}
                  onClick={() => toggleItem(item)}
                  className={`bg-purple-50 rounded-lg p-4 cursor-pointer hover:bg-purple-100 transition-colors ${
                    isSelected(item) ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <Checkbox
                      checked={isSelected(item)}
                      onCheckedChange={() => toggleItem(item)}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <h4 className="font-bold text-gray-900">{item}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {item === 'Sales'
                          ? 'Identifies viable leads.'
                          : item === 'Support'
                          ? 'Resolves complaints.'
                          : 'Handles non-sales-ready users.'}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-purple-900">
                    £149/month
                  </div>
                </div>
              ))}
            </div>

            {value.selectedItems.length > 0 && (
              <FlowDiagram selectedFlows={value.selectedItems} />
            )}

            <div className="mt-8 bg-purple-50 rounded-lg p-6">
              {/*Custom Flows Slider */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Custom Conversation Flow Setup
              </h3>
              <SliderCalculator {...flowSlider} />
              {value.flowStages > 0 && (
                <div className="text-sm flex flex-row justify-between text-gray-600 mt-2 mb-2">
                  <p>{value.flowStages} stages selected </p>
                  <strong>£{value.flowSetup.toLocaleString()}</strong>
                </div>
              )}
              <div className="text-sm text-gray-600">
                <p className="mb-2">
                  A flow stage is a unit within the conversation flow where the
                  AI has been trained to take a specific action:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>
                    Request information (e.g., "What is your phone number?")
                  </li>
                  <li>Make decisions (e.g., route between sales or support)</li>
                  <li>Process user input and determine next steps</li>
                </ul>
                <p className="mt-2">
                  Each flow stage costs £59 to set up and train.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-lg shadow-sm p-6">
            {/* Knowledge Base Slider */}
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Static Knowledge Base
              </h3>
            </div>
            <div className="text-gray-600">
              <p className="mb-4">
                A knowledge snippet is a short, factual block of information
                that the AI references directly to deliver accurate, up-to-date
                responses e.g. "Our official registered address is 123 High
                Street, London W1, and our company name is Acme Corp (Registered
                No. 123456)."
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-bold text-purple-900">
                  Knowledge Base Pricing
                </span>
                <span className="font-bold text-purple-900">
                  £19/month per block of 50 snippets
                </span>
              </div>
            </div>
            <SliderCalculator {...knowledgeSlider} />
            <TierFeatures
              tier={tier}
              tierFeatures={tierFeatures}
              monthlyPrice={value.knowledgeMonthly}
            />
            <div className="bg-purple-50 rounded-lg p-4 my-2">
              <h4 className="font-semibold text-purple-900 mb-2">
                Knowledge Database Setup
              </h4>
              <div className="space-y-2">
                {value.knowledgeSnippets > 0 ? (
                  <>
                    <p className="text-sm text-purple-800">
                      {value.knowledgeSnippets} snippets ({blocksOf100} blocks
                      of 100)
                    </p>
                    <p className="text-sm text-purple-800">
                      {setupHours} hours of setup time (4 hours per 100
                      snippets)
                    </p>
                    <p className="font-bold text-purple-900">
                      Setup Fee: £{setupCost.toLocaleString()}
                    </p>
                  </>
                ) : (
                  <p className="text-sm text-purple-800">No setup required</p>
                )}
              </div>
            </div>
            {value.knowledgeSnippets > 0 ? (
              <p className="text-sm text-gray-600">
                Using {value.knowledgeSnippets} knowledge snippets ({blocksOf50}{' '}
                blocks of 50) at £19 per block per month.
              </p>
            ) : (
              <p className="text-sm text-gray-600">
                Using base LLM knowledge only.
              </p>
            )}
          </section>

          {/* Communication Channels */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="w-16 p-4"></th>
                    <th className="text-left p-4">Communication Channels</th>
                    <th className="text-right p-4">Monthly Fee</th>
                    <th className="text-left p-4">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {columns.map((channel) => (
                    <tr
                      key={channel.name}
                      onClick={() => toggleItem(channel.name)}
                      className="hover:bg-purple-50 transition-colors cursor-pointer"
                    >
                      <td className="p-4 text-center">
                        <Checkbox
                          checked={isSelected(channel.name)}
                          onCheckedChange={() => toggleItem(channel.name)}
                        />
                      </td>
                      <td className="p-4 font-bold">{channel.name}</td>
                      <td className="p-4 text-right">£{channel.cost}</td>
                      <td className="p-4 text-sm">{channel.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
