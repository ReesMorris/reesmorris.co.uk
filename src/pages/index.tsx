import { css } from '@linaria/core';
import { useTheme } from '~/providers';

// Create a class name
const title = css`
  font-size: 24px;
  font-weight: bold;
`;

const Index = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <h1 className={title}>Homepage</h1>

      <div>
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </>
  );
};

export default Index;
