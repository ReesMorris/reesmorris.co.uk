import styled from '@emotion/styled';

interface ContainerProps {
  small?: boolean;
}
const Container = styled.div<ContainerProps>`
  &:not(:last-child) {
    margin-bottom: ${props => (props.small && '1.5rem') || '3.5rem'};
  }
`;

export default { Container };
