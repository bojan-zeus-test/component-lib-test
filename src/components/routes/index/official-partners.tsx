import { SectionHeader } from "@/components/ui/section-header";
import { Layout } from '@/components/ui/layout';
import * as React from "react";
import { FC } from "react";

export const OfficialPartners = () => {
  const partners = [
    { name: 'Meta', emoji: '📘' },
    { name: 'OpenAI', emoji: '🤖' },
    { name: 'WhatsApp', emoji: '💚' },
    { name: 'AWS', emoji: '☁️' },
  ];

  return (
    <Layout className="bg-[#031144] pt-0 pb-5 md:pt-0 md:pb-10">
      <SectionHeader className="text-white pt-6 mb-6 md:pt-14">Official Partners</SectionHeader>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        {partners.map((partner, index) => (
          <PartnerItem key={index} name={partner.name} emoji={partner.emoji} />
        ))}
      </ul>
    </Layout>
  )
}

interface PartnerItemProps {
  name: string;
  emoji: string;
}

const PartnerItem: FC<PartnerItemProps> = ({ name, emoji }) => {
  return (
    <li className="flex items-center justify-center flex-col">
      <div className="text-6xl mb-2">{emoji}</div>
      <div className="text-white text-sm">{name}</div>
    </li>
  );
};