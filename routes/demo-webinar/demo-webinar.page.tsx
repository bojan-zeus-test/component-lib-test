import { H2, H3, SmallText } from '@/components/ui/typography';
import { Vimeo } from '@/components/ui/vimeo';
import { cn } from '@/lib/utils';
import React from 'react';
import useScript from '@/lib/use-script';

export const DemoWebinarPage = () => {
  useScript('https://ewpcdn-ecs.easywebinar.com/widget/js/new/ew-script.js');
  return (
    <div className={cn('flex justify-center px-6 pt-8 md:px-14 md:pt-16')}>
      <div className="w-full max-w-screen-lg mb-20 flex flex-col md:flex-row gap-12">
        <div className="grow basis-1 text-center">
          <Vimeo videoId="1015672151" />
          <H3 className="mt-14 mb-6 font-normal">
            Unlock the potential of{' '}
            <span className="text-gradient-dark bg-clip-text text-transparent">
              conversational AI
            </span>{' '}
            in lead management
          </H3>
          <span>
            Join us to explore how our cutting-edge software is redefining lead
            qualification on WhatsApp, exclusively at our upcoming webinar
          </span>
        </div>
        <div className="grow  basis-1">
          <H2 className="text-center mt-3 md:mt-0 font-semibold">
            Sign up for the{' '}
            <span className="text-gradient-dark bg-clip-text text-transparent">
              Zeus
            </span>{' '}
            Demo Webinar
          </H2>
          <div
            suppressHydrationWarning
            className="ew-wid"
            data-wid="eb+jb90m5EH45fAc7zdV9Q=="
            data-loaded="no"
            data-schloaded="no"
            // dangerouslySetInnerHTML={{
            //   __html: `<script type="text/javascript" src="https://ewpcdn-ecs.easywebinar.com/widget/js/new/ew-script.js"></script>`,
            // }}
          ></div>
          <SmallText>
            By submitting this form you confirm you have read and accepted our
            Privacy Policy and Terms and Conditions.
          </SmallText>
        </div>
      </div>
    </div>
  );
};
