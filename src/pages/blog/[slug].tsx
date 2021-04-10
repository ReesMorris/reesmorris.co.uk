import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import { getFile, getFilesInDirectory, IFile } from '../../utils/mdx';
import components from '../../utils/mdx/components';
import Page from '../../components/page';
import SEO from '../../seo';
import Wrapper from '../../components/wrapper';
import Heading from '../../components/heading';

interface BlogPostProps {
  post: IFile;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const content = hydrate(post.source as MdxRemote.Source, {
    components
  });

  return (
    <Page>
      <SEO
        title={post.metadata.title}
        description={post.metadata.summary}
        canonical={`https://reesmorris.co.uk/blog/${post.metadata.slug}`}
        type='article'
        publishedTime={post.metadata.date}
        emoji='📝'
      />
      <Wrapper>
        <article>
          <Heading>{post.metadata.title}</Heading>
          {content}
        </article>
      </Wrapper>
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
  const post = await getFile('blog', `${params?.slug}.mdx`, true);
  return { props: { post } };
};

export default BlogPost;
