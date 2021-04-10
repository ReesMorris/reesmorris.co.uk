import styled from '@emotion/styled';
import { consts } from '../../themes';

interface WrapperProps {
  type?: 'body' | 'header';
}

const Wrapper = styled.div<WrapperProps>`
  width: ${props =>
    (props.type === 'header' && consts.header_width) || consts.body_width}px;
  margin: 0 auto;
  height: 100%;
  position: relative;

  @media (max-width: ${props =>
      (props.type === 'header' && consts.header_width + 70) ||
      consts.body_width + 70}px) {
    width: 100%;
    padding: 0 3.5rem;
  }
`;

export default { Wrapper };
