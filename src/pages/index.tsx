import React from 'react';
import Container from '../components/container';
import Heading from '../components/heading';
import Page from '../components/page';
import Text from '../components/text';
import Wrapper from '../components/wrapper';

const Index = () => {
  return (
    <Page seo={{ canonical: 'https://reesmorris.co.uk' }}>
      <Wrapper>
        <Container>
          <Heading>About Me</Heading>
          <Text>
            Hey, I&apos;m Rees! I&apos;m a full-time React frontend developer,
            JavaScript enthusiast, and coffee drinker living in London.
          </Text>
          <Text>
            I graduated with a degree in Computer Games Programming, but it was
            during university that I found an equal passion for front-end web
            development, leading to the most common question I&apos;m asked:
            &quot;why frontend?&quot;
          </Text>
          <Text>
            I mostly spend my free time listening to indie-pop music, making and
            playing video games, enthusing about new technologies, and coming up
            with daft ideas and schemes for new projects.
          </Text>
        </Container>
      </Wrapper>
    </Page>
  );
};

export default Index;
