import { Nav, Footer } from '~/components';
import { Layout } from '~/ui';

interface PageProps {
  children?: React.ReactNode;
}

export const Page = (props: PageProps) => {
  return (
    <>
      <Nav />
      <Layout
        width='625px'
        margin={{ x: 'auto' }}
        breakpointMedium={{ width: '100%', padding: { x: 5 } }}
        breakpointSmall={{ padding: { x: 2 } }}
      >
        {props.children}
        <Footer />
      </Layout>
    </>
  );
};
