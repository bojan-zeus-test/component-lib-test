import React, { useState } from 'react';
import {
  PlatformFeesAccordion,
  PlatformFeesState,
} from './PlatformFees/platform-fees';
import {
  AccordionFees,
  TotalCalculator,
} from './hidden-pricing-total-calculator';
import { UsageFeesAccordion, UsageFeesState } from './UsageFees/usage-fees';
import {
  ServiceFeesAccordion,
  ServiceFeesState,
} from './ServiceFees/service-fees';
import { DetailedPricing } from './DetailedPricing/DetailedPricing';

function HiddenPricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  );
  const [platformFees, setPlatformFees] = useState<PlatformFeesState>({
    selectedItems: [],
    knowledgeSnippets: 0,
    knowledgeMonthly: 0,
    knowledgeSetup: 0,
    flowStages: 0,
    flowSetup: 0,
    totalMonthly: 0,
  });

  const [usageFees, setUsageFees] = useState<UsageFeesState>({
    monthlyTraffic: 0,
    estimatedChats: 0,
    chatMonthly: 0,
    whatsappConversations: 0,
    whatsappMonthly: 0,
    totalMonthly: 0,
    setup: 0,
  });

  const [serviceFees, setServiceFees] = useState<ServiceFeesState>({
    supportHours: 0,
    supportMonthly: 0,
    supportLevel: 'Email Support',
    apiIntegrationDays: 0,
    apiMonthly: 0,
    apiLevel: 'No API',
    customDevDays: 0,
    devMonthly: 0,
    totalMonthly: 0,
    setup: 0,
  });

  // const [mcpFees, setMcpFees] = useState<MCPFeesState>({
  //   selectedItems: [],
  //   totalMonthly: 0,
  //   setup: 0,
  // });

  const feeBreakdown: AccordionFees = {
    platform: platformFees,
    usage: usageFees,
    service: serviceFees,
    mcp: { selectedItems: [], totalMonthly: 0, setup: 0 },
  };

  return (
    <div className="min-h-screen my-2">
      <div className="max-w-[90rem]">
        <div className="flex gap-8 items-start">
          <div className="flex-1 pr-4 space-y-8">
            <PlatformFeesAccordion
              value={platformFees}
              onChange={setPlatformFees}
            />
            <UsageFeesAccordion value={usageFees} onChange={setUsageFees} />
            <ServiceFeesAccordion
              value={serviceFees}
              onChange={setServiceFees}
            />
            {/*hidden for now*/}
            {/* <MCPSection value={mcpFees} onChange={setMcpFees} /> */}
            <DetailedPricing fees={feeBreakdown} />
          </div>
          <div className="flex-shrink-0 sticky top-20">
            <TotalCalculator
              billingCycle={billingCycle}
              onBillingCycleChange={setBillingCycle}
              fees={feeBreakdown}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiddenPricing;
