import React from 'react';
import Heading from '../heading';
import Text from '../text';
import Styles from './blog-card.styles';

interface BlogCardProps {
  title: string;
  summary: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, slug }) => {
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
