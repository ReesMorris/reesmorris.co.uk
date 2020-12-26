import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { IDataItem } from '../../models/data-item';
import { getFilesByType, getFile } from '../../lib/mdx';
import Page from '../../components/page';
import Wrapper from '../../components/wrapper';
import Heading from '../../components/heading';
import mdxComponents from '../../components/mdx-components';
import MDXProvider from '../../components/mdx-provider';

interface BlogPostProps {
  post: IDataItem;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const content = hydrate(post.mdxSource, { components: mdxComponents });

  return (
    <Page>
      <Wrapper>
        <Heading>{post.frontMatter.title}</Heading>
        <MDXProvider>{content}</MDXProvider>
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
