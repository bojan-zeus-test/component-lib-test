import { getPublicEnvVariable } from '@/lib/get-public-env-variable';
import React from 'react';

export const DemoApolloLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement>
> = (props) => {
  const link = getPublicEnvVariable('DEMO_APOLLO_LINK');

  return <a {...props} href={link} target="_blank" />;
};
