import styled from 'styled-components';

interface HeadingProps {
  as: string;
  design: string;
}

const Heading = styled.h1<HeadingProps>`
  font-weight: 700;
  color: ${props => props.theme.colors.heading};
  font-size: ${props =>
    (props.design === 'h1' && '4.8rem') ||
    (props.design === 'h2' && '3.6rem') ||
    (props.design === 'h3' && '3.0rem') ||
    '3rem'};
  line-height: ${props =>
    (props.design === 'h1' && '5.1rem') ||
    (props.design === 'h2' && '3.9rem') ||
    (props.design === 'h3' && '3.3rem') ||
    '3.3rem'};
  margin-bottom: ${props =>
    (props.design === 'h1' && '2.5rem') ||
    (props.design === 'h2' && '2rem') ||
    (props.design === 'h3' && '1.5rem') ||
    '1rem'};
`;

export default { Heading };
