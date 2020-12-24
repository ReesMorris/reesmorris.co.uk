import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/blog-card';
import Container from '../../components/container';
import Form from '../../components/form';
import Heading from '../../components/heading';
import Input from '../../components/input';
import NoScript from '../../components/noscript';
import Page from '../../components/page';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import { getFilesWithFrontMatter } from '../../lib/mdx';
import { IFrontMatter } from '../../models/front-matter';

interface BlogProps {
  posts: IFrontMatter[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const [searchInput, setSearchInput] = useState('');

  const sorted = posts
    .filter(post =>
      post.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return (
    <Page>
      <Wrapper>
        <Container>
          <Container small>
            <Heading>Blog</Heading>
            <Text>
              I love to write about technology, games, and everything inbetween.
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
              key={post.title}
              title={post.title}
              summary={post.summary}
              slug={post.slug}
            />
          ))}
        </Container>
      </Wrapper>
    </Page>
  );
};
export default Blog;

export const getStaticProps = async ctx => {
  const posts: IFrontMatter[] = await getFilesWithFrontMatter('blog');
  return { props: { posts } };
};
