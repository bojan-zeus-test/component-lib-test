import { FC } from 'react';
import { Layout } from '@/components/ui/layout';
import { SectionHeader } from '@/components/ui/section-header';

export const Featured = () => {
  const featuredLogos = [
    { name: '150sec', emoji: '⚡' },
    { name: 'Tech News Vision', emoji: '📺' },
    { name: 'Tech EU', emoji: '🇪🇺' },
    { name: 'National Technology News', emoji: '📰' },
    { name: 'UKTN', emoji: '🇬🇧' },
    { name: 'London Tech Watch', emoji: '👁️' },
  ];

  return (
    <Layout className="bg-of-primary-500 pt-0 pb-0 md:pt-0 md:pb-0">
      <SectionHeader className="pt-6 mb-6 md:pt-14 text-white">Featured On</SectionHeader>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {featuredLogos.map((logo, index) => (
          <FeaturedItem key={index} name={logo.name} emoji={logo.emoji} />
        ))}
      </ul>
    </Layout>
  );
};

interface FeaturedItemProps {
  name: string;
  emoji: string;
}

const FeaturedItem: FC<FeaturedItemProps> = ({ name, emoji }) => {
  return (
    <li className="self-center justify-center text-center">
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="text-xs text-white opacity-80">{name}</div>
    </li>
  );
};