import { css } from '@linaria/core';

// Create a class name
const title = css`
  font-size: 24px;
  font-weight: bold;
`;

const Index = () => {
  // Pass it to a component
  return (
    <>
      <h1 className={title}>Homepage</h1>
    </>
  );
};

export default Index;
