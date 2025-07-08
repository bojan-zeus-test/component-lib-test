import React from 'react';
import { TopContent } from './components/routes/index/top-content';
import { Featured } from './components/routes/index/featured';
import { CustomersSaying } from './components/routes/index/customers-saying';
import { StepByStep } from './components/routes/index/step-by-step';
import { OfficialPartners } from './components/routes/index/official-partners';
import { SetupProcess } from './components/routes/index/setup-process';
import { BottomContent } from './components/routes/index/bottom-content';
import { Layout } from './components/ui/layout';
import { SectionHeader } from './components/ui/section-header';
import { HowItWorks } from './components/ui/how-it-works/how-it-works';

export const IndexPage = () => (
  <div>
    <TopContent />
    <Featured />
    <CustomersSaying />
    <HowItWorks />
    <StepByStep />
    <OfficialPartners />
    <Layout className="pt-0 md:pt-0">
      <SectionHeader className="pt-3 md:pt-2 mb-6 md:mb-20">
        Setup Process
      </SectionHeader>
      <SetupProcess />
      <BottomContent />
    </Layout>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <IndexPage />
    </div>
  );
}

export default App;