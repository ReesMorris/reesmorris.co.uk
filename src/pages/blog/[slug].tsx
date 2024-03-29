import { GetStaticPaths, GetStaticProps } from 'next';
import { getFile, MDXFile, getFilesInDirectory } from '~/utils/mdx';
import { Page, MDXRemote } from '~/components';
import { Typeset, Heading, Layout } from '~/ui';
import { AuthorRow } from '~/components/pages/blog';

interface BlogPostProps {
  post: MDXFile;
}

export default ({ post }: BlogPostProps) => {
  return (
    <Page
      seo={{
        title: post.metadata.title,
        description: post.metadata.summary,
        canonical: `https://reesmorris.co.uk/blog/${post.metadata.slug}`,
        article: { datePublished: post.metadata.date },
        emoji: '📝'
      }}
    >
      <Heading>{post.metadata.title}</Heading>
      <Layout margin={{ top: 1.5, bottom: 2 }}>
        <AuthorRow metadata={post.metadata} />
      </Layout>
      <Typeset>
        <MDXRemote source={post.source} />
      </Typeset>
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getFilesInDirectory('blog');
  return {
    paths: paths.map(path => ({ params: { slug: path.replace('.mdx', '') } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFile('blog', `${params?.slug}.mdx`);
  return { props: { post } };
};
