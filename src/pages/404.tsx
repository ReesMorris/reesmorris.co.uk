import { Page } from '~/components';
import { FontSize, ForwardLayout, Heading, Text } from '~/ui';

const NotFound = () => {
  return (
    <Page seo={{ canonical: 'https://reesmorris.co.uk' }}>
      <ForwardLayout margin={{ bottom: 1 }}>
        <Heading fontSize={FontSize.Size2}>404 - Not Found</Heading>
      </ForwardLayout>
      <Text>Sorry, but this page doesn&apos;t exist!</Text>
    </Page>
  );
};

export default NotFound;
