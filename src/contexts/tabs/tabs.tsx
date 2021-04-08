import React, { createContext, useContext, useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}
interface StateProps {
  lastChoice: string;
}
interface ContextProps extends StateProps {
  setTab: (name: string) => void;
}

// The context
const TabsContext = createContext<ContextProps>({
  lastChoice: '',
  setTab: () => null
});

// The component
const TabsProvider: React.FC<TabsProps> = ({ children }) => {
  const [tabs, setTabs] = useState<StateProps>({
    lastChoice: ''
  });

  const setTab = (name: string) => setTabs({ ...tabs, lastChoice: name });

  return (
    <TabsContext.Provider value={{ ...tabs, setTab }}>
      {children}
    </TabsContext.Provider>
  );
};

// The hook
export const useTabs = (): ContextProps => useContext(TabsContext);

export default TabsProvider;
