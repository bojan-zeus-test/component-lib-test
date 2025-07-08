import { H1, H2, H4 } from '@/components/ui/typography';
import { CheckedList, CheckedListItem } from '@/components/ui/checked-list';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { HowItWorksList } from '@/components/ui/how-it-works-list';
import { SideHeader } from '@/components/ui/side-header';
import { SetupTimeline } from '@/components/ui/setup-timeline';
import { Layout } from '@/components/root/layout';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import { DemoApolloLink } from '@/components/ui/demo-apollo-link';
import * as React from 'react';
import { DesignShowcase } from './design-showcase';
import { DesignFeatures } from './design-features';
import { DesignStats } from './design-stats';

// Mock icons - in a real app these would be actual SVG imports
const mockIcon1 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMyA5IDktNyA5IDdWMjBhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+Cjxwb2x5bGluZSBwb2ludHM9IjksIDIyIDksMTIgMTUsMTIgMTUsMjIiLz4KPC9zdmc+Cjwvc3ZnPgo=';
const mockIcon2 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTIgMmwtMy4wOSA2LjI2TDIgOS4yN2w1IDQuODdMMTUuMTggMjJsLTMuMDktNi4yNkwyMiAxNC43M2wtNS00Ljg3TDguODIgMnoiLz4KPC9zdmc+Cjwvc3ZnPgo=';
const mockIcon3 = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMzIiIGZpbGw9IiNGNTk4NDIiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+CjxwYXRoIGQ9Im0xMiAxIDcgNS03IDV6Ii8+CjxwYXRoIGQ9Im0xMiAyMyA3LTUtNy01eiIvPgo8L3N2Zz4KPC9zdmc+Cg==';

export const AiGeneratedDesignsPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:flex-row gap-6 align-middle">
          <div className="flex-1 flex flex-col justify-center">
            <H1 className="mb-4 md:text-[40px] md:leading-[48px] lg:text-[56px] lg:leading-[64px]">
              AI-Generated Designs
            </H1>
            <p className="text-[21px] leading-[32px] text-gradient-dark bg-clip-text text-transparent mb-4 md:mb-6 md:text-[24px] md:leading-[40px]">
              Revolutionary design automation powered by artificial intelligence
            </p>
            <div className="mt-1 md:mt-10">
              <CheckedList gap={2}>
                <CheckedListItem>
                  Generate stunning designs in seconds, not hours
                </CheckedListItem>
                <CheckedListItem>
                  AI learns from millions of design patterns and trends
                </CheckedListItem>
                <CheckedListItem>
                  Customize and iterate designs with simple prompts
                </CheckedListItem>
                <CheckedListItem>
                  Export production-ready assets instantly
                </CheckedListItem>
              </CheckedList>
            </div>
            <div className="mb-4 flex flex-col md:flex-row gap-4">
              <Button size="lg" asChild>
                <DemoWhatsappLink>Try AI Design Now</DemoWhatsappLink>
              </Button>
              <Button variant={'outline'} size="lg" asChild>
                <DemoApolloLink>Book a Demo</DemoApolloLink>
              </Button>
            </div>
            <div className="text-sm leading-6 text-of-gray-400">
              Join 50,000+ designers using AI to accelerate their workflow
            </div>
          </div>
          <div className="flex-1 content-center items-center">
            <div className="w-full h-fit relative">
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded"></div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-blue-500 rounded w-20"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <DesignStats />
      <DesignShowcase />

      <SectionHeader>How AI Design Generation Works</SectionHeader>
      <Layout>
        <HowItWorksList
          items={[
            {
              icon: mockIcon1,
              title: 'Input your design requirements using natural language prompts or upload reference images',
            },
            {
              icon: mockIcon2,
              title: 'Our AI analyzes millions of design patterns, color schemes, and layouts to understand your vision',
            },
            {
              icon: mockIcon3,
              title: 'Generate multiple design variations instantly, then refine and customize until perfect',
            },
          ]}
        />
      </Layout>

      <DesignFeatures />

      <Layout>
        <div className="flex flex-col md:flex-row">
          <div className="basis-1/2 md:pr-[136px]">
            <SideHeader contentPosition="right">Why Choose AI Design?</SideHeader>
          </div>
          <div className="basis-1/2 flex flex-col gap-10 text-of-gray-200 leading-8">
            <div>
              <H4>Speed & Efficiency</H4>
              <p>
                Generate professional designs in minutes instead of hours. Our AI processes 
                design requirements instantly, allowing you to iterate quickly and meet tight 
                deadlines without compromising on quality.
              </p>
            </div>
            <div>
              <H4>Endless Creativity</H4>
              <p>
                Break through creative blocks with AI-powered inspiration. Our system generates 
                unique design variations you might never have considered, expanding your creative 
                horizons and delivering fresh perspectives.
              </p>
            </div>
            <div>
              <H4>Cost-Effective Solutions</H4>
              <p>
                Reduce design costs by up to 80% while maintaining professional quality. Perfect 
                for startups, small businesses, and agencies looking to scale their design 
                capabilities without expanding their team.
              </p>
            </div>
            <div>
              <H4>Consistent Brand Identity</H4>
              <p>
                Maintain brand consistency across all designs with AI that learns your brand 
                guidelines, color palettes, and style preferences to ensure every output aligns 
                with your visual identity.
              </p>
            </div>
          </div>
        </div>

        <SectionHeader>Implementation Process</SectionHeader>
        <SetupTimeline
          items={[
            {
              description: 'Discovery call to understand your design needs, brand guidelines, and project requirements',
              icon: mockIcon1,
            },
            {
              description: 'AI model training on your brand assets and style preferences for personalized outputs',
              icon: mockIcon2,
            },
            {
              description: 'Launch with full access to AI design tools, templates, and ongoing support',
              icon: mockIcon3,
            },
          ]}
        />

        <div className="text-center mb-12 md:mb-20">
          <H2 className="mb-6">Ready to Transform Your Design Process?</H2>
          <p className="text-[21px] leading-8 md:max-w-[872px] mx-auto mb-8">
            Join thousands of designers and businesses who have revolutionized their 
            creative workflow with AI-powered design generation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <DemoWhatsappLink>Start Creating Now</DemoWhatsappLink>
            </Button>
            <Button variant={'outline'} size="lg" asChild>
              <DemoApolloLink>Schedule Consultation</DemoApolloLink>
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};