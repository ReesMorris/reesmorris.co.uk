import React from 'react';
import { IFrontMatter } from '../../models/front-matter';
import Heading from '../heading';
import Text from '../text';
import Styles from './blog-card.styles';

interface BlogCardProps {
  frontMatter: IFrontMatter;
}

const BlogCard: React.FC<BlogCardProps> = ({ frontMatter }) => {
  const { title, summary, slug } = frontMatter;

  return (
    <Styles.BlogCard>
      <Styles.Header>
        <Styles.Link href={`/blog/${slug}`}>
          <Heading as='h3' design='h4'>
            {title}
          </Heading>
        </Styles.Link>
      </Styles.Header>
      <Text>{summary}</Text>
    </Styles.BlogCard>
  );
};

export default BlogCard;
