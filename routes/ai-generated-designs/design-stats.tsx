import React from 'react';
import { Layout } from '@/components/root/layout';

export const DesignStats = () => {
  const stats = [
    {
      number: '2.5M+',
      label: 'Designs Generated',
      description: 'Professional designs created by our AI',
    },
    {
      number: '98%',
      label: 'Time Saved',
      description: 'Average time reduction vs traditional design',
    },
    {
      number: '50K+',
      label: 'Active Users',
      description: 'Designers and businesses using our platform',
    },
    {
      number: '4.9/5',
      label: 'User Rating',
      description: 'Average satisfaction score from users',
    },
  ];

  return (
    <Layout className="bg-of-primary-500 pt-0 pb-0 md:pt-0 md:pb-0">
      <div className="py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-of-primary-200 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-of-primary-300">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};