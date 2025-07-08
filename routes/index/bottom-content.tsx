import smeFocusedGrowth from '@/assets/index/sme-focused-growth.svg';
import { ReactNode } from 'react';

export const BottomContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mb-8 md:mb-20">
        <img
          className="md:w-0 md:flex-[7.4]"
          src={smeFocusedGrowth}
          alt="SME Focused Growth"
        />
        <div className="md:flex-[5.6] flex flex-col gap-4 justify-center">
          <h3 className="text-[28px] leading-[32px] md:text-[32px] md:leading-[43px] text-of-gray-100">
            SME-Focused Growth
          </h3>
          <div className="text-of-gray-200 text-[18px] leading-[32px]">
            <p>
              At Zeus, we specialise in helping SMEs grow. Our AI sales
              assistant is tailored to businesses with high lead volume and
              complex sales processes, ensuring you have the tools needed to
              convert leads without increasing headcount.
            </p>
            <br />
            <p>
              <b>Verticals We Serve:</b> Professional services, real estate,
              healthcare, financial services, and more.
            </p>
            <br />
            <p>
              <b>Scalable Solution:</b> As your business grows, so does Zeus.
              Easily handle increasing lead volumes without overloading your
              team.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12 md:ml-28">
        <Feature title="Proven Results: 11% to 32% More Inquiries Converted">
          Our customers consistently see a significant increase in booked
          appointments. By automating lead qualification and follow-up, we
          reduce the time it takes to respond and increase the number of
          conversations that turn into sales opportunities.
        </Feature>
        <Feature title="Easy to Get Started">
          Worried about how hard it is to integrate? Don’t be. Zeus is designed
          for quick, seamless implementation with your existing CRM and
          processes. Our team supports you every step of the way, ensuring
          minimal disruption.
        </Feature>
        <Feature title="Build Trust with Zeus">
          Zeus technology is rooted in real-world sales experience. Our AI is
          developed by sales professionals who understand the challenges of
          managing inbound leads. We’ve already helped SMEs across multiple
          sectors supercharge their lead management and booking processes.
        </Feature>
        <Feature title="Ready to Boost Your Sales?">
          Turn inbound leads into real opportunities with Zeus AI-powered{' '}
          <b>SalesTalk AI tool</b> – the future of lead management for SMEs.
        </Feature>
      </div>
    </>
  );
};

interface FeatureProps {
  title: string;
  children: ReactNode;
}

const Feature = ({ title, children }: FeatureProps) => {
  return (
    <div>
      <h4 className="text-[21px] leading-[28px] text-primary mb-2">{title}</h4>
      <div className="text-of-gray-200 text-[16px] leading-[24px]">
        {children}
      </div>
    </div>
  );
};
