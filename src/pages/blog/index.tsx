import { GetStaticProps } from 'next';
import { useMemo, useState } from 'react';
import { Page } from '~/components';
import {
  FontSize,
  Heading,
  Text,
  Layout,
  Input,
  BorderRadius,
  HeadingType,
  ForwardLayout,
  Color
} from '~/ui';
import { getFiles, MDXFile } from '~/utils/mdx';
import { PreviewCard } from './components';

interface BlogProps {
  posts: MDXFile[];
}

const Blog = ({ posts }: BlogProps) => {
  const [input, setInput] = useState('');

  // filter posts by input
  const filtered = useMemo(
    () =>
      posts.filter(post =>
        post.metadata.title.toLowerCase().includes(input.toLowerCase())
      ),
    [posts, input]
  );

  return (
    <Page
      seo={{
        title: 'Blog',
        description:
          'My takes on technology, gaming, the future, and everything between.',
        canonical: 'https://reesmorris.co.uk/blog',
        emoji: '📝'
      }}
    >
      <Heading fontSize={FontSize.Size2}>Blog</Heading>
      <Text>
        I love to write about technology, games, and everything inbetween. Feel
        free to browse any of the {posts.length} posts I&apos;ve written to
        date.
      </Text>

      <Layout margin={{ y: 2 }}>
        <Input
          iconLeft={{ name: 'search' }}
          radius={BorderRadius.Large}
          type='text'
          placeholder='Search articles'
          onChange={e => setInput(e.target.value)}
        />
      </Layout>

      <Layout margin={{ top: 2.5 }}>
        <ForwardLayout margin={{ bottom: 1 }}>
          <Heading type={HeadingType.H2} fontSize={FontSize.Size3}>
            All Posts
          </Heading>
        </ForwardLayout>

        {filtered.length > 0 ? (
          filtered.map(({ metadata }) => (
            <Layout key={metadata.date} margin={{ bottom: 2 }}>
              <PreviewCard metadata={metadata} />
            </Layout>
          ))
        ) : (
          <ForwardLayout color={Color.Lighter}>
            <Text>No posts found titled &quot;{input}&quot;</Text>
          </ForwardLayout>
        )}
      </Layout>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFiles('blog');
  return { props: { posts } };
};

export default Blog;
