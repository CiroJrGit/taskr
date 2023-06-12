import { ReactNode } from 'react';

export interface ThemeProps {
  theme: string;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
