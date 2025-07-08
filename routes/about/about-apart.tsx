import React from 'react';
import { SideHeader } from '@/components/ui/side-header';

const data: AboutApartItemProps[] = [
  {
    title: 'Problem Solvers',
    description:
      'Our outlook to problems is summed up as "the impossible we can do immediately; miracles take a little longer".' +
      ' Bold ideas and relentless iteration can resolve most challenging problems for our customers.',
  },
  {
    title: 'Curious',
    description:
      'We are constantly learning and developing. We actively strive into the unknown wanting to progress and' +
      ' maintain our cutting-edge market leading standing.',
  },
  {
    title: 'Industry Expertise',
    description:
      'The Zeus leadership team and Board of Directors bring years of experience within natural language processing' +
      ', automation and software development.',
  },
  {
    title: 'Integrity',
    description:
      'We acknowledge the potential dangers inherent to Generative AI, and thus have committed ourselves to' +
      ' developing and deploying our conversational AI tools responsibly and safely.',
  },
];

export const AboutApart: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-1/2 md:pr-[136px]">
        <SideHeader contentPosition="right">What sets us apart</SideHeader>
      </div>
      <div className="basis-1/2 flex flex-col gap-8">
        {data.map((item, index) => (
          <AboutApartItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export interface AboutApartItemProps {
  title: string;
  description: string;
}

export const AboutApartItem: React.FC<AboutApartItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col text-[21px] leading-[28px] gap-2 text-of-gray-200 max-w-[536px]">
      <h5 className="text-primary">{title}</h5>
      <p className="text-[18px] leading-8">{description}</p>
    </div>
  );
};
