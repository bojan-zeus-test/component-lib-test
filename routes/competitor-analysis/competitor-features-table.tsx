import { Check, X } from 'lucide-react';
import React from 'react';
import {
  allFeatures,
  competitorData,
  competitors,
  featureSections,
} from './competitor-analysis-data';

function CompetitorFeaturesTable() {
  return (
    <div className="overflow-x-auto mb-8 rounded-lg shadow-lg border border-of-gray-500">
      <div className="inline-block w-full align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-of-gray-500">
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-of-gray-100 sm:pl-6 bg-of-gray-500"
              >
                Features
              </th>
              {competitors.map((competitor) => (
                <th
                  key={competitor}
                  scope="col"
                  className={`px-3 py-3.5 text-center text-sm font-semibold ${
                    competitor === 'Zeus'
                      ? 'bg-of-primary-400 text-of-primary-100'
                      : 'text-of-gray-100'
                  }`}
                >
                  {competitor}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {Object.entries(featureSections).map(([section, features]) => (
              <React.Fragment key={section}>
                <tr className="bg-gradient-to-r from-of-primary-400 to-of-primary-500">
                  <td
                    colSpan={competitors.length + 1}
                    className="py-3 pl-4 pr-3 text-left text-sm font-semibold text-of-primary-100 sm:pl-6"
                  >
                    {section}
                  </td>
                </tr>
                {features.map((feature) => (
                  <tr
                    key={feature.name}
                    className="hover:bg-of-gray-500 transition-colors"
                  >
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-of-gray-100 sm:pl-6">
                      <div className="flex flex-col">
                        <span>{feature.name}</span>
                        {feature.description && (
                          <span className="text-xs text-of-gray-300 mt-1">
                            {feature.description}
                          </span>
                        )}
                      </div>
                    </td>
                    {competitors.map((competitor) => (
                      <td
                        key={`${competitor}-${feature.name}`}
                        className={`px-3 py-4 text-sm text-center ${
                          competitor === 'Zeus' ? 'bg-of-primary-500' : ''
                        }`}
                      >
                        {competitorData[competitor][
                          allFeatures.indexOf(feature.name)
                        ] ? (
                          <Check className="inline-block w-5 h-5 text-green-600" />
                        ) : (
                          <X className="inline-block w-5 h-5 text-red-600" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompetitorFeaturesTable;
