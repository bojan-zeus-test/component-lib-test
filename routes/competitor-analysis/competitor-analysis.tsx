import React from 'react';
import CompetitorComparison from './competitor-comparison';
import CompetitorFeaturesTable from './competitor-features-table';
import CompetitorMarketPosition from './competitor-market-position';

const CompetitorAnalysis = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Competitor Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Zeus AI gives you the power of a well resourced platform but the
            responsive service of a boutique agency. With over £1m invested in
            AI technology Zeus is a market leader in financial services,
            ensuring compliance and reliability.
          </p>
        </div>
        <CompetitorFeaturesTable />
        <CompetitorMarketPosition />
        <CompetitorComparison />
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
