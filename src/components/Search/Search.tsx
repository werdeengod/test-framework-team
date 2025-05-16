import type { SetStateAction } from 'react';
import React from 'react';

import searchIcon from '@/assets/icons/search-icon.svg';
import { useSearch } from '@/сontext/search';

import styles from './Search.module.scss';

const SearchPainting: React.FC = (): React.ReactNode => {
  const searchContext = useSearch();

  const handleSearchChange = (e: { target: { value: SetStateAction<string> } }): void => {
    searchContext.setSearchQuery(e.target.value);
  };

  return (
    <>
      <section>
        <div className="container">
          <div className={styles.search}>
            <div className={styles.search__wrapper}>
              <div className={styles.search__wrapper__container}>
                <img
                  src={searchIcon}
                  alt="Поиск"
                  className={styles['search__wrapper__container--image']}
                />
                <input
                  className={styles['search__wrapper__container--input']}
                  type="text"
                  placeholder="Painting title"
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPainting;
