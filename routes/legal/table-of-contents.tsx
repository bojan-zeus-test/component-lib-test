import slugify from 'slugify';
import { BLOCKS, Document } from '@contentful/rich-text-types';
import React from 'react';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { NavLink } from '@remix-run/react';
import { NAVIGATION_HEIGHT } from '@/components/root/navigation';

interface TableOfContentsProps {
  content: Document;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  return (
    <aside className="order-1 lg:order-2 md:mt-10">
      <ul
        className="space-y-2 sticky"
        style={{
          top: NAVIGATION_HEIGHT + 48,
        }}
      >
        {getHeadersFromRichText(content).map((item, i) => (
          <li key={i}>
            <NavLink to={item.href} className="text-primary hover:underline">
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

function getHeadersFromRichText(document: Document) {
  return document.content
    .filter((item) => item.nodeType === BLOCKS.HEADING_2)
    .map((heading) => {
      const plainText = documentToPlainTextString(heading);

      return {
        text: plainText,
        href: `#${slugify(plainText)}`,
      };
    });
}

export { TableOfContents };
