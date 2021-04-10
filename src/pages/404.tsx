import React from 'react';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';
import Wrapper from '../components/wrapper';

const Index = () => {
  return (
    <Page>
      <Wrapper>
        <Heading>404 - Not Found</Heading>
        <Text>Sorry, but this page doesn&apos;t exist!</Text>
      </Wrapper>
    </Page>
  );
};

export default Index;
