import sam from '@/assets/team/sam.jpg';
import mladen from '@/assets/team/mladen.jpg';
import matea from '@/assets/team/matea.jpg';
import linkedin from '@/assets/linkedin.svg';
import { Button } from '@/components/ui/button';

type TeamMemberInfo = {
  name: string;
  title: string;
  linkedinUrl?: string;
  bio: string;
  image: string;
};

const managementTeamInfo: TeamMemberInfo[] = [
  {
    name: 'Sam Oliver',
    title: 'Chief Executive Officer',
    bio:
      'Sam Oliver is a Scottish tech entrepreneur, property investor, and author who launched his first startup at just 20 years old. He’s known for building Lead.Pro, a marketing start-up sold to private equity in a multi million pound cash deal.\n' +
      'His latest venture, Open-Fi, provides  WhatsApp AI Sales Agents to increase web traffic conversion. Sam’s leadership experiences include serving as a board advisor of Nutri AI, a health tech startup, and The Turing Trust, a charity providing technology to schools in sub-Saharan Africa. Outside of his entrepreneurial life, Sam enjoys traveling, exercise, and a good sci-fi book.',
    image: sam,
    linkedinUrl: 'https://www.linkedin.com/in/sam0liver/',
  },
  {
    name: 'Mladen Pećanac',
    title: 'Chief Technical Officer',
    bio: "Mladen is an experienced technology leader with a Master's degree in software engineering and over a decade of expertise in full-stack developmentand working with cutting-edge technologies. As Chief Technology Officer at Zeus, Mladen oversees the company’s technology strategy, driving innovation in product development and ensuring the technical infrastructure supports seamless AI-powered customer experiences.",
    image: mladen,
    linkedinUrl: 'https://www.linkedin.com/in/mladen-pe%C4%87anac-b8a6317/',
  },
  {
    name: 'Matea Radovan',
    title: 'Chief Operations Officer',
    bio: "Matea is a results-driven operations leader with a strong background in computer science and deep product and technical skills. She spent the last few years successfully scaling Lead.Pro revenue to >£127k MRR. At Zeus, Matea oversees the company's day-to-day operations, ensuring efficient processes and driving operational excellence. She plays a key role in aligning the product and technical teams to deliver seamless, scalable solutions that meet customer needs and foster business growth.",
    image: matea,
  },
];

export const ManagementTeam = () => {
  return (
    <div className="grid grid-cols-1 mt-8 md:mt-14 mb-8 md:mb-14 md:grid-cols-3 gap-16">
      {managementTeamInfo.map((teamMember, index) => (
        <TeamMember key={index} {...teamMember} />
      ))}
    </div>
  );
};

export const TeamMember: React.FC<TeamMemberInfo> = ({
  name,
  title,
  bio,
  image,
  linkedinUrl,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={image}
        alt={name}
        className="w-[124px] h-[124px] rounded-full self-center mb-2"
      />
      <h3 className="text-primary text-center text-2xl">{name}</h3>
      <p className="text-center text-lg text-of-gray-300">{title}</p>
      {linkedinUrl && (
        <Button
          variant="link"
          className="w-8 p-0 self-center opacity-60 hover:opacity-100"
          asChild
        >
          <a href={linkedinUrl} target="_blank">
            <img src={linkedin} width={32} height={32} alt="linkedin" />
          </a>
        </Button>
      )}
      {!linkedinUrl && <div className="w-8 md:h-10 self-center" />}
      <p className="text-justify font text-of-gray-200">{bio}</p>
    </div>
  );
};
