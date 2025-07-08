import React from 'react';
import { Layout } from '@/components/root/layout';
import { SectionHeader } from '@/components/ui/section-header';
import {
  Carousel,
  CarouselContent,
  CarouselDotNav,
  CarouselItem,
} from '@/components/ui/carousel/carousel';

// Mock design data
const designExamples = [
  {
    id: 1,
    title: 'E-commerce Landing Page',
    category: 'Web Design',
    description: 'Modern, conversion-optimized landing page with clean typography and strategic CTAs',
    colors: ['#6366F1', '#8B5CF6', '#EC4899'],
    prompt: 'Create a modern e-commerce landing page for a tech startup selling productivity tools',
  },
  {
    id: 2,
    title: 'Mobile App Interface',
    category: 'UI/UX Design',
    description: 'Intuitive mobile app design with smooth user flow and accessibility features',
    colors: ['#10B981', '#059669', '#047857'],
    prompt: 'Design a fitness tracking app interface with dark mode and gamification elements',
  },
  {
    id: 3,
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand identity including logo, color palette, and typography guidelines',
    colors: ['#F59E0B', '#D97706', '#B45309'],
    prompt: 'Create a warm, approachable brand identity for a sustainable coffee company',
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Marketing',
    description: 'Cohesive social media templates with engaging visuals and consistent branding',
    colors: ['#EF4444', '#DC2626', '#B91C1C'],
    prompt: 'Design Instagram story templates for a fashion brand summer collection launch',
  },
  {
    id: 5,
    title: 'Dashboard Interface',
    category: 'Data Visualization',
    description: 'Clean, data-rich dashboard with intuitive navigation and clear information hierarchy',
    colors: ['#3B82F6', '#2563EB', '#1D4ED8'],
    prompt: 'Create an analytics dashboard for SaaS platform with real-time metrics display',
  },
  {
    id: 6,
    title: 'Print Advertisement',
    category: 'Print Design',
    description: 'Eye-catching print ad with bold typography and compelling visual storytelling',
    colors: ['#8B5CF6', '#7C3AED', '#6D28D9'],
    prompt: 'Design a magazine ad for luxury watches emphasizing craftsmanship and heritage',
  },
];

export const DesignShowcase = () => {
  return (
    <Layout className="pb-5 pt-0 md:pt-0 md:pb-10">
      <SectionHeader className="pt-16 md:pt-20 mb-6 md:mb-20">
        AI-Generated Design Examples
      </SectionHeader>
      
      <Carousel
        opts={{ loop: true, align: 'start' }}
        className="w-full mx-auto group relative"
      >
        <CarouselContent>
          {designExamples.map((design) => (
            <CarouselItem key={design.id} className="md:basis-1/2 lg:basis-1/3 p-4">
              <div className="h-full rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden">
                {/* Design Preview */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <div 
                    className="w-full h-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background: `linear-gradient(135deg, ${design.colors[0]}, ${design.colors[1]}, ${design.colors[2]})`
                    }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 text-center">
                      <div className="text-2xl mb-2">🎨</div>
                      <div className="text-sm opacity-90">{design.category}</div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {design.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-bold text-xl text-of-gray-100 mb-2">
                    {design.title}
                  </h3>
                  <p className="text-of-gray-200 text-sm mb-4 flex-1">
                    {design.description}
                  </p>
                  
                  {/* Color Palette */}
                  <div className="mb-4">
                    <div className="text-xs text-of-gray-300 mb-2">Color Palette:</div>
                    <div className="flex gap-2">
                      {design.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* AI Prompt */}
                  <div className="bg-of-gray-500 rounded-lg p-3">
                    <div className="text-xs text-of-gray-300 mb-1">AI Prompt:</div>
                    <div className="text-xs text-of-gray-200 italic">
                      "{design.prompt}"
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDotNav className="mt-8" />
      </Carousel>
      
      <div className="text-center mt-12">
        <p className="text-of-gray-200 text-lg mb-4">
          All designs generated in under 30 seconds using AI
        </p>
        <div className="flex justify-center gap-8 text-sm text-of-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Production Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Fully Customizable</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Brand Compliant</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};