import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { IDataItem } from '../../models/data-item';
import { getFilesByType, getFile } from '../../lib/mdx';
import Page from '../../components/page';
import Wrapper from '../../components/wrapper';
import Heading from '../../components/heading';

interface BlogPostProps {
  post: IDataItem;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <Page>
      <Wrapper>
        <Heading>{post.frontMatter.title}</Heading>
        {post.mdxSource.renderedOutput}
      </Wrapper>
    </Page>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getFilesByType('blog');
  return {
    paths: paths.map(p => ({ params: { slug: p.replace(/\.mdx/, '') } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFile('blog', `${params?.slug}.mdx`);
  return { props: { post } };
};
