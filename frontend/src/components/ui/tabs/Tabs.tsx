/* eslint-disable react/prop-types */

import React from "react";
import { Tab, TabBox, TabItem, TabItemBox } from "./TabsComponents";

const tabsCtx = React.createContext();

export const useTabsCtx = () => {
  const ctx = React.useContext(tabsCtx);
  if (!ctx) {
    throw new Error("Component must be wrapped by tabs");
  }
  return ctx;
};

export default function Tabs({ children, defaultActiveTab }) {
  const [activeTab, setActiveTab] = React.useState(defaultActiveTab);
  
  return (
    <tabsCtx.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </tabsCtx.Provider>
  );
}

Tabs.Tab = Tab
Tabs.TabBox = TabBox
Tabs.TabItem = TabItem
Tabs.TabItemBox = TabItemBox
