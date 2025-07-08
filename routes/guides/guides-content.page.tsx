import { H1 } from '@/components/ui/typography';
import { EntitySys } from 'contentful';
import { Document } from '@contentful/rich-text-types';
import { TableOfContents } from './table-of-contents';
import { parseISO, format } from 'date-fns';
import React from 'react';
import { Layout } from '@/components/root/layout';
import { Contentful } from '@/components/ui/contentful';

export const GuidesContentPage = (props: {
  title?: string;
  content?: Document;
  lastUpdated?: EntitySys['updatedAt'];
}) => {
  const { title, content, lastUpdated } = props;

  if (!content || !lastUpdated) return null;

  return (
    <Layout>
      <div className="mb-4">
        <H1 className="text-[40px] leading-[48px] md:text-[40px] md:leading-[48px] md:mt-0">
          {title}
        </H1>
        <div className="text-sm text-of-gray-400">
          Last updated {format(parseISO(lastUpdated), 'dd/MM/yyyy')}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-20 mb-6">
        <div className="order-2 flex-1">
          <Contentful content={content} />
        </div>
        <TableOfContents content={content} />
      </div>
    </Layout>
  );
};
