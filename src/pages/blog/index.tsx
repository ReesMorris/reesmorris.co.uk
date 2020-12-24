import BlogCard from '../../components/blog-card';
import Container from '../../components/container';
import Heading from '../../components/heading';
import Page from '../../components/page';
import Text from '../../components/text';
import Wrapper from '../../components/wrapper';
import { getFilesWithFrontMatter } from '../../lib/mdx';
import { IFrontMatter } from '../../models/front-matter';

interface BlogProps {
  posts: IFrontMatter[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Page>
      <Wrapper>
        <Container>
          <Heading>Blog</Heading>
          <Text>Blog page</Text>
        </Container>

        <Container>
          <Heading as='h2'>All Posts</Heading>
          {posts.map(post => (
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

export const getStaticProps = async () => {
  const posts: IFrontMatter[] = await getFilesWithFrontMatter('blog');
  return { props: { posts } };
};
