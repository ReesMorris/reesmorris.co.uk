import { Page } from '~/components';
import { FontSize, ForwardLayout, Heading, Text } from '~/ui';

export default () => {
  return (
    <Page seo={{ canonical: 'https://reesmorris.co.uk' }}>
      <ForwardLayout margin={{ bottom: 1 }}>
        <Heading fontSize={FontSize.Size2}>About Me</Heading>
      </ForwardLayout>
      <ForwardLayout margin={{ bottom: 2 }}>
        <Text>
          Hey, I&apos;m Rees! I&apos;m a full-time React frontend developer,
          JavaScript enthusiast, and coffee drinker living in London.
        </Text>
      </ForwardLayout>
      <ForwardLayout margin={{ bottom: 2 }}>
        <Text>
          I graduated with a degree in Computer Games Programming, but it was
          during my time studying that I discovered a greater passion for
          frontend web development.
        </Text>
      </ForwardLayout>
      <Text>
        I mostly spend my free time listening to indie-pop music, making and
        playing video games, enthusing about new technologies, and coming up
        with daft ideas and schemes for new projects.
      </Text>
    </Page>
  );
};

export default Index;
