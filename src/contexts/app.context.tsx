import { createContext, useContext } from 'react';

export interface AppContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  role: 'admin' | 'customer';
  setRole: (role: 'admin' | 'customer') => void;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  role: 'customer',
  setRole: () => {},
});

export const useAppContext = () => useContext(AppContext);