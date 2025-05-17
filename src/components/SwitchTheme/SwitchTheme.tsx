import type { Theme, ThemeContextType } from '@/сontext';
import React, { useEffect } from 'react';

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
    themeContext.setTheme(newTheme);
  };

  useEffect((): void => {
    document.body.setAttribute('data-theme', themeContext.theme);
  }, [themeContext.theme]);

  return (
    <>
      <button type="button" className={styles['button--switch']} onClick={toggleTheme}>
        <img src={icon} alt="" />
      </button>
    </>
  );
};

export default SwitchThemeButton;
