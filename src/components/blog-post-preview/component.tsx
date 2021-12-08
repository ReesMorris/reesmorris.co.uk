import {
  FontSize,
  Heading,
  HeadingType,
  Link,
  LinkColor,
  Text,
  TextType,
  ForwardLayout,
  Color
} from '~/ui';
import { MDXMetadata } from '~/utils/mdx';
import { formatDate } from '~/utils/date';

interface BlogPostPreviewProps {
  metadata: MDXMetadata;
}

export const BlogPostPreview = (props: BlogPostPreviewProps) => {
  const { title, slug, summary, date } = props.metadata;

  return (
    <article>
      <header>
        <Link
          href={`/blog/${slug}`}
          color={LinkColor.Inherit}
          colorHover={LinkColor.Inherit}
        >
          <Heading type={HeadingType.H3} size={FontSize.Size5}>
            {title}
          </Heading>
        </Link>
      </header>
      <Text size={FontSize.Size6}>
        <ForwardLayout color={Color.Lighter}>
          <Text type={TextType.Span}>{formatDate(date)} &middot; </Text>
        </ForwardLayout>
        {summary}
      </Text>
    </article>
  );
};
