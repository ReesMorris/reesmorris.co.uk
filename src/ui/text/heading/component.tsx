import { Text, TextProps } from '../text';
import { HeadingType, FontWeight, LineHeight } from '../types';

interface HeadingProps extends TextProps {
  type?: HeadingType;
}

export const Heading = (props: HeadingProps) => {
  const { type, children, ...rest } = props;

  return (
    <Text
      type={type || HeadingType.H1}
      weight={props.weight || FontWeight.Bold}
      lineHeight={props.lineHeight || LineHeight.Small}
      {...rest}
    >
      {children}
    </Text>
  );
};
