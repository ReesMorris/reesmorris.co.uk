import styled from 'styled-components';

interface WrapperProps {
  type?: 'body' | 'header';
}

const Wrapper = styled.div<WrapperProps>`
  width: ${props =>
    (props.type === 'header' && props.theme._consts.widths.header_width) ||
    props.theme._consts.widths.body_width}px;
  margin: 0 auto;
  height: 100%;
  position: relative;

  @media (max-width: ${props =>
      (props.type === 'header' &&
        parseInt(props.theme._consts.widths.header_width) * 1 + 70) ||
      parseInt(props.theme._consts.widths.body_width) * 1 + 70}px) {
    width: 100%;
    padding: 0 3.5rem;
  }
`;

export default { Wrapper };
