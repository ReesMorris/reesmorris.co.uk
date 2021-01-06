import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import BlogCard from '../../components/blog-card';
import Container from '../../components/container';
import Heading from '../../components/heading';
import Input from '../../components/input';
import NoScript from '../../components/noscript';
import Page from '../../components/page';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import { getFiles } from '../../lib/mdx';
import { IDataItem } from '../../models/data-item';
import SEO from '../../seo';

interface BlogProps {
  posts: IDataItem[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const [searchInput, setSearchInput] = useState('');

  const sorted = posts
    .filter(post =>
      post.frontMatter.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort(
      (a, b) =>
        Number(new Date(b.frontMatter.date)) -
        Number(new Date(a.frontMatter.date))
    );

  return (
    <Page>
      <SEO
        title='Blog'
        description='My takes on technology, gaming, the future, and everything between.'
        canonical='https://reesmorris.co.uk/blog'
      />
      <Wrapper>
        <Container>
          <Container small>
            <Heading>Blog</Heading>
            <Text>
              I love to write about technology, games, and everything inbetween.
              Feel free to browse any of the {posts.length} posts I&apos;ve
              written to date.
            </Text>
            <NoScript>
              <style>{`#search {display: none;}`}</style>
            </NoScript>
          </Container>
          <Input
            id='search'
            iconLeft={{ icon: 'search' }}
            placeholder='Search articles'
            onChange={e => setSearchInput(e.target.value)}
          />
        </Container>

        <Container>
          <Heading as='h2'>All Posts</Heading>
          {sorted.map(post => (
            <BlogCard
              key={post.frontMatter.title}
              frontMatter={post.frontMatter}
            />
          ))}
        </Container>
      </Wrapper>
    </Page>
  );
};
export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getFiles('blog');
  return { props: { posts } };
};
