import styled from 'styled-components';

interface TextProps {
  design: string;
  bold?: boolean;
}

const Text = styled.p<TextProps>`
  color: ${props => props.theme.colors.secondary};
  font-weight: ${props => (props.bold ? '600' : '400')};
  line-height: 2.4rem;
`;

export default { Text };
