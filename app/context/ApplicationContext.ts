import {createContext} from 'react';

export type ApplicationContextType = {
  isLoading: boolean;
  toggleLoading: (value: boolean) => void;
};

export const ApplicationContext = createContext<ApplicationContextType | null>(
  null
);
