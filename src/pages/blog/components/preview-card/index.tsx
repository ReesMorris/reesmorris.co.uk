import {
  FontSize,
  Heading,
  HeadingType,
  Link,
  LinkColor,
  Text,
  TextType,
  ForwardLayout,
  Color,
  LineHeight
} from '~/ui';
import { MDXMetadata } from '~/utils/mdx';
import { formatDate } from '~/utils';

interface PreviewCardProps {
  metadata: MDXMetadata;
}

export const PreviewCard = (props: PreviewCardProps) => {
  const { title, slug, summary, date } = props.metadata;

  return (
    <article>
      <header>
        <ForwardLayout margin={{ bottom: 0.5 }}>
          <Heading
            type={HeadingType.H3}
            fontSize={FontSize.Size5}
            lineHeight={LineHeight.Medium}
          >
            <Link
              href={`/blog/${slug}`}
              color={LinkColor.Inherit}
              colorHover={LinkColor.Inherit}
            >
              {title}
            </Link>
          </Heading>
        </ForwardLayout>
      </header>
      <Text fontSize={FontSize.Size6}>
        <ForwardLayout color={Color.Lighter}>
          <Text type={TextType.Span}>{formatDate(date)} &middot; </Text>
        </ForwardLayout>
        {summary}
      </Text>
    </article>
  );
};
