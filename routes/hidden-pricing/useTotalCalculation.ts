// useGlobalTotalCalculator.ts
import { useMemo } from 'react';
import { AccordionFees } from './hidden-pricing-total-calculator';

export function useTotalCalculation(
  fees: AccordionFees,
  billingCycle: 'monthly' | 'annual'
) {
  const isAnnual = billingCycle === 'annual';
  const discountRate = 0.88;

  return useMemo(() => {
    const platformMonthly = fees.platform.totalMonthly + fees.mcp.totalMonthly;
    const platformSetup =
      fees.platform.knowledgeSetup + fees.platform.flowSetup;

    const usageMonthly = fees.usage.totalMonthly;
    const usageSetup = fees.usage.setup;

    const developmentMonthly =
      fees.service.devMonthly + fees.service.apiMonthly;

    const serviceMonthly = fees.service.supportMonthly;
    const serviceSetup = fees.service.setup;

    const monthlyTotal =
      platformMonthly + usageMonthly + serviceMonthly + developmentMonthly;
    const annualTotal = monthlyTotal * 12 * discountRate;
    const setupTotal = platformSetup + usageSetup + serviceSetup;
    const grandTotal = setupTotal + (isAnnual ? annualTotal : monthlyTotal);

    return {
      platformMonthly,
      usageMonthly,
      serviceMonthly,
      setupTotal,
      monthlyTotal,
      annualTotal,
      grandTotal,
      developmentMonthly,
    };
  }, [fees, billingCycle]);
}
