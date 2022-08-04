import {
  MDXRemote as NextMDXRemote,
  MDXRemoteSerializeResult
} from 'next-mdx-remote';
import {
  Link,
  LinkProps,
  Note,
  NoteProps,
  TabList,
  TabListProps,
  TabPanel,
  TabPanelProps,
  TabContent,
  TabContentProps
} from '~/ui';

interface MDXRemoteProps {
  source: MDXRemoteSerializeResult;
}

export const MDXRemote = (props: MDXRemoteProps) => {
  const { source, ...rest } = props;

  return (
    <NextMDXRemote
      {...source}
      components={
        {
          a: (props: LinkProps) => <Link {...props} />,
          Note: (props: NoteProps) => <Note {...props} />,
          TabList: (props: TabListProps) => <TabList {...props} />,
          TabPanel: (props: TabPanelProps) => <TabPanel {...props} />,
          TabContent: (props: TabContentProps) => <TabContent {...props} />
        } as never
      }
      {...rest}
    />
  );
};
