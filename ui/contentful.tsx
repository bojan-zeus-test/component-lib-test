import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark as codeStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import slugify from 'slugify';
import { NavLink } from '@remix-run/react';
import { Link } from 'lucide-react';
import React, { FC } from 'react';
import {
  ContentfulH2,
  ContentfulH3,
  ContentFulP,
} from '@/components/ui/contentful-typography';

const options: Options = {
  renderMark: {
    [MARKS.CODE]: (children) => {
      console.log(children);
      return (
        <SyntaxHighlighter language="json" style={codeStyle}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
    // [MARKS.CODE]: (children) => <pre className="text-red-500">{children}</pre>,
    [MARKS.BOLD]: (children) => <span className="font-bold">{children}</span>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        className="underline underline-offset-4"
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),

    [BLOCKS.HEADING_2]: (node, children) => {
      const plainText = documentToPlainTextString(node);
      return (
        <ContentfulH2 className="scroll-mt-[140px]" id={slugify(plainText)}>
          {children}
          <NavLink
            to={`#${slugify(plainText)}`}
            className="text-of-primary-500 hover:text-of-primary-100 ml-2 transition-colors"
          >
            <Link className="hidden md:inline" />
          </NavLink>
        </ContentfulH2>
      );
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return (
        <ContentfulH3 className="" id={node.data.target}>
          {children}
        </ContentfulH3>
      );
    },
    [BLOCKS.UL_LIST]: (_node, children) => {
      return <ul className="list-disc pl-6 py-4 flex flex-col">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (_node, children) => {
      return <li>{children}</li>;
    },
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      return <ContentFulP>{children}</ContentFulP>;
    },
    [BLOCKS.TABLE_CELL]: (_node, children) => {
      return <td className="border border-of-gray-500 p-4 pb-0">{children}</td>;
    },
  },
};

export interface ContentfulProps {
  content: Document;
}

export const Contentful: FC<ContentfulProps> = ({ content }) => {
  return <>{documentToReactComponents(content, options)}</>;
};
