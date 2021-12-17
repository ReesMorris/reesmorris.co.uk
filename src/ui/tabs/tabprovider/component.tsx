import React, { createContext, useContext, useState } from 'react';

// This provider allows us to change all tab providers to
// the same name as the `curr` tab where possible, so you don't
// have to keep changing from JavaScript to TypeScript all the time.

interface TabProviderProps {
  children?: React.ReactNode;
}

interface TabContext {
  currentTab: string;
  setCurrentTab: (name: string) => void;
}

const TabContext = createContext<TabContext>({
  currentTab: '',
  setCurrentTab: () => null
});

export const TabProvider = (props: TabProviderProps) => {
  const [currentTab, setCurrentTab] = useState('');

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {props.children}
    </TabContext.Provider>
  );
};

export const useTabProvider = () => useContext(TabContext);
