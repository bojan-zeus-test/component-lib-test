import React, { useState } from 'react';
import { AccordionFees } from '../hidden-pricing-total-calculator';
import { useDetailedPricingCalculations } from './useDetailedPricing';

interface DetailedPricingProps {
  fees: AccordionFees;
}

export function DetailedPricing({ fees }: DetailedPricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(
    'monthly'
  );

  const calculations = useDetailedPricingCalculations(fees, billingCycle);
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-purple-900">Quotation</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              billingCycle === 'annual'
                ? 'bg-purple-100 text-purple-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Annual (-12%)
          </button>
        </div>
      </div>
      {billingCycle === 'annual' && (
        <div className="mb-6 bg-green-50 p-4 rounded-lg">
          <div className="flex justify-between items-center text-green-800">
            <div>
              <p className="font-semibold">Annual Billing Savings</p>
              <p className="text-sm mt-1">Save 12% on all recurring costs</p>
            </div>
            <div className="text-right">
              <p className="font-bold">
                £
                {Math.round(
                  calculations.totals.annualDiscount
                ).toLocaleString()}{' '}
                saved
              </p>
              <p className="text-sm mt-1">
                £
                {Math.round(
                  calculations.totals.annualWithoutDiscount
                ).toLocaleString()}{' '}
                → £{Math.round(calculations.totals.annual).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-8">
        {/* One-time Setup Fees */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            One-time Setup Fees
          </h3>
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {calculations.setup.flowStages > 0 && (
                <tr>
                  <td className="py-3">
                    Flow Configuration ({calculations.selectedFlows.length * 3}{' '}
                    stages)
                  </td>
                  <td className="py-3 text-right">
                    £{calculations.setup.flowStages.toLocaleString()}
                  </td>
                </tr>
              )}
              {fees.platform.flowStages > 0 && (
                <tr>
                  <td className="py-3">
                    Custom Flow Stages {fees.platform.flowStages}
                  </td>
                  <td className="py-3 text-right">
                    £{fees.platform.flowSetup.toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.setup.knowledgeBase > 0 && (
                <tr>
                  <td className="py-3">
                    Knowledge Base Setup (
                    {fees.platform.knowledgeSnippets.toLocaleString()} snippets)
                  </td>
                  <td className="py-3 text-right">
                    £{calculations.setup.knowledgeBase.toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.setup.whatsAppSetup > 0 && (
                <tr>
                  <td className="py-3">WhatsApp Configuration</td>
                  <td className="py-3 text-right">
                    £{calculations.setup.whatsAppSetup.toLocaleString()}
                  </td>
                </tr>
              )}
              <tr className="font-semibold">
                <td className="py-3">Total Setup Fee</td>
                <td className="py-3 text-right">
                  £{calculations.totals.setup.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Recurring Fees */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {billingCycle === 'annual' ? 'Annual' : 'Monthly'} Recurring Fees
          </h3>
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              {/* Platform Fees */}
              {calculations.selectedFlows.length > 0 && (
                <tr>
                  <td className="py-3">
                    Conversation Flows
                    <br />
                    <span className="text-sm text-gray-500">
                      {calculations.selectedFlows.join(', ')} × £149
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.platform.flows *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.platform.flows.toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.selectedChannels.length > 0 && (
                <tr>
                  <td className="py-3">
                    Communication Channels
                    <br />
                    <span className="text-sm text-gray-500">
                      {calculations.selectedChannels.join(', ')}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.platform.channels *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.platform.channels.toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.platform.knowledge > 0 && (
                <tr>
                  <td className="py-3">
                    Knowledge Base
                    <br />
                    <span className="text-sm text-gray-500">
                      {Math.ceil(fees.platform.knowledgeSnippets / 50)} blocks ×
                      £19
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.platform.knowledge *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.platform.knowledge.toLocaleString()}
                  </td>
                </tr>
              )}
              {/* MCP Tools */}
              {calculations.selectedTools.length > 0 && (
                <tr>
                  <td className="py-3">
                    Tools
                    <br />
                    <span className="text-sm text-gray-500">
                      {calculations.selectedTools.join(', ')}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.platform.tools *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.platform.tools.toLocaleString()}
                  </td>
                </tr>
              )}
              {/* MCP Data Sources */}
              {calculations.selectedDataSources.length > 0 && (
                <tr>
                  <td className="py-3">
                    Data Sources
                    <br />
                    <span className="text-sm text-gray-500">
                      {calculations.selectedDataSources.join(', ')}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.platform.dataSources *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.platform.dataSources.toLocaleString()}
                  </td>
                </tr>
              )}
              {/* Usage Fees */}
              {calculations.usage.llm > 0 && (
                <tr>
                  <td className="py-3">
                    LLM Usage
                    <br />
                    <span className="text-sm text-gray-500">
                      {Math.round(
                        fees.usage.monthlyTraffic * 0.0155
                      ).toLocaleString()}{' '}
                      estimated chats
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.usage.llm * 12 * calculations.discount
                        ).toLocaleString()
                      : Math.round(calculations.usage.llm).toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.usage.whatsapp > 0 && (
                <tr>
                  <td className="py-3">
                    WhatsApp Usage
                    <br />
                    <span className="text-sm text-gray-500">
                      {fees.usage.whatsappConversations.toLocaleString()}{' '}
                      conversations
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.usage.whatsapp *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : Math.round(
                          calculations.usage.whatsapp
                        ).toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.service.devIntegration > 0 && (
                <tr>
                  <td className="py-3">
                    Custom development
                    <br />
                    <span className="text-sm text-gray-500">
                      {fees.service.customDevDays} development days at £680/day
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.service.devIntegration *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.service.devIntegration.toLocaleString()}
                  </td>
                </tr>
              )}
              {calculations.service.apiIntegration > 0 && (
                <tr>
                  <td className="py-3">
                    Api integration
                    <br />
                    <span className="text-sm text-gray-500">
                      {fees.service.apiIntegrationDays} integration days at
                      £680/day
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.service.apiIntegration *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.service.apiIntegration.toLocaleString()}
                  </td>
                </tr>
              )}
              {/* Service Fees */}
              {calculations.service.support > 0 && (
                <tr>
                  <td className="py-3">
                    Support Hours
                    <br />
                    <span className="text-sm text-gray-500">
                      {fees.service.supportHours} hours at £59/hour
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    £
                    {calculations.isAnnual
                      ? Math.round(
                          calculations.service.support *
                            12 *
                            calculations.discount
                        ).toLocaleString()
                      : calculations.service.support.toLocaleString()}
                  </td>
                </tr>
              )}
              {/* Total */}
              <tr className="font-semibold text-lg">
                <td className="py-3">
                  Total {calculations.isAnnual ? 'Annual' : 'Monthly'} Fee
                </td>
                <td className="py-3 text-right">
                  £
                  {Math.round(
                    calculations.isAnnual
                      ? calculations.totals.annual
                      : calculations.totals.monthly
                  ).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* First Payment Summary */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            First Payment Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Setup Fee</span>
              <span>£{calculations.totals.setup.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>First {calculations.isAnnual ? 'Year' : 'Month'}</span>
              <span>
                £
                {Math.round(
                  calculations.isAnnual
                    ? calculations.totals.annual
                    : calculations.totals.monthly
                ).toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t">
              <span>Total First Payment</span>
              <span>
                £
                {Math.round(
                  calculations.totals.setup +
                    (calculations.isAnnual
                      ? calculations.totals.annual
                      : calculations.totals.monthly)
                ).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
