import styled from 'styled-components';

interface WrapperProps {
  width?: 'body' | 'header';
}

const Wrapper = styled.div<WrapperProps>`
  width: ${props =>
    (props.width === 'header' && props.theme._consts.widths.header_width) ||
    props.theme._consts.widths.body_width};
  margin: 0 auto;
  height: 100%;
  position: relative;
`;

export default { Wrapper };
