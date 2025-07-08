import React from 'react';
import { PlatformFeesState } from './PlatformFees/platform-fees';
import { Calculator } from 'lucide-react';
import { UsageFeesState } from './UsageFees/usage-fees';
import { ServiceFeesState } from './ServiceFees/service-fees';
import { MCPFeesState } from './MCPFees/mcp-fees';
import { useTotalCalculation } from './useTotalCalculation';

export type AccordionFees = {
  platform: PlatformFeesState;
  usage: UsageFeesState;
  service: ServiceFeesState;
  mcp: MCPFeesState;
};

interface TotalCalculatorProps {
  billingCycle?: 'monthly' | 'annual';
  fees: AccordionFees;
  onBillingCycleChange?: (cycle: 'monthly' | 'annual') => void;
}

export function TotalCalculator({
  fees,
  billingCycle = 'monthly',
  onBillingCycleChange,
}: TotalCalculatorProps) {
  const isAnnual = billingCycle === 'annual';
  const calculations = useTotalCalculation(fees, billingCycle);

  return (
    <div className="bg-white mt-4 rounded-lg shadow-lg p-6 w-80">
      <div className="flex flex-col  justify-between mb-6">
        <div className="flex gap-3 mb-6">
          <Calculator className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-purple-900">
            Costs Summary
          </h3>
        </div>
        <div className="flex bg-gray-100 w-fit rounded-lg p-1">
          <button
            onClick={() => onBillingCycleChange?.('monthly')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              !isAnnual
                ? 'bg-white text-purple-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => onBillingCycleChange?.('annual')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isAnnual
                ? 'bg-white text-purple-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Annual
          </button>
        </div>
        <div className="pt-3 font-bold text-lg">
          <p>{isAnnual ? 'Annual' : 'Monthly'} Cost:</p>
          <p className="text-xl font-bold text-purple-900">
            £
            {Math.round(
              isAnnual ? calculations.annualTotal : calculations.monthlyTotal
            ).toLocaleString()}
            <span className="text-sm font-normal text-gray-600">
              /{isAnnual ? 'year' : 'month'}
            </span>
          </p>
        </div>
      </div>

      {isAnnual && (
        <div className="text-sm text-green-600 mt-1">
          Includes 12% annual discount
        </div>
      )}

      <div className="space-y-3 text-sm">
        <p>
          <strong>Platform Fees:</strong> £
          {calculations.platformMonthly.toLocaleString()}/mo
        </p>
        <ul className="list-disc pl-5 mb-1 text-gray-700">
          {fees.platform.selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {fees.mcp.selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>Usage Fees:</strong> £
          {calculations.usageMonthly.toLocaleString()}/mo
        </p>
        <p>
          <strong>Development Fees:</strong> £
          {calculations.developmentMonthly.toLocaleString()}/mo
        </p>
        <p>
          <strong>Service Fees:</strong> £
          {calculations.serviceMonthly.toLocaleString()}/mo
        </p>
      </div>
    </div>
  );
}
