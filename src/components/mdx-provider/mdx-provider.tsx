import React from 'react';
import { MDXProvider as ActualMDXProvider } from '@mdx-js/react';
import Heading from '../heading';
import LinkWrapper from '../link-wrapper';
import Text from '../text';

const MDXProvider = (props: any) => {
  const state = {
    h1: props => <Heading as='h1' {...props} />,
    h2: props => <Heading as='h2' {...props} />,
    h3: props => <Heading as='h3' {...props} />,
    h4: props => <Heading as='h4' {...props} />,
    p: props => <Text as='p' {...props} />,
    a: props => <LinkWrapper {...props} />,
    img: props => <image {...props} />
  };

  return (
    <ActualMDXProvider components={state}>
      <div {...props} />
    </ActualMDXProvider>
  );
};

export default MDXProvider;
