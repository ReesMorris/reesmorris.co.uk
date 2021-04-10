import styled from '@emotion/styled';

interface HeadingProps {
  design: React.ElementType | string;
}

const Heading = styled.h1<HeadingProps>`
  font-weight: 700;
  color: ${props => props.theme.colors.heading};

  margin-bottom: ${props =>
    (props.design === 'h1' && '1.6rem') ||
    (props.design === 'h2' && '1.0rem') ||
    (props.design === 'h3' && '0.6rem') ||
    '0rem'};
  font-size: ${props =>
    (props.design === 'h1' && '3.2rem') ||
    (props.design === 'h2' && '2.4rem') ||
    (props.design === 'h3' && '2.0rem') ||
    (props.design === 'h4' && '1.6rem') ||
    '2.0rem'};
  line-height: ${props =>
    (props.design === 'h1' && '4.0rem') ||
    (props.design === 'h2' && '3.0rem') ||
    (props.design === 'h3' && '2.5rem') ||
    (props.design === 'h3' && '2.0rem') ||
    '2.3rem'};
`;

export default { Heading };
