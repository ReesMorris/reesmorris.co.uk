import styled from '@emotion/styled';
import { FontWeight } from '..';
import { staticThemeVar } from '~/theme';
import { FontSize, HeadingType, TextType } from '../types';

interface TextStyleProps {
  $size?: FontSize;
  $weight?: FontWeight;
}

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type?: TextType | HeadingType;
  size?: FontSize;
  weight?: FontWeight;
  children?: React.ReactNode;
}

const ScText = styled.p<TextStyleProps>`
  font-size: ${({ $size }) =>
    $size ? staticThemeVar(`font-size-${$size}`) : undefined};
  font-weight: ${({ $weight }) =>
    $weight ? staticThemeVar(`font-weight-${$weight}`) : undefined};
`;

export const Text = (props: TextProps) => {
  const { type, children, size, weight, ...rest } = props;

  return (
    <ScText as={type || TextType.P} $size={size} $weight={weight} {...rest}>
      {children}
    </ScText>
  );
};
