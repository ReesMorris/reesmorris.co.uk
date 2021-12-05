import styled from '@emotion/styled';
import { Text, TextProps } from '../text';
import { HeadingType, FontWeight } from '../types';

interface HeadingProps extends TextProps {
  type?: HeadingType;
}

const ScHeading = styled(Text)``;

export const Heading = (props: HeadingProps) => {
  const { type, children, ...rest } = props;

  return (
    <ScHeading
      type={type || HeadingType.H1}
      weight={props.weight || FontWeight.Bold}
      {...rest}
    >
      {children}
    </ScHeading>
  );
};
