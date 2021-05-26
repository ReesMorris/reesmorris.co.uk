import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getFile, getFilesInDirectory, IFile } from '../../utils/mdx';
import components from '../../utils/mdx/components';
import Page from '../../components/page';
import Wrapper from '../../components/wrapper';
import Article from '../../components/article';

interface BlogPostProps {
  post: IFile;
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
      <Wrapper>
        <Article metadata={post.metadata}>
          <MDXRemote
            {...(post.source as MDXRemoteSerializeResult)}
            components={components}
          />
        </Article>
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
