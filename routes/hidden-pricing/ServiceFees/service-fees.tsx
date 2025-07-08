import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SliderCalculator } from '../hidden-pricing-slider-calculator';
import { useServiceFeesAccordion } from './useServiceFees';

export interface ServiceFeesState {
  supportHours: number;
  supportMonthly: number;
  supportLevel: string;
  apiIntegrationDays: number;
  apiMonthly: number;
  apiLevel: string;
  customDevDays: number;
  devMonthly: number;
  totalMonthly: number;
  setup: number;
}

export function ServiceFeesAccordion({
  value,
  onChange,
}: {
  value: ServiceFeesState;
  onChange: (updated: ServiceFeesState) => void;
}) {
  const {
    supportInfo,
    apiInfo,
    devInfo,
    supportSlider,
    apiSlider,
    devSlider,
    supportMonthly,
    apiMonthly,
    devMonthly,
  } = useServiceFeesAccordion(value, onChange);

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="service"
      className="bg-green-50/50"
    >
      <AccordionItem value="service">
        <AccordionTrigger className="text-3xl font-bold text-purple-900">
          Service Fees
        </AccordionTrigger>
        <AccordionContent className="space-y-8 p-8">
          {/* Support Hours */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              {supportInfo.level}
            </h3>
            <p className="text-gray-600 mb-4">{supportInfo.sla} • £59/hour</p>
            <SliderCalculator {...supportSlider} />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">
                {supportSlider.value} hours per month
              </span>
              <span className="text-sm font-semibold text-purple-900">
                {supportSlider.value === 0
                  ? 'Free'
                  : `£${supportMonthly.toLocaleString()}/month`}
              </span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Features included:
              </h4>
              <ul className="space-y-1">
                {supportInfo.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-sm text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Custom Development */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              Custom Development
            </h3>
            <p className="text-gray-600 mb-4">
              Choose your level of custom development • £680 per day
            </p>
            <SliderCalculator {...devSlider} />
            <div className="mt-4 bg-purple-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-purple-900">
                    {devInfo.level}
                  </h4>
                  <p className="text-sm text-purple-700 mt-1">{devInfo.desc}</p>
                  {devSlider.value > 0 && (
                    <p className="text-sm text-purple-600 mt-2">
                      {devSlider.value} Developer{' '}
                      {devSlider.value === 1 ? 'Day' : 'Days'}/month
                    </p>
                  )}
                </div>
                <span className="font-semibold text-purple-900">
                  {devSlider.value === 0
                    ? 'Free'
                    : `£${devMonthly.toLocaleString()}/month`}
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                Note: Custom development includes new features, UI/UX
                improvements, and specific functionality tailored to your needs.{' '}
              </p>
            </div>
          </section>

          {/* API Integration */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-bold text-purple-900 mb-2">
              API Integration
            </h3>
            <p className="text-gray-600 mb-4">
              Choose your level of API integration • £680 per day
            </p>
            <SliderCalculator {...apiSlider} />
            <div className="mt-4 bg-purple-50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium text-purple-900">
                    {apiInfo.level}
                  </h4>
                  <p className="text-sm text-purple-700 mt-1">{apiInfo.desc}</p>
                  {apiSlider.value > 0 && (
                    <p className="text-sm text-purple-600 mt-2">
                      {apiSlider.value} Developer{' '}
                      {apiSlider.value === 1 ? 'Day' : 'Days'}/month
                    </p>
                  )}
                </div>
                <span className="font-semibold text-purple-900">
                  {apiSlider.value === 0
                    ? 'Free'
                    : `£${apiMonthly.toLocaleString()}/month`}
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                Note: API integration work ensures proper connectivity with
                external services, data synchronization, and optimal
                performance.
              </p>
            </div>
          </section>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
