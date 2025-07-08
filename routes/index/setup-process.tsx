import * as React from 'react';
import knowledgeDatabase from '@/assets/index/setup-process/knowledge-database.svg';
import nurtureScript from '@/assets/index/setup-process/nurture-script.svg';
import calendar from '@/assets/index/setup-process/calendar.svg';
import website from '@/assets/index/setup-process/website.svg';
import reporting from '@/assets/index/setup-process/reporting.svg';
import { SetupProcessCard } from '@/components/ui/setup-process-card';

export const SetupProcess: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-12 md:mb-44">
      <SetupProcessCard
        image={knowledgeDatabase}
        title="Create Your Knowledge Base"
      >
        <p>
          <b>How It Works:</b> Our AI reads and understands your website’s
          content to create a knowledge base. This allows it to respond to
          customer queries accurately and in real-time.
        </p>
        <br />
        <p>
          <b>What You Need to Do:</b> Simply provide your website URL, and the
          AI will do the rest
        </p>
      </SetupProcessCard>
      <SetupProcessCard
        image={nurtureScript}
        title="Customize Your Nurture Script"
        imagePosition="right"
      >
        <p>
          <b>How It Works:</b> The AI uses a nurture script to engage with
          leads. You can personalise this script to reflect your brand’s tone of
          voice and ensure meaningful conversations with potential customers.
        </p>
        <br />
        <p>
          <b>What You Need to Do:</b> Submit your sales script or a brief
          outline of the conversations you’d like the AI to have.
        </p>
      </SetupProcessCard>
      <SetupProcessCard image={calendar} title="Integrate Your Calendar">
        <p>
          <b>How It Works:</b> The AI can connect to your calendar,
          automatically scheduling appointments with pre-qualified leads.
        </p>
        <br />
        <p>
          <b>What You Need to Do:</b> Provide your calendar link, and the AI
          will take care of the rest.
        </p>
      </SetupProcessCard>
      <SetupProcessCard
        image={website}
        title="Connect the AI to Your Website"
        imagePosition="right"
      >
        <p>
          <b>How It Works:</b> Add a simple line of code to your website to
          activate the AI, which will engage visitors and qualify them for
          appointments.
        </p>
        <br />
        <p>
          <b>What You Need to Do:</b> Copy and paste the provided code onto your
          website—no technical expertise required.
        </p>
      </SetupProcessCard>
      <SetupProcessCard image={reporting} title="Monitor Real-Time Reporting">
        <p>
          <b>How It Works:</b> Track leads, conversations, and booked
          appointments through our reporting dashboard.
        </p>
        <br />
        <p>
          <b>What You Need to Do:</b> Log in to your dashboard to view detailed
          reports on lead generation and AI performance.
        </p>
      </SetupProcessCard>
    </div>
  );
};
