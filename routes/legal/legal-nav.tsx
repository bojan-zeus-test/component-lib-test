import { NavLink } from '@remix-run/react';
import { Paths } from '@/constants/paths';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import { cn } from '@/lib/utils';
import { NAVIGATION_HEIGHT } from '@/components/root/navigation';

export const LegalNav = () => {
  return (
    <nav
      className={cn(
        'hidden md:block sticky text-primary bg-background h-10 text-sm',
        'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/6'
      )}
      style={{ top: NAVIGATION_HEIGHT }}
    >
      <ul className="flex gap-8">
        <li>
          <NavLink to={Paths.TermsAndConditions}>Terms & Conditions</NavLink>
        </li>
        <li>
          <NavLink to={Paths.PrivacyPolicy}>Privacy Policy</NavLink>
        </li>
        <li>
          <NavLink to={Paths.CookiePolicy}>Cookie Policy</NavLink>
        </li>
        <li>
          <NavLink to={Paths.GDPR}>GDPR</NavLink>
        </li>
        <li>
          <NavLink to={Paths.FCAComplianceDocument}>
            FCA Compliance Document
          </NavLink>
        </li>
        <li>
          <NavLink to={Paths.DataSecurity}>Data Security</NavLink>
        </li>
        <li>
          <NavLink to={Paths.Services}>Services</NavLink>
        </li>
        <li>
          <NavLink to={Paths.ServiceLevelAgreement}>
            Service Level Agreement
          </NavLink>
        </li>
      </ul>
      <Separator className="mt-2" />
    </nav>
  );
};
