import { Layout } from '@/components/root/layout';
import { SectionHeader } from "@/components/ui/section-header";
import { HowItWorksCard } from "@/components/ui/how-it-works/how-it-works-card";
import inboundPrequalificationGif from "@/assets/index/inbound-prequalification.gif";
import inboundPrequalification from '@/assets/index/inbound-prequalification.svg';
import leadManagement from '@/assets/index/lead-management.svg';
import outcomeOriented from '@/assets/index/outcome-oriented.svg';
import leadManagementGif from "@/assets/index/lead-management.gif";
import outcomeOrientedGif from "@/assets/index/outcome-oriented.gif";
import * as React from "react";

export const HowItWorks = () => {
  return (
    <Layout className="pb-5 pt-0 md:pt-0 md:pb-10">
      <SectionHeader className="pt-16 md:pt-20 mb-6 md:mb-20">
        How it works
      </SectionHeader>
      <div className="flex flex-col gap-16 mb-10">
        <HowItWorksCard
          gifPosition="right"
          gif={inboundPrequalificationGif}
          title="Inbound Pre-qualification"
          description="Our AI doesn’t just respond – it qualifies. Every inbound lead is pre-screened and nurtured,
           ensuring that only high-quality prospects reach your sales team, ready to convert.
           By leveraging advanced algorithms and natural language processing, our AI engages with potential customers
           in real time, asking relevant questions tailored to their specific needs and circumstances.
           This process not only filters out unqualified leads but also educates prospects about your offerings,
           fostering a sense of trust and engagement."
          icon={inboundPrequalification}
        />
        <HowItWorksCard
          gifPosition="left"
          gif={leadManagementGif}
          title="Always-On Lead Management"
          description="Your AI-powered sales assistant works tirelessly around the clock, ensuring that no opportunity
            slips through the cracks. It engages with inquiries immediately, providing instant responses that boost your
            conversion rates by keeping leads engaged when they’re most interested. By eliminating delays in
            communication, the assistant captures the attention of potential customers at pivotal moments, nurturing
            their curiosity and guiding them seamlessly through the decision-making process."
          icon={leadManagement}
        />
        <HowItWorksCard
          gifPosition="right"
          gif={outcomeOrientedGif}
          title="Outcome-Oriented"
          description="Our primary goal is to book more meetings for your team, driving tangible results that contribute
           to your bottom line. By efficiently managing the repetitive tasks of qualification and nurturing, our
           AI-powered assistant frees up your sales team to concentrate on what they do best—closing deals. This
           streamlined process not only enhances productivity but also significantly shortens the sales cycle,
           allowing your team to engage with more qualified leads in less time. With the burden of routine tasks lifted,
           your sales team can invest their energy into building relationships, tailoring pitches, and ultimately
           converting leads into loyal customers."
          icon={outcomeOriented}
        />
      </div>
    </Layout>
  )
}
