import { Calendar, Globe, Star, Users } from 'lucide-react';
import React, { useState } from 'react';
import {
  CompanyMetrics,
  companyProfiles,
  competitors,
  metricLabels,
} from './competitor-analysis-data';

function CompetitorComparison() {
  const [selectedCompetitor, setSelectedCompetitor] = useState('Yomdel');

  return (
    <div className="mt-8 sm:mt-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-of-gray-100 mb-8">
        Head-to-Head Comparison
      </h2>

      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 border border-of-gray-500">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {competitors
              .filter((c) => c !== 'Zeus')
              .map((competitor) => (
                <button
                  key={competitor}
                  onClick={() => setSelectedCompetitor(competitor)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCompetitor === competitor
                      ? 'bg-of-primary-100 text-white'
                      : 'bg-of-gray-500 text-of-gray-200 hover:bg-of-gray-400'
                  }`}
                >
                  {competitor}
                </button>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-of-primary-500 p-6 rounded-lg border border-of-primary-400 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-of-primary-100 mb-2">
                Zeus
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Founded {companyProfiles['Zeus'].founded}
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  {companyProfiles['Zeus'].headquarters}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {companyProfiles['Zeus'].employees} employees
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-2">{companyProfiles['Zeus'].rating}</span>
                </div>
              </div>
              <p className="mt-4 text-sm">
                {companyProfiles['Zeus'].description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {companyProfiles['Zeus'].specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-of-primary-400 text-of-primary-200"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-of-gray-500 p-6 rounded-lg border border-of-gray-400 flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedCompetitor}
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Founded {companyProfiles[selectedCompetitor].founded}
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  {companyProfiles[selectedCompetitor].headquarters}
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {companyProfiles[selectedCompetitor].employees} employees
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-2">
                    {companyProfiles[selectedCompetitor].rating}
                  </span>
                </div>
              </div>
              <p className="mt-4 text-sm">
                {companyProfiles[selectedCompetitor].description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {companyProfiles[selectedCompetitor].specialties.map(
                  (specialty, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-of-gray-400 text-of-gray-200"
                    >
                      {specialty}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 mt-8">
            <h3 className="text-xl font-bold text-of-gray-100 mb-6">
              Performance Metrics
            </h3>
            <div className="grid grid-cols-[200px_1fr_1fr] gap-8">
              <div>
                <h4 className="text-lg font-semibold text-of-gray-100 mb-4">
                  Metrics
                </h4>
                <div className="space-y-6">
                  {Object.entries(metricLabels).map(([key, label]) => (
                    <div key={key} className="h-8 flex items-center">
                      <span className="text-sm font-medium text-of-gray-100">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-of-primary-200 mb-4">
                  Zeus
                </h4>
                <div className="space-y-6">
                  {(Object.keys(metricLabels) as (keyof CompanyMetrics)[]).map(
                    (key) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-end text-sm font-medium">
                          <span className="text-of-primary-200">
                            {companyProfiles['Zeus'].metrics[key]}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-of-gray-500 rounded-full">
                          <div
                            className="absolute left-0 h-full bg-of-primary-100 rounded-full"
                            style={{
                              width: `${companyProfiles['Zeus'].metrics[key]}%`,
                            }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-of-gray-300 mb-4">
                  {selectedCompetitor}
                </h4>
                <div className="space-y-6">
                  {(Object.keys(metricLabels) as (keyof CompanyMetrics)[]).map(
                    (key) => (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-end text-sm font-medium">
                          <span className="text-of-gray-300">
                            {companyProfiles[selectedCompetitor].metrics[key]}%
                          </span>
                        </div>
                        <div className="relative h-2 bg-of-gray-500 rounded-full">
                          <div
                            className="absolute left-0 h-full bg-of-gray-400 rounded-full"
                            style={{
                              width: `${companyProfiles[selectedCompetitor].metrics[key]}%`,
                            }}
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompetitorComparison;
