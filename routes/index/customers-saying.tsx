import { Layout } from '@/components/root/layout';

import { SectionHeader } from '@/components/ui/section-header';
import * as React from 'react';
import { VideoPlayer } from '@/components/ui/video-player';
import {
  Carousel,
  CarouselContent,
  CarouselDotNav,
  CarouselItem,
} from '@/components/ui/carousel/carousel';
import { Star } from 'lucide-react';
import { testimonials } from './testimonialsData';

export const CustomersSaying = () => {
  return (
    <Layout className="pb-5 pt-0 md:pt-0 md:pb-10">
      <SectionHeader className="pt-16 md:pt-20 mb-6 md:mb-20">
        See what Customers are Saying
      </SectionHeader>
      <Carousel
        opts={{ loop: true, align: 'start' }}
        className="w-full mx-auto group relative"
      >
        <CarouselContent>
          {testimonials.map((item, i) => (
            <CarouselItem key={i} className="md:basis-1/3 p-6">
              <div className="h-full rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                  {item.videoLink ? (
                    <VideoPlayer vimeoVideoId={item.videoLink} />
                  ) : (
                    <img
                      src={item.profileImage}
                      alt={item.firstName}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={'w-4 h-4 text-yellow-400 fill-current'}
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mb-4 text-of-gray-200 italic">
                    {item.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={item.profileImage}
                      alt={item.firstName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-of-gray-100">
                        {item.firstName} {item.lastName}
                      </h3>
                      <p className="text-sm text-of-gray-300">{item.role}</p>
                      <p className="text-sm text-of-gray-400">{item.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDotNav className="mt-4" />
      </Carousel>
    </Layout>
  );
};
