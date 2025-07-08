import { Button } from '@/components/ui/button';
import * as React from 'react';
import { H1 } from '@/components/ui/typography';
import { Layout } from '@/components/ui/layout';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';

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
            >
              <div className="w-8 h-8 bg-center bg-no-repeat mr-3">
                📱
              </div>
              Chat on WhatsApp
            </Button>
            <Button
              variant={'outline'}
              size="lg"
              className="mr-auto md:mr-0"
            >
              📅 Book a Demo
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
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-r from-green-100 to-blue-100 rounded flex items-center justify-center">
                  <span className="text-2xl">🤖💬</span>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 bg-green-500 rounded w-20 flex items-center justify-center text-white text-xs">
                    Chat Now
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};