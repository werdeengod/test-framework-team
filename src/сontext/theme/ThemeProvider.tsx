import type { Theme, ThemeContextType } from './context';
import React, { useMemo, useState } from 'react';
import { ThemeContext } from './context';

export function ThemeProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [theme, setTheme] = useState<Theme>('dark');

  const themeContextData: ThemeContextType = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return <ThemeContext.Provider value={themeContextData}>{children}</ThemeContext.Provider>;
}
