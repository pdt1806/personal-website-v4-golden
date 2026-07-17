import React, { createContext, ReactNode, useContext, useState } from "react";

interface GlobalContextType {
  sfxEnabled: boolean;
  setSFXEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalContext = createContext<GlobalContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: ProviderProps) => {
  const [sfxEnabled, setSFXEnabled] = useState<boolean>(true);

  return <GlobalContext.Provider value={{ sfxEnabled, setSFXEnabled }}>{children}</GlobalContext.Provider>;
};
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};
