import React from 'react';

interface TierFeaturesProps {
  tier: string;
  tierFeatures: Record<string, string[]>;
  monthlyPrice: number;
}

function TierFeatures({ tier, tierFeatures, monthlyPrice }: TierFeaturesProps) {
  return (
    <>
      {tier && tierFeatures[tier] && (
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex justify-between mb-2">
            <h4 className="font-semibold text-purple-900">{tier} Tier</h4>
            {monthlyPrice > 0 && (
              <span className="text-sm text-purple-700">
                £{monthlyPrice.toLocaleString()}/month
              </span>
            )}
          </div>
          <ul className="space-y-2 text-sm text-purple-800">
            {tierFeatures[tier].map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default TierFeatures;
