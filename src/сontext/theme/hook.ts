import type { ThemeContextType } from '@/types/ThemeType';
import { useContext } from 'react';
import { ThemeContext } from './context';

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('Error with context theme');
  }

  return context;
}
