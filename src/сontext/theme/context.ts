import type { ThemeContextType } from '@/types/ThemeType';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType | null>(null);
