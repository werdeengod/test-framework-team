import React from 'react';

import Logo from '@/components/Logo/Logo';
import SwitchThemeButton from '@/components/SwitchTheme/SwitchTheme';
import styles from './Header.module.scss';

const Header: React.FC = (): React.ReactNode => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.header__nav}>
          <Logo />
          <SwitchThemeButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
