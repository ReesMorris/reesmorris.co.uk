import { useEffect } from 'react';

const useIsTabbing: () => void = () => {
  // Called when tab is pressed: we want to show all focus outlines
  const onTabClick = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      document.body.classList.add('tabbing');
      window.removeEventListener('keydown', onTabClick);
      window.addEventListener('click', onMouseClick);
    }
  };

  // Called when mouse is clicked: we want to hide all focus outlines
  const onMouseClick = () => {
    document.body.classList.remove('tabbing');
    window.removeEventListener('click', onMouseClick);
    window.addEventListener('keydown', onTabClick);
  };

  useEffect(() => {
    onMouseClick();
  }, []);
};

export default useIsTabbing;
