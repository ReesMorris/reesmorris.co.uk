import styled from '@emotion/styled';
import NextLink from 'next/link';
import { themeVar } from '~/theme';

export enum LinkUnderline {
  None = 'none',
  Hover = 'hover',
  Always = 'always'
}
export enum LinkColor {
  Inherit = 'inherit'
}

interface LinkStyleProps {
  underline?: LinkUnderline;
  color?: LinkColor;
  colorHover?: LinkColor;
}
interface LinkProps extends LinkStyleProps {
  href: string;
  children?: React.ReactNode;
}

const ScLink = styled.a<LinkStyleProps>`
  color: ${({ color }) =>
    (color === LinkColor.Inherit && 'inherit') || themeVar('color-text-link')};
  text-decoration: ${({ underline }) =>
    (underline === LinkUnderline.Always && 'underline') || 'none'};

  &:hover {
    color: ${({ colorHover }) =>
      (colorHover === LinkColor.Inherit && 'inherit') ||
      themeVar('color-text-link-hover')};
    text-decoration: ${({ underline }) =>
      (underline === LinkUnderline.None && 'none') || 'underline'};
  }
`;

export const Link = (props: LinkProps) => {
  const { href, children, ...rest } = props;

  // Either an anchor link (#), begins with query parameter (?), or an internal link (/)
  if (href.match(/#.*/) || href.match(/^\?.*/) || href.match(/^\/.*/)) {
    return (
      <NextLink href={href} passHref>
        <ScLink {...rest}>{children}</ScLink>
      </NextLink>
    );
  }

  // External link
  return (
    <ScLink href={href} target='_blank' rel='noopener noreferrer' {...rest}>
      {children}
    </ScLink>
  );
};
