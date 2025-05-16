import type { PaginateType } from '@/types/PaginateType';
import React from 'react';
import { useQuery } from 'react-query';

import { getPaintings } from '@/api/functions';
import arrowIcon from '@/assets/icons/arrow-icon.svg';
import { useSearch } from '@/сontext/search';

import styles from './Paginate.module.scss';

const Paginate: React.FC<PaginateType> = ({ currentPage, setCurrentPage }): React.ReactNode => {
  const searchContext = useSearch();

  const paintingsFullResponse = useQuery({
    queryKey: ['paintings', searchContext.searchQuery],
    queryFn: async () =>
      getPaintings({
        q: searchContext.searchQuery,
        _page: null,
        _limit: null,
      }),
  });

  const totalPages: number
    = paintingsFullResponse.data !== undefined ? Math.ceil(paintingsFullResponse.data.length / 6) : 0;

  if (totalPages <= 1) {
    return null;
  }

  const handlerArrowPaginate = (page: number): void => {
    if (page <= 0 || page > totalPages) {
      return;
    }

    setCurrentPage(page);
  };

  const getVisiblePages = (): Array<number | string> => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, '...', totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  };

  const visiblePages = getVisiblePages();

  return (
    <>
      <div className={styles.paginate}>
        <button
          type="button"
          className={styles.paginate__pages__page}
          onClick={() => {
            handlerArrowPaginate(currentPage - 1);
          }}
        >
          <img src={arrowIcon} alt="Назад" className={styles['paginate__arrow--left']} />
        </button>
        <div className={styles.paginate__pages}>
          {visiblePages.map(page =>
            typeof page === 'number'
              ? (
                  <button
                    key={`page-${page}`}
                    className={
                      page === currentPage
                        ? `paragraph paragraph__big paragraph__big--medium ${styles['paginate__pages__page--active']}`
                        : `paragraph paragraph__big ${styles.paginate__pages__page}`
                    }
                    type="button"
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                    {page}
                  </button>
                )
              : (
                  <div
                    key={`ellipsis-${Math.random()}`}
                    className={`paragraph paragraph__big ${styles.paginate__pages__page}`}
                  >
                    {page}
                  </div>
                ),
          )}
        </div>
        <button
          type="button"
          className={styles.paginate__pages__page}
          onClick={() => {
            handlerArrowPaginate(currentPage + 1);
          }}
        >
          <img src={arrowIcon} alt="Вперед" className={styles['paginate__arrow--right']} />
        </button>
      </div>
    </>
  );
};

export default Paginate;
