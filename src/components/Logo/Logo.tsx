import type { Theme, ThemeContextType } from '@/types/ThemeType';
import React from 'react';

import darkLogo from '@/assets/icons/dark-logo.svg';
import lightLogo from '@/assets/icons/light-logo.svg';
import { useTheme } from '@/сontext/theme';

import styles from './Logo.module.scss';

const THEME_LOGO: Record<Theme, string> = {
  dark: lightLogo,
  light: darkLogo,
};

const Logo: React.FC = (): React.ReactNode => {
  const themeContext: ThemeContextType = useTheme();
  const logo: string = THEME_LOGO[themeContext.theme];

  return (
    <>
      <div className={styles.logo__container}>
        <img src={logo} alt="" className={styles['logo__container--image']} />
      </div>
    </>
  );
};

export default Logo;
