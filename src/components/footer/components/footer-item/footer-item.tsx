import { Display, ForwardLayout, Link, IconButton, IconProps } from '~/ui';

interface FooterItemProps {
  href: string;
  label: string;
  icon: IconProps;
}

export const FooterItem = (props: FooterItemProps) => {
  return (
    <ForwardLayout display={Display.Block}>
      <Link href={props.href} aria-label={props.label}>
        <IconButton as='div' icon={props.icon} />
      </Link>
    </ForwardLayout>
  );
};
