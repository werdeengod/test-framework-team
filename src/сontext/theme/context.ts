import type { ThemeContextType } from '@/types/contexts/ThemeContextType';
import { createContext, useContext } from 'react';

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('Error with context theme');
  }

  return context;
}
