/* eslint-disable react/display-name */
import React from 'react';
import ThemeProvider from '../../contexts/theme';
import Heading from '../../components/heading';
import Text from '../../components/text';
import LinkWrapper from '../../components/link-wrapper';
import List from '../../components/list';
import ListItem from '../../components/list-item';
import Blockquote from '../../components/blockquote';
import Note from '../../components/note';
import TabList from '../../components/tablist';
import TabPanel from '../../components/tabpanel';

export default {
  // Markdown components
  wrapper: (props: any) => <ThemeProvider {...props} />,
  h1: (props: any) => <Heading as='h1' {...props} />,
  h2: (props: any) => <Heading as='h2' {...props} />,
  h3: (props: any) => <Heading as='h3' {...props} />,
  h4: (props: any) => <Heading as='h4' {...props} />,
  p: (props: any) => <Text as='p' {...props} />,
  a: (props: any) => <LinkWrapper {...props} />,
  ul: (props: any) => <List as='ul' {...props} />,
  ol: (props: any) => <List as='ol' {...props} />,
  li: (props: any) => <ListItem {...props} />,
  blockquote: (props: any) => <Blockquote {...props} />,

  // Custom components
  Note,
  TabList,
  TabPanel
};
