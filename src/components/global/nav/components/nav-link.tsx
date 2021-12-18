import { ForwardLayout, Link, LinkColor, LinkUnderline } from '~/ui';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = (props: NavLinkProps) => {
  return (
    <ForwardLayout padding={{ x: 1, y: 1 }}>
      <Link
        href={props.href}
        underline={LinkUnderline.Hover}
        color={LinkColor.Inherit}
        colorHover={LinkColor.Inherit}
      >
        {props.children}
      </Link>
    </ForwardLayout>
  );
};
