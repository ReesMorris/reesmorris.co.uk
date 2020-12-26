/* eslint-disable react/display-name */
import React from 'react';
import { MDXProvider as ActualMDXProvider } from '@mdx-js/react';
import Heading from '../heading';
import Text from '../text';
import LinkWrapper from '../link-wrapper';
import List from '../list';
import ListItem from '../list-item';

interface MDXProviderProps {
  children: React.ReactNode;
}

const MDXProvider: React.FC<MDXProviderProps> = ({ children }) => {
  const components = {
    h1: props => <Heading as='h1' {...props} />,
    h2: props => <Heading as='h2' {...props} />,
    h3: props => <Heading as='h3' {...props} />,
    h4: props => <Heading as='h4' {...props} />,
    p: props => <Text as='p' {...props} />,
    b: props => <Text as='span' bold {...props} />,
    a: props => <LinkWrapper {...props} />,
    ul: props => <List as='ul' {...props} />,
    ol: props => <List as='ol' {...props} />,
    li: props => <ListItem {...props} />
  };

  return (
    <ActualMDXProvider components={components}>{children}</ActualMDXProvider>
  );
};

export default MDXProvider;
