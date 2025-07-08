import whatsapp from '@/assets/whatsapp-white.svg';
import { DemoWhatsappLink } from '@/components/ui/demo-whatsapp-link';
import { cn } from '@/lib/utils';

export const CTAButton: React.FC = () => {
  return (
    <DemoWhatsappLink
      className={cn(
        'w-14 h-14 bottom-4 right-4 md:w-20 md:h-20 fixed md:bottom-8 md:right-8',
        'rounded-full shadow-md shadow-black/40',
        'bg-center bg-no-repeat bg-wa-primary hover:bg-wa-primary-hover transition-colors'
      )}
      style={{
        backgroundImage: `url(${whatsapp})`,
        backgroundSize: '60%',
      }}
    ></DemoWhatsappLink>
  );
};
