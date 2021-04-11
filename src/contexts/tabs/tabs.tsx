import React, { createContext, useContext, useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}
interface StateProps {
  tab: string;
}
interface ContextProps extends StateProps {
  setTab: (name: string) => void;
}

// The context
const TabsContext = createContext<ContextProps>({
  tab: '',
  setTab: () => null
});

// The component
const TabsProvider = ({ children }: TabsProps) => {
  const [tabs, setTabs] = useState<StateProps>({
    tab: ''
  });

  const setTab = (name: string) => setTabs({ ...tabs, tab: name });

  return (
    <TabsContext.Provider value={{ ...tabs, setTab }}>
      {children}
    </TabsContext.Provider>
  );
};

// The hook
export const useTabs = (): ContextProps => useContext(TabsContext);

export default TabsProvider;
