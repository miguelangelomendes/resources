"use client";
import { Context, createContext, useContext, ReactNode } from "react";

import useAppHook from "@/modules/App/hooks";
import { AppProviderState, appDefaultValues } from "@/modules/App/reducer";

export interface AppContextInterface extends AppProviderState {
  setIsPending: (isPending: boolean) => void;
  translate: (key: any, params?: any) => string;
}

const appContextDefaultValues: AppContextInterface = {
  ...appDefaultValues,
  setIsPending: () => {},
  translate: () => "",
};

const AppContext: Context<AppContextInterface> =
  createContext<AppContextInterface>(appContextDefaultValues);

export function useApp() {
  return useContext(AppContext);
}

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const appProviderState = useAppHook();

  return (
    <AppContext.Provider value={appProviderState}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
