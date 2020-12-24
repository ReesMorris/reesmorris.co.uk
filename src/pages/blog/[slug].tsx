import React from 'react';
import { MdxRemote } from 'next-mdx-remote/types';
import hydrate from 'next-mdx-remote/hydrate';
import Heading from '../../components/heading';
import Page from '../../components/page';
import Wrapper from '../../components/wrapper';
import { getFiles, getFileBySlug } from '../../lib/mdx';
import { IFrontMatter } from '../../models/front-matter';
import MDXProvider from '../../components/mdx-provider';

interface BlogPageProps {
  mdxSource: MdxRemote.Source;
  frontMatter: IFrontMatter;
}

const components: MdxRemote.Components = { Heading };
const BlogPage: React.FC<BlogPageProps> = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, { components });

  return (
    <Page>
      <Wrapper>
        <Heading>{frontMatter.title}</Heading>
        <MDXProvider>{content}</MDXProvider>
      </Wrapper>
    </Page>
  );
};

export const getStaticPaths = async () => {
  const posts = await getFiles('blog');

  return {
    paths: posts.map(p => ({ params: { slug: p.replace(/\.mdx/, '') } })),
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getFileBySlug('blog', `${params.slug}.mdx`);
  return { props: post };
};

export default BlogPage;
