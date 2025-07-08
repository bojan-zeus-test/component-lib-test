import { useMemo, useEffect } from 'react';
import { MCPFeesState } from './mcp-fees';

// Static data for tools and data sources
const tools = [
  { id: 'Payment', name: 'Payment Gateways', price: 29 },
  { id: 'Calendar', name: 'Calendar Availability', price: 29 },
  { id: 'PDF', name: 'PDF Generation', price: 19 },
];
const dataSources = [
  { id: 'Rates', name: 'Live Interest/Finance/Trade Rates', price: 49 },
  { id: 'Inventory', name: 'Live Inventory and Stock Information', price: 39 },
  { id: 'CRM', name: 'Customer CRM Information', price: 39 },
];

export function useMCPFeesAccordion(
  value: MCPFeesState,
  onChange: (updated: MCPFeesState) => void
) {
  const selectedToolItems = useMemo(
    () => tools.filter((tool) => value.selectedItems.includes(tool.id)),
    [value.selectedItems]
  );
  const selectedDataItems = useMemo(
    () => dataSources.filter((src) => value.selectedItems.includes(src.id)),
    [value.selectedItems]
  );

  const totalMonthly = useMemo(
    () =>
      [...selectedToolItems, ...selectedDataItems].reduce(
        (sum, item) => sum + item.price,
        0
      ),
    [selectedToolItems, selectedDataItems]
  );

  useEffect(() => {
    if (value.totalMonthly !== totalMonthly) {
      onChange({ ...value, totalMonthly });
    }
  }, [totalMonthly]);

  const toggleItem = (id: string) => {
    const already = value.selectedItems.includes(id);
    const updated = already
      ? value.selectedItems.filter((item) => item !== id)
      : [...value.selectedItems, id];
    onChange({ ...value, selectedItems: updated });
  };

  const isSelected = (id: string) => value.selectedItems.includes(id);

  return {
    tools,
    dataSources,
    selectedToolItems,
    selectedDataItems,
    totalMonthly,
    toggleItem,
    isSelected,
  };
}
