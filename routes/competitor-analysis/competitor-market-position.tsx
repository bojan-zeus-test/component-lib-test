import React from 'react';
import { companyProfiles } from './competitor-analysis-data';
import zeus from '@/assets/logo.svg';
import yomdel from '@/assets/competitor-logos/yomdel-logo.png';
import salesRook from '@/assets/competitor-logos/salesrook-logo.png';
import intercom from '@/assets/competitor-logos/intercom-logo.png';

function CompetitorMarketPosition() {
  const logoMap: Record<string, string> = {
    zeus,
    yomdel,
    salesRook,
    intercom,
  };
  return (
    <div className="mb-16 bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-of-gray-500">
      <h3 className="text-2xl font-bold text-of-gray-100 mb-6">
        Market Position
      </h3>
      <div className="relative w-full h-[500px] border border-of-gray-400 rounded-lg p-4">
        <div className="absolute top-[48%] right-3 transform -translate-y-1/2 text-sm font-medium text-of-gray-300">
          High Quality
        </div>
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-of-gray-300">
          High Price
        </div>
        <div className="absolute top-[48%] left-3 transform -translate-y-1/2 text-sm font-medium text-of-gray-300">
          Low Quality
        </div>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-of-gray-300">
          Low Price
        </div>
        <div className="absolute left-1/2 top-0 bottom-0 border-l border-of-gray-400">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-of-gray-400"></div>
        </div>
        <div className="absolute top-1/2 left-0 right-0 border-t border-of-gray-400">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-of-gray-400"></div>
        </div>

        {Object.entries(companyProfiles).map(([name, profile]) => (
          <div
            key={name}
            className={`absolute w-24 h-24 -ml-12 -mt-12 flex items-center justify-center`}
            style={{
              left: `${profile.quadrantPosition.x}%`,
              top: `${profile.quadrantPosition.y}%`,
            }}
          >
            <img src={logoMap[profile.logo]} alt={`${name} logo`} />{' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompetitorMarketPosition;
