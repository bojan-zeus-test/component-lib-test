import { useMemo, useEffect } from 'react';
import { UsageFeesState } from './usage-fees';

// Constants for unit pricing and conversion
const CHAT_UNIT_PRICE = 8.9;
const WHATSAPP_UNIT_PRICE = 4.5;
const CONVERSION_RATE = 0.0155;

export function useUsageFeesAccordion(
  value: UsageFeesState,
  onChange: (updated: UsageFeesState) => void
) {
  const estimatedChats = useMemo(
    () => Math.round(value.monthlyTraffic * CONVERSION_RATE),
    [value.monthlyTraffic]
  );
  const chatBlocks = useMemo(
    () => Math.ceil(estimatedChats / 100),
    [estimatedChats]
  );
  const chatMonthly = useMemo(() => chatBlocks * CHAT_UNIT_PRICE, [chatBlocks]);

  const whatsappBlocks = useMemo(
    () => Math.ceil(value.whatsappConversations / 100),
    [value.whatsappConversations]
  );
  const whatsappMonthly = useMemo(
    () => whatsappBlocks * WHATSAPP_UNIT_PRICE,
    [whatsappBlocks]
  );

  const totalMonthly = useMemo(
    () => chatMonthly + whatsappMonthly,
    [chatMonthly, whatsappMonthly]
  );

  useEffect(() => {
    if (
      value.estimatedChats !== estimatedChats ||
      value.chatMonthly !== chatMonthly ||
      value.whatsappMonthly !== whatsappMonthly ||
      value.totalMonthly !== totalMonthly
    ) {
      onChange({
        ...value,
        estimatedChats,
        chatMonthly,
        whatsappMonthly,
        totalMonthly,
      });
    }
  }, [estimatedChats, chatMonthly, whatsappMonthly, totalMonthly]);

  const trafficSlider = {
    label: 'Monthly Website Traffic',
    value: value.monthlyTraffic,
    onChange: (monthlyTraffic: number) =>
      onChange({ ...value, monthlyTraffic }),
    min: 0,
    max: 1_000_000,
    step: 1000,
    unitSize: 100,
    unitPrice: CHAT_UNIT_PRICE,
  };

  const whatsappSlider = {
    label: 'Monthly WhatsApp Conversations',
    value: value.whatsappConversations,
    onChange: (whatsappConversations: number) =>
      onChange({ ...value, whatsappConversations }),
    min: 0,
    max: 100_000,
    step: 1000,
    unitSize: 100,
    unitPrice: WHATSAPP_UNIT_PRICE,
  };

  return {
    trafficSlider,
    whatsappSlider,
    estimatedChats,
    chatBlocks,
    chatMonthly,
    whatsappBlocks,
    whatsappMonthly,
    totalMonthly,
  };
}
