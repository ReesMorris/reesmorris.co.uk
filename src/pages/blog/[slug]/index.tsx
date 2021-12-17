import { GetStaticPaths, GetStaticProps } from 'next';
import { getFile, MDXFile, getFilesInDirectory } from '~/utils/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { Page } from '~/components';
import { AuthorRow } from './components';
import {
  Typeset,
  Link,
  LinkProps,
  Heading,
  Layout,
  Note,
  NoteProps
} from '~/ui';

interface BlogPostProps {
  post: MDXFile;
}

const BlogPost = ({ post }: BlogPostProps) => {
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
        <MDXRemote
          {...post.source}
          components={{
            a: (props: LinkProps) => <Link {...props} />,
            Note: (props: NoteProps) => <Note {...props} />
          }}
        />
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

export default BlogPost;
