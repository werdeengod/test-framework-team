import type { Theme, ThemeContextType } from '@/types/contexts/ThemeContextType';
import React from 'react';

import darkIcon from '@/assets/icons/dark-icon.svg';
import lightIcon from '@/assets/icons/light-icon.svg';
import { useTheme } from '@/сontext';

import styles from './SwitchTheme.module.scss';

const THEME_ICONS: Record<Theme, string> = {
  dark: lightIcon,
  light: darkIcon,
};

const SwitchThemeButton: React.FC = (): React.ReactNode => {
  const themeContext: ThemeContextType = useTheme();
  const icon: string = THEME_ICONS[themeContext.theme];

  const toggleTheme = (): void => {
    const newTheme = themeContext.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeContext.setTheme(newTheme);
  };

  return (
    <>
      <button type="button" className={styles.button__switch} onClick={toggleTheme}>
        <img src={icon} alt="Switch theme" />
      </button>
    </>
  );
};

export default SwitchThemeButton;
