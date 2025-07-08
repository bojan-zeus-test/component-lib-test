import { SectionHeader } from "@/components/ui/section-header";
import { Layout } from '@/components/root/layout';
import * as React from "react";
import meta from "@/assets/official-partners/meta.png";
import openAI from "@/assets/official-partners/openAI.png";
import whatsApp from "@/assets/official-partners/whatsapp.png";
import aws from "@/assets/official-partners/aws.png";
import { FC } from "react";

export const OfficialPartners = () => {
  return (
    <Layout className="bg-[#031144] pt-0 pb-5 md:pt-0 md:pb-10">
      <SectionHeader className="text-white pt-6 mb-6 md:pt-14">Official Partners</SectionHeader>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
        <PartnerItem image={meta} alt="meta"/>
        <PartnerItem image={openAI} alt="openAI"/>
        <PartnerItem image={whatsApp} alt="WhatsApp"/>
        <PartnerItem image={aws} alt="Aws"/>
      </ul>
    </Layout>
  )
}

interface FeaturedItemProps {
  image: string;
  alt: string;
}

const PartnerItem: FC<FeaturedItemProps> = ({image, alt}) => {
  return (
    <li className="flex items-center justify-center w">
      <img src={image} alt={alt} className="scale-75 lg:scale-100"/>
    </li>
  );
};
