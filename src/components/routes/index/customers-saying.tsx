import { Layout } from '@/components/ui/layout';
import { SectionHeader } from '@/components/ui/section-header';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselDotNav,
  CarouselItem,
} from '@/components/ui/carousel/carousel';

const testimonials = [
  {
    firstName: 'Dolly',
    lastName: 'Draper',
    role: 'Digital Marketing Manager',
    company: 'The Bridging Broker',
    quote: 'Zeus is such a beautiful system — anyone can use it. It\'s helped make the client experience so much easier and reduces the friction between client and company, which is exactly what we need in this industry.',
    avatar: '👩‍💼',
  },
  {
    firstName: 'Matt',
    lastName: 'Stevens',
    role: 'Managing Director',
    company: 'The Mortgage Genie',
    quote: 'Adding Zeus to our website quite literally increased our Decisions in Principle by 10X! It\'s the single best change we\'ve ever made to our marketing and sales process.',
    avatar: '👨‍💼',
  },
  {
    firstName: 'Matthew',
    lastName: 'Rowne',
    role: 'Director',
    company: 'The Buy-To-Let Broker',
    quote: 'Zeus gives us credibility at a time when many competitors don\'t have 24/7 support. It\'s not just a generic tool — the team worked collaboratively to tailor the product for our business.',
    avatar: '👨‍💻',
  },
];

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
                <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-6xl">{item.avatar}</div>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">⭐</span>
                      ))}
                    </div>
                  </div>
                  <blockquote className="mb-4 text-of-gray-200 italic">
                    "{item.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                      {item.avatar}
                    </div>
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