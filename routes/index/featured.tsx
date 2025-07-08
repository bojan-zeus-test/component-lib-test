import uktn from '@/assets/featured/uktn.png';
import londonTechWatch from '@/assets/featured/london-tech-watch.png';
import techEu from '@/assets/featured/tech-eu.png';
import techNewsVision from '@/assets/featured/tech-news-vision.png';
import ntn from '@/assets/featured/ntn.png';
import a150sec from '@/assets/featured/150sec.png';
import { FC } from 'react';
import { Layout } from '@/components/root/layout';
import { SectionHeader } from '@/components/ui/section-header';

export const Featured = () => {
  return (
    <Layout className="bg-of-primary-500 pt-0 pb-0 md:pt-0 md:pb-0">
      <SectionHeader className="pt-6 mb-6 md:pt-14">Featured On</SectionHeader>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <FeaturedItem image={a150sec} alt="150 sec" />
        <FeaturedItem image={techNewsVision} alt="tech news vision" />
        <FeaturedItem image={techEu} alt="tech eu" />
        <FeaturedItem image={ntn} alt="national technology news" />
        <FeaturedItem image={uktn} alt="uktn" />
        <FeaturedItem image={londonTechWatch} alt="London Tech Watch" />
      </ul>
    </Layout>
  );
};

interface FeaturedItemProps {
  image: string;
  alt: string;
}

const FeaturedItem: FC<FeaturedItemProps> = ({image, alt}) => {
  return (
    <li className="self-center justify-center">
      <img src={image} alt={alt}/>
    </li>
  );
};
