import styled from '@emotion/styled';
import { FontWeight } from '..';
import { staticThemeVar } from '~/theme';
import { FontSize, HeadingType, TextType, LineHeight } from '../types';
import { ForwardLayout } from '../..';

interface TextStyleProps {
  $weight?: FontWeight;
  $lineHeight?: LineHeight;
}

export interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement> {
  type?: TextType | HeadingType;
  children?: React.ReactNode;
  fontSize?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
}

const ScText = styled.p<TextStyleProps>`
  font-weight: ${({ $weight }) =>
    $weight ? staticThemeVar(`font-weight-${$weight}`) : undefined};
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? staticThemeVar(`line-height-${$lineHeight}`) : undefined};
`;

export const Text = (props: TextProps) => {
  const { type, children, fontSize, weight, lineHeight, ...rest } = props;

  return (
    <ForwardLayout fontSize={fontSize}>
      <ScText
        as={type || TextType.P}
        $weight={weight}
        $lineHeight={lineHeight}
        {...rest}
      >
        {children}
      </ScText>
    </ForwardLayout>
  );
};
