import React, { useState } from 'react';

import closeIcon from '@/assets/icons/close-icon.svg';
import searchIcon from '@/assets/icons/search-icon.svg';
import { usePaginate, useSearch } from '@/сontext';

import styles from './Search.module.scss';

const SearchPainting: React.FC = (): React.ReactNode => {
  const searchContext = useSearch();
  const paginateContext = usePaginate();

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement> | null): void => {
    const value = e === null ? '' : e.target.value;
    searchContext.setSearchQuery(value);
    paginateContext.setCurrentPage(1);
  };

  const handleReset = () => {
    handleSearchChange(null);
  };

  const displayResetForm = searchContext.searchQuery ? 'block' : 'none';

  return (
    <>
      <section>
        <div className="container">
          <div className={styles.search}>
            <div className={styles.search__wrapper}>
              <form
                className={`${styles.search__wrapper__container} ${isFocused ? styles['search__wrapper__container--focused'] : ''}`}
              >
                <img
                  src={searchIcon}
                  alt="Поиск"
                  className={styles['search__wrapper__container--image']}
                />
                <input
                  className={styles['search__wrapper__container--input']}
                  type="text"
                  placeholder="Painting title"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={handleSearchChange}
                />
                <button
                  className={styles.search__wrapper__container__reset}
                  type="reset"
                  onClick={handleReset}
                  style={{ display: displayResetForm }}
                >
                  <img
                    src={closeIcon}
                    alt="Очистить"
                    className={styles['search__wrapper__container__reset--image']}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPainting;
