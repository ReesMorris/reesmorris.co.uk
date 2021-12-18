import { Nav, Footer, SEO, SEOProps } from '~/components';
import { Layout } from '~/ui';

interface PageProps {
  seo?: SEOProps;
  children?: React.ReactNode;
}

export const Page = (props: PageProps) => {
  return (
    <>
      <SEO {...props.seo} />
      <Nav />
      <Layout
        width='625px'
        margin={{ x: 'auto' }}
        breakpointMedium={{ width: '100%', padding: { x: 5 } }}
        breakpointSmall={{ padding: { x: 2 } }}
      >
        <main>{props.children}</main>
        <Footer />
      </Layout>
    </>
  );
};
