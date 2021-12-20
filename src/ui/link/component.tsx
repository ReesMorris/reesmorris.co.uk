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
  $underline?: LinkUnderline;
  $color?: LinkColor;
  $colorHover?: LinkColor;
}
export interface LinkProps
  extends LinkStyleProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  href: string;
  children?: React.ReactNode;
  underline?: LinkUnderline;
  color?: LinkColor;
  colorHover?: LinkColor;
}

const ScLink = styled.a<LinkStyleProps>`
  color: ${({ $color }) =>
    ($color === LinkColor.Inherit && 'inherit') || themeVar('color-text-link')};
  text-decoration: ${({ $underline }) =>
    ($underline === LinkUnderline.Always && 'underline') || 'none'};

  &:hover {
    color: ${({ $colorHover }) =>
      ($colorHover === LinkColor.Inherit && 'inherit') ||
      themeVar('color-text-link-hover')};
    text-decoration: ${({ $underline }) =>
      ($underline === LinkUnderline.None && 'none') || 'underline'};
  }
`;

export const Link = (props: LinkProps) => {
  const { href, children, underline, color, colorHover, ...rest } = props;

  // Pull style props
  const styleProps: LinkStyleProps = {
    $underline: underline,
    $color: color,
    $colorHover: colorHover
  };

  // Internal link: URL begins with a /, ?, or #
  if (href.match(/^[\/|?|#].*/)) {
    return (
      <NextLink href={href} passHref>
        <ScLink href={href} {...styleProps} {...rest}>
          {children}
        </ScLink>
      </NextLink>
    );
  }

  // External link
  return (
    <ScLink
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      {...styleProps}
      {...rest}
    >
      {children}
    </ScLink>
  );
};
