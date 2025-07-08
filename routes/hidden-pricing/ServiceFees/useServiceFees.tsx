import { useEffect, useMemo } from 'react';
import { ServiceFeesState } from './service-fees';

const hourlyRate = 59;
const dailyDevRate = 680;

export function useServiceFeesAccordion(
  value: ServiceFeesState,
  onChange: (updated: ServiceFeesState) => void
) {
  const supportInfo = useMemo(() => {
    if (value.supportHours >= 8) {
      return {
        level: 'Technical Account Management',
        features: [
          'Dedicated account manager',
          'Regular check-ins',
          'Performance reviews',
          'Priority support channels',
          'Custom training sessions',
        ],
        sla: '4-hour SLA',
      };
    }
    if (value.supportHours >= 2) {
      return {
        level: 'Premium Support',
        features: [
          'Phone support',
          'Video calls',
          'Priority email support',
          'Online documentation',
        ],
        sla: 'Same-day response',
      };
    }
    return {
      level: 'Email Support',
      features: ['Email support', 'Online documentation'],
      sla: '48-hour SLA',
    };
  }, [value.supportHours]);

  const devInfo = useMemo(() => {
    if (value.customDevDays === 0) {
      return { level: 'No Development', desc: 'No monthly development work' };
    }
    if (value.customDevDays <= 1) {
      return {
        level: 'Basic Development',
        desc: 'Basic development tasks and general maintenance',
      };
    }
    if (value.customDevDays <= 2) {
      return {
        level: 'Small Changes',
        desc: 'Minor updates and enhancements',
      };
    }
    return {
      level: 'Frequent Changes',
      desc: 'Larger-scale development and continuous improvements',
    };
  }, [value.customDevDays]);

  const apiInfo = useMemo(() => {
    if (value.apiIntegrationDays === 0) {
      return { level: 'No API integration', desc: 'No API integration work' };
    }
    if (value.apiIntegrationDays <= 1) {
      return {
        level: 'Basic Integration',
        desc: 'Basic API setup and configuration',
      };
    }
    if (value.apiIntegrationDays <= 2) {
      return {
        level: 'Standard Integration',
        desc: 'Standard API integration and maintenance',
      };
    }
    return {
      level: 'Complex Integration',
      desc: 'Complex API integration and optimization',
    };
  }, [value.apiIntegrationDays]);

  const supportMonthly = value.supportHours * hourlyRate;
  const apiMonthly = value.apiIntegrationDays * dailyDevRate;
  const devMonthly = value.customDevDays * dailyDevRate;
  const totalMonthly = supportMonthly + apiMonthly + devMonthly;

  useEffect(() => {
    if (
      value.supportMonthly !== supportMonthly ||
      value.supportLevel !== supportInfo.level ||
      value.apiMonthly !== apiMonthly ||
      value.apiLevel !== apiInfo.level ||
      value.devMonthly !== devMonthly ||
      value.totalMonthly !== totalMonthly
    ) {
      onChange({
        ...value,
        supportMonthly,
        supportLevel: supportInfo.level,
        apiMonthly,
        apiLevel: apiInfo.level,
        devMonthly,
        totalMonthly,
      });
    }
  }, [
    supportMonthly,
    supportInfo.level,
    apiMonthly,
    apiInfo.level,
    devMonthly,
    totalMonthly,
  ]);

  const supportSlider = {
    label: 'Monthly Support Hours',
    value: value.supportHours,
    onChange: (val: number) => onChange({ ...value, supportHours: val }),
    min: 0,
    max: 100,
    unitPrice: hourlyRate,
  };

  const apiSlider = {
    label: 'API Integration Days per Month',
    value: value.apiIntegrationDays,
    onChange: (val: number) => onChange({ ...value, apiIntegrationDays: val }),
    min: 0,
    max: 50,
    unitPrice: dailyDevRate,
  };

  const devSlider = {
    label: 'Custom Development Days per Month',
    value: value.customDevDays,
    onChange: (val: number) => onChange({ ...value, customDevDays: val }),
    min: 0,
    max: 50,
    unitPrice: dailyDevRate,
  };

  return {
    supportInfo,
    apiInfo,
    devInfo,
    supportSlider,
    apiSlider,
    devSlider,
    supportMonthly,
    apiMonthly,
    devMonthly,
    totalMonthly,
  };
}
