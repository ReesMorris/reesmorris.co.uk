import styled from 'styled-components';

interface TextProps {
  as: React.ElementType;
  design: string;
  bold?: boolean;
  dark?: boolean;
}

const Text = styled.p<TextProps>`
  color: ${props =>
    (props.dark && props.theme.colors.primary) || props.theme.colors.secondary};
  font-weight: ${props => (props.bold ? '600' : '400')};
  line-height: 2.5rem;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export default { Text };
