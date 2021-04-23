import styled from '@emotion/styled';
import { themeVar } from '../../themes';
import { TextProps } from './text';

const Text = styled.p<Partial<TextProps>>`
  color: ${props =>
    (props.dark && themeVar('color-primary')) || themeVar('color-secondary')};
  font-weight: ${props => (props.bold ? '600' : '400')};
  line-height: ${props => (props.thinHeight && '2.5rem') || '3.2rem'};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default { Text };
