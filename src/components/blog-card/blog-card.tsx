import React from 'react';
import { IFileMetadata } from '../../utils/mdx/mdx';
import Heading from '../heading';
import Text from '../text';
import Styles from './blog-card.styles';

interface BlogCardProps {
  metadata: IFileMetadata;
}

const BlogCard = ({ metadata }: BlogCardProps) => {
  const { title, summary, slug } = metadata;

  return (
    <Styles.BlogCard>
      <Styles.Header>
        <Styles.Link href={`/blog/${slug}`}>
          <Heading as='h3' design='h4'>
            {title}
          </Heading>
        </Styles.Link>
      </Styles.Header>
      <Text thinHeight>{summary}</Text>
    </Styles.BlogCard>
  );
};

export default BlogCard;
