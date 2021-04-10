import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ListProps {
  as?: React.ElementType;
}

const List = styled.ul<ListProps>`
  margin: 1rem 0;
  display: block;
  margin-block-start: 1rem;
  margin-block-end: 1.6rem;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 3.2rem;

  ${props =>
    props.as === 'ul' &&
    css`
      & {
        list-style-type: disc;
      }
      & ul {
        list-style-type: circle;
      }
      & ul ul ul {
        list-style-type: square;
      }
    `}

  ${props =>
    props.as === 'ol' &&
    css`
      & {
        list-style-type: decimal;
      }
      & ol {
        list-style-type: lower-roman;
      }
      & ol ol {
        list-style-type: lower-alpha;
      }
    `}
`;

export default { List };
