import React from 'react';
import { useMCPFeesAccordion } from './useMCPFees';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface MCPFeesState {
  selectedItems: string[];
  totalMonthly: number;
  setup: number;
}

export function MCPSection({
  value,
  onChange,
}: {
  value: MCPFeesState;
  onChange: (next: MCPFeesState) => void;
}) {
  const { tools, dataSources, toggleItem } = useMCPFeesAccordion(
    value,
    onChange
  );

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="mcp"
      className="bg-orange-50/50"
    >
      <AccordionItem value="mcp">
        <AccordionTrigger className="text-3xl font-bold text-orange-900">
          Model Context Protocol (MCP)
        </AccordionTrigger>
        <AccordionContent className="space-y-8 p-8">
          <div className="mb-6">
            <p className="text-gray-600">
              MCP is the API layer for LLMs, allowing the AI to retrieve data in
              real-time and execute tasks via integrated tools. It connects to
              both dynamic data sources (e.g. interest rates, stock levels) and
              third-party tools (e.g. LiveDiary, CRM updates) to empower Zeus AI
              with current information and actionable capabilities.
            </p>
          </div>
          <div className="space-y-8">
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Tools</h4>
              <div className="space-y-3">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => toggleItem(tool.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                      value.selectedItems.includes(tool.id)
                        ? 'bg-orange-100 hover:bg-orange-200'
                        : 'bg-orange-50 hover:bg-orange-100'
                    }`}
                  >
                    <span className="text-gray-900">{tool.name}</span>
                    <span className="text-purple-900 font-semibold">
                      £{tool.price}/month
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        value.selectedItems.includes(tool.id)
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-orange-300'
                      }`}
                    >
                      {value.selectedItems.includes(tool.id) && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">
                Dynamic Data Sources
              </h4>
              <div className="space-y-3">
                {dataSources.map((source) => (
                  <button
                    key={source.id}
                    onClick={() => toggleItem(source.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors ${
                      value.selectedItems.includes(source.id)
                        ? 'bg-orange-100 hover:bg-orange-200'
                        : 'bg-orange-50 hover:bg-orange-100'
                    }`}
                  >
                    <span className="text-gray-900">{source.name}</span>
                    <span className="text-purple-900 font-semibold">
                      £{source.price}/month
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        value.selectedItems.includes(source.id)
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-orange-300'
                      }`}
                    >
                      {value.selectedItems.includes(source.id) && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
