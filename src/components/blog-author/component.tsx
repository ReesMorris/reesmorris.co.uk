import {
  Display,
  Layout,
  Image,
  BorderRadius,
  Text,
  FontSize,
  AlignItems,
  Color
} from '~/ui';
import { MDXMetadata } from '~/utils/mdx';
import { formatDate } from '~/utils';
import ReesMorris from '~/images/rees-morris.png';

export interface BlogAuthorProps {
  metadata: MDXMetadata;
}

export const BlogAuthor = (props: BlogAuthorProps) => {
  const { metadata } = props;

  return (
    <Layout
      display={Display.Flex}
      gap={1}
      fontSize={FontSize.Size6}
      color={Color.Lighter}
      alignItems={AlignItems.Center}
    >
      <Image
        src={ReesMorris}
        width={25}
        height={25}
        alt='Rees Morris'
        radius={BorderRadius.Round}
      />
      <Text>Rees Morris &middot; {formatDate(metadata.date)}</Text>
    </Layout>
  );
};
