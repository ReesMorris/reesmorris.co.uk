import styled from '@emotion/styled';
import { FontWeight } from '..';
import { staticThemeVar } from '~/theme';
import { FontSize, HeadingType, TextType, LineHeight } from '../types';

interface TextStyleProps {
  $size?: FontSize;
  $weight?: FontWeight;
  $lineHeight?: LineHeight;
}

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type?: TextType | HeadingType;
  children?: React.ReactNode;
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
}

const ScText = styled.p<TextStyleProps>`
  font-size: ${({ $size }) =>
    $size ? staticThemeVar(`font-size-${$size}`) : undefined};
  font-weight: ${({ $weight }) =>
    $weight ? staticThemeVar(`font-weight-${$weight}`) : undefined};
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? staticThemeVar(`line-height-${$lineHeight}`) : undefined};
`;

export const Text = (props: TextProps) => {
  const { type, children, size, weight, lineHeight, ...rest } = props;

  return (
    <ScText
      as={type || TextType.P}
      $size={size}
      $weight={weight}
      $lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </ScText>
  );
};
