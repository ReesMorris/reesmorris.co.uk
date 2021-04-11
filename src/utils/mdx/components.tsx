/* eslint-disable react/display-name */
import React from 'react';
import Heading from '../../components/heading';
import Text from '../../components/text';
import LinkWrapper from '../../components/link-wrapper';
import List from '../../components/list';
import ListItem from '../../components/list-item';
import Blockquote from '../../components/blockquote';
import Note from '../../components/note';
import TabList from '../../components/tablist';
import TabPanel from '../../components/tabpanel';
import Pre from '../../components/pre';

export default {
  // Markdown components
  h1: (props: never) => <Heading as='h1' {...props} />,
  h2: (props: never) => <Heading as='h2' {...props} />,
  h3: (props: never) => <Heading as='h3' {...props} />,
  h4: (props: never) => <Heading as='h4' {...props} />,
  p: (props: never) => <Text as='p' {...props} />,
  a: (props: never) => <LinkWrapper {...props} />,
  ul: (props: never) => <List as='ul' {...props} />,
  ol: (props: never) => <List as='ol' {...props} />,
  li: (props: never) => <ListItem {...props} />,
  blockquote: (props: never) => <Blockquote {...props} />,
  pre: (props: never) => <Pre {...props} />,

  // Custom components
  Note,
  TabList,
  TabPanel
};
