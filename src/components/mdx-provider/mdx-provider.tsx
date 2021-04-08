/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import { MDXProvider as ActualMDXProvider } from '@mdx-js/react';
import Heading from '../heading';
import Text from '../text';
import LinkWrapper from '../link-wrapper';
import List from '../list';
import ListItem from '../list-item';
import Blockquote from '../blockquote';

interface MDXProviderProps {
  children: React.ReactNode;
}

const MDXProvider = ({ children }: MDXProviderProps) => {
  const components = {
    h1: (props: any) => <Heading as='h1' {...props} />,
    h2: (props: any) => <Heading as='h2' {...props} />,
    h3: (props: any) => <Heading as='h3' {...props} />,
    h4: (props: any) => <Heading as='h4' {...props} />,
    p: (props: any) => <Text as='p' {...props} />,
    a: (props: any) => <LinkWrapper {...props} />,
    ul: (props: any) => <List as='ul' {...props} />,
    ol: (props: any) => <List as='ol' {...props} />,
    li: (props: any) => <ListItem {...props} />,
    blockquote: (props: any) => <Blockquote {...props} />
  };

  return (
    <ActualMDXProvider components={components}>{children}</ActualMDXProvider>
  );
};

export default MDXProvider;
