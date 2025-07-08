import { useMemo } from 'react';
import { AccordionFees } from '../hidden-pricing-total-calculator';

export function useDetailedPricingCalculations(
  fees: AccordionFees,
  billingCycle: 'monthly' | 'annual'
) {
  const discount = 0.88;
  const isAnnual = billingCycle === 'annual';

  return useMemo(() => {
    // Calculations
    const selectedFlows = fees.platform.selectedItems.filter((item) =>
      ['Sales', 'Support', 'Nurture'].includes(item)
    );
    const selectedChannels = fees.platform.selectedItems.filter((item) =>
      ['Website Widget', 'WhatsApp'].includes(item)
    );
    const selectedTools = fees.mcp.selectedItems.filter((item) =>
      ['Payment', 'Calendar', 'PDF'].includes(item)
    );
    const selectedDataSources = fees.mcp.selectedItems.filter((item) =>
      ['Rates', 'Inventory', 'CRM'].includes(item)
    );

    // Platform Fees
    const flows = selectedFlows.length * 149;
    const channels = selectedChannels.reduce(
      (sum, channel) => sum + (channel === 'Website Widget' ? 99 : 420),
      0
    );
    const tools = selectedTools.reduce((sum, id) => {
      if (['Payment', 'Calendar'].includes(id)) return sum + 29;
      if (id === 'PDF') return sum + 19;
      return sum;
    }, 0);
    const dataSources = selectedDataSources.reduce((sum, id) => {
      if (id === 'Rates') return sum + 49;
      if (['Inventory', 'CRM'].includes(id)) return sum + 39;
      return sum;
    }, 0);
    const knowledge = Math.ceil(fees.platform.knowledgeSnippets / 50) * 19;

    // Usage
    const llm =
      Math.ceil(Math.round(fees.usage.monthlyTraffic * 0.0155) / 100) * 8.9;
    const whatsapp = Math.ceil(fees.usage.whatsappConversations / 100) * 4.5;

    // Service
    const support = fees.service.supportHours * 59;
    const devIntegration = fees.service.customDevDays * 680;
    const apiIntegration = fees.service.apiIntegrationDays * 680;

    // Setup
    const flowStages = selectedFlows.length * 3 * 59;
    const customFlowStages = fees.platform.flowSetup;
    const knowledgeBase =
      Math.ceil(fees.platform.knowledgeSnippets / 100) * (4 * 59);
    const whatsAppSetup = selectedChannels.includes('WhatsApp') ? 708 : 0;

    // Totals
    const platformTotal = flows + channels + tools + dataSources + knowledge;
    const usageTotal = llm + whatsapp;
    const serviceTotal = support + devIntegration + apiIntegration;
    const setupTotal =
      flowStages + knowledgeBase + whatsAppSetup + customFlowStages;

    const monthlyTotal = platformTotal + usageTotal + serviceTotal;
    const annualTotal = Math.round(monthlyTotal * 12 * discount);

    const annualWithoutDiscount = monthlyTotal * 12;
    const annualDiscount = monthlyTotal * 12 - annualTotal;

    return {
      selectedFlows,
      selectedChannels,
      selectedTools,
      selectedDataSources,
      setup: { flowStages, knowledgeBase, whatsAppSetup, customFlowStages },
      platform: { flows, channels, tools, dataSources, knowledge },
      usage: { llm, whatsapp },
      service: { support, devIntegration, apiIntegration },
      totals: {
        platform: platformTotal,
        usage: usageTotal,
        service: serviceTotal,
        setup: setupTotal,
        monthly: monthlyTotal,
        annual: annualTotal,
        annualWithoutDiscount: annualWithoutDiscount,
        annualDiscount: annualDiscount,
      },
      discount,
      isAnnual,
    };
  }, [fees, billingCycle]);
}
