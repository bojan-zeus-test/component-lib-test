import { useEffect, useMemo } from 'react';
import { PlatformFeesState } from './platform-fees';

export function usePlatformFeesAccordion(
  value: PlatformFeesState,
  onChange: (updated: PlatformFeesState) => void
) {
  const columns = useMemo(
    () => [
      {
        name: 'Website Widget',
        cost: 99,
        description: 'Embeds a live chat popup on your site.',
      },
      {
        name: 'WhatsApp',
        cost: 420,
        description: 'Enables WhatsApp chat integration.',
      },
    ],
    []
  );

  const tier = useMemo(
    () =>
      value.knowledgeSnippets === 0
        ? 'Free'
        : value.knowledgeSnippets <= 500
        ? 'Premium'
        : 'Enterprise',
    [value.knowledgeSnippets]
  );

  const tierFeatures: Record<string, string[]> = {
    Free: [
      'Information the LLM has been trained on',
      'General knowledge and common facts',
      'No company-specific information',
      'Basic response capabilities',
    ],
    Premium: [
      'All Free tier features',
      'Company-specific information',
      'Product details and specifications',
      'Custom FAQs and support articles',
      'Pricing and service information',
    ],
    Enterprise: [
      'All Premium tier features',
      'Advanced data integration',
      'Complex decision trees',
      'Custom knowledge domains',
      'Priority knowledge base updates',
    ],
  };

  const blocksOf50 = Math.ceil(value.knowledgeSnippets / 50);
  const blocksOf100 = Math.ceil(value.knowledgeSnippets / 100);
  const setupHours = blocksOf100 * 4;
  const setupCost = setupHours * 59;

  const toggleItem = (item: string) => {
    const isSelected = value.selectedItems.includes(item);
    const updated = isSelected
      ? value.selectedItems.filter((i) => i !== item)
      : [...value.selectedItems, item];
    if (
      updated.length !== value.selectedItems.length ||
      !updated.every((v, i) => v === value.selectedItems[i])
    ) {
      onChange({ ...value, selectedItems: updated });
    }
  };
  const isSelected = (item: string) => value.selectedItems.includes(item);

  useEffect(() => {
    const staticItemCost = value.selectedItems.reduce((sum, item) => {
      if (item === 'Sales' || item === 'Support' || item === 'Nurture')
        return sum + 149;
      if (item === 'Website Widget') return sum + 99;
      if (item === 'WhatsApp') return sum + 420;
      return sum;
    }, 0);

    const newTotal = staticItemCost + value.knowledgeMonthly;
    if (newTotal !== value.totalMonthly) {
      onChange({ ...value, totalMonthly: newTotal });
    }
  }, [value.selectedItems, value.knowledgeMonthly, value.flowSetup]);

  const flowSlider = {
    label: 'Number of Flow Stages',
    value: value.flowStages,
    onChange: (flowStages: number) => onChange({ ...value, flowStages }),
    min: 0,
    max: 150,
    unitPrice: 59,
    onCalculated: (calc: { monthlyCost: number }) => {
      if (calc.monthlyCost !== value.flowSetup) {
        onChange({ ...value, flowSetup: calc.monthlyCost });
      }
    },
  };

  const knowledgeSlider = {
    label: 'How many knowledge snippets do you need?',
    value: value.knowledgeSnippets,
    onChange: (snippets: number) =>
      onChange({ ...value, knowledgeSnippets: snippets }),
    min: 0,
    max: 10000,
    unitSize: 50,
    unitPrice: 19,
    setupBlocksOf: 100,
    setupHoursPerBlock: 4,
    setupRate: 59,
    onCalculated: (calc: { monthlyCost: number; setupCost: number }) => {
      if (
        calc.monthlyCost !== value.knowledgeMonthly ||
        calc.setupCost !== value.knowledgeSetup
      ) {
        onChange({
          ...value,
          knowledgeMonthly: calc.monthlyCost,
          knowledgeSetup: calc.setupCost,
        });
      }
    },
  };

  return {
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
  };
}
