import styled from 'styled-components';

interface HeadingProps {
  design: string;
}

const Heading = styled.h1<HeadingProps>`
  font-weight: 700;
  color: ${props => props.theme.colors.heading};
  font-size: ${props =>
    (props.design === 'h1' && '4.8rem') ||
    (props.design === 'h2' && '3.6rem') ||
    (props.design === 'h3' && '3.0rem') ||
    (props.design === 'h4' && '2.0rem') ||
    '2.0rem'};
  line-height: ${props =>
    (props.design === 'h1' && '5.1rem') ||
    (props.design === 'h2' && '3.9rem') ||
    (props.design === 'h3' && '3.3rem') ||
    (props.design === 'h3' && '2.3rem') ||
    '2.3rem'};
  margin-bottom: ${props =>
    (props.design === 'h1' && '1.2rem') ||
    (props.design === 'h2' && '1.0rem') ||
    (props.design === 'h3' && '0.8rem') ||
    (props.design === 'h4' && '0.6rem') ||
    '1rem'};
`;

export default { Heading };
