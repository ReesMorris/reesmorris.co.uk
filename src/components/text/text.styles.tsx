import styled from 'styled-components';

interface TextProps {
  design: string;
  bold?: boolean;
  dark?: boolean;
}

const Text = styled.p<TextProps>`
  color: ${props =>
    (props.dark && props.theme.colors.primary) || props.theme.colors.secondary};
  font-weight: ${props => (props.bold ? '600' : '400')};
  line-height: 2.4rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default { Text };
