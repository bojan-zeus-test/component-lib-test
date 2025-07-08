import { Button } from '@/components/ui/button';
import * as React from 'react';
import whatsapp from '@/assets/whatsapp-white.svg';
import { H1 } from '@/components/ui/typography';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import { Layout } from '@/components/root/layout';
import { Link } from '@remix-run/react';
import { Paths } from '@/constants/paths';
import { CalendarClock } from 'lucide-react';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { VideoPlayer } from '@/components/ui/video-player';

export const TopContent = () => {
  return (
    <Layout className="mb-20 ">
      <div className="flex flex-col lg:flex-row gap-6 align-middle">
        <div className="flex-1 flex flex-col justify-center">
          <H1 className="mb-4 md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[64px]">
            The world's top-earning AI Sales Agent
          </H1>
          <p className="text-[21px] leading-[32px] text-gradient-dark bg-clip-text text-transparent mb-4 md:mb-6 md:text-[24px] md:leading-[40px]">
            Built by sales people for sales people
          </p>
          <div className="mb-4 flex flex-col md:flex-row gap-4">
            <Button
              size="lg"
              className="bg-wa-primary hover:bg-wa-primary-hover mr-auto md:mr-0"
              asChild
            >
              <DemoWhatsappLink>
                <div
                  className="w-8 h-8 bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${whatsapp})`,
                    backgroundSize: '24px',
                  }}
                />
                Chat on WhatsApp
              </DemoWhatsappLink>
            </Button>
            <Button
              variant={'outline'}
              size="lg"
              className="mr-auto md:mr-0"
              asChild
            >
              <Link to={Paths.DemoWebinar}>
                <CalendarClock className="w-[20px] h-[24px] mr-3" />
                Book a Demo
              </Link>
            </Button>
          </div>
          <div className="mt-1 md:mt-10">
            <CheckedList gap={2}>
              <CheckedListItem>AI Live Chat</CheckedListItem>
              <CheckedListItem>WhatsApp Sales-agent</CheckedListItem>
              <CheckedListItem>
                Optimize Top of Funnel Conversions
              </CheckedListItem>
            </CheckedList>
          </div>
        </div>
        <div className="flex-1 content-center items-center">
          <div className="w-full h-fit relative">
            <VideoPlayer vimeoVideoId="1088305352" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
