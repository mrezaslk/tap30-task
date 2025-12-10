import { initialData } from "@shared/types";
import { createContext, useContext } from "react";

const InitialDataContext = createContext<initialData | null>(null);

export const InitialDataProvider: React.FC<{
  value: initialData;
  children: React.ReactNode;
}> = ({ value, children }) => {
  return (
    <InitialDataContext.Provider value={value}>
      {children}
    </InitialDataContext.Provider>
  );
};

export function useInitialData() {
  return useContext(InitialDataContext);
}
