import React, { ReactNode, createContext, useReducer } from "react";
import rootReducer from "./store";
import { initialState } from "./initialState";

type AppState = typeof initialState

interface StoreContextType {
    state: AppState;
    dispatch: React.Dispatch<any>;
}


export const Store = createContext<StoreContextType | undefined>(undefined)

interface StoreProviderProps {
    children: ReactNode;
}

export function StoreProvider({ children }: StoreProviderProps) {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    const value: StoreContextType = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}