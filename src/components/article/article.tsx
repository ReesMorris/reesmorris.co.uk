import React from 'react';
import { formatDate } from '../../utils/date';
import { IFileMetadata } from '../../utils/mdx';
import Styles from './article.styles';

interface ArticleProps {
  metadata: IFileMetadata;
  children: React.ReactNode;
}

const Article = ({ metadata, children }: ArticleProps) => {
  return (
    <Styles.Article>
      <Styles.Title>{metadata.title}</Styles.Title>
      <Styles.Metadata>
        <Styles.Avatar src='../../images/avatar.jpg' alt='Rees Morris' />
        Rees Morris &middot; {formatDate(metadata.date)}
      </Styles.Metadata>

      <Styles.Section>{children}</Styles.Section>
    </Styles.Article>
  );
};

export default Article;