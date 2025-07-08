import matt from '@/assets/index/customer-saying/matt_stevens_profile.png';
import dolly from '@/assets/index/customer-saying/dolly_draper_profile.png';
import matthew from '@/assets/index/customer-saying/matthew_rowne_profile.png';
import stephen from '@/assets/index/customer-saying/stephen_dickinson_profile.png';
import vernon from '@/assets/index/customer-saying/vernon_botha_profile.jpeg';
import pat from '@/assets/index/customer-saying/pat_burrows_profile.png';

export interface TestimonialProps {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  quote: string;
  profileImage: string;
  videoLink: string;
}

export const testimonials: TestimonialProps[] = [
  {
    firstName: 'Dolly',
    lastName: 'Draper',
    role: 'Digital Marketing Manager',
    company: 'The Bridging Broker',
    quote:
      'Zeus is such a beautiful system — anyone can use it. It’s helped make the client experience so much easier and reduces the friction between client and company, which is exactly what we need in this industry.',
    profileImage: dolly,
    videoLink: '1087957271',
  },
  {
    firstName: 'Matt',
    lastName: 'Stevens',
    role: 'Managing Director',
    company: 'The Mortgage Genie',
    quote:
      'Adding Zeus to our website quite literally increased our Decisions in Principle by 10X! It’s the single best change we’ve ever made to our marketing and sales process.',
    profileImage: matt,
    videoLink: '1027271267',
  },
  {
    firstName: 'Matthew',
    lastName: 'Rowne',
    role: 'Director',
    company: 'The Buy-To-Let Broker',
    quote:
      'Zeus gives us credibility at a time when many competitors don’t have 24/7 support. It’s not just a generic tool — the team worked collaboratively to tailor the product for our business, and that commercial enthusiasm is rare.',
    profileImage: matthew,
    videoLink: '1085634432',
  },
  {
    firstName: 'Vernon',
    lastName: 'Botha',
    role: 'Digital Marketing and Events Manager',
    company: 'Parkopedia',
    quote:
      'Zeus is a game-changer. We’ve worked with other chatbots, and none come close to how intuitive and brand-aligned Zeus is. It qualifies leads faster, saves time, and becomes a true extension of your brand — with the patience of a saint.',
    profileImage: vernon,
    videoLink: '1085633917',
  },
  {
    firstName: 'Stephen',
    lastName: 'Dickinson',
    role: 'Managing Director',
    company: 'Momentum Financial Services',
    quote:
      "Ensuring Momentum Mortgages stands out from the competition meant researching and investing in adding AI to my business in order to provide the best customer experience possible, when clients come to my website it's important we support them 24/7 and I'm delighted in how the Zeus does this for my customers",
    profileImage: stephen,
    videoLink: '',
  },
  {
    firstName: 'Pat',
    lastName: 'Burrows',
    role: 'Marketing Consultant',
    company: 'Pivotal',
    quote:
      'Zeus has transformed our direct-to-consumer strategy by increasing appointment quality, saving over 50% in costs, and enabling 24/7 multilingual engagement — all while seamlessly supporting long-term customer journeys across multiple partner websites.',
    profileImage: pat,
    videoLink: '1089086829',
  },
];
