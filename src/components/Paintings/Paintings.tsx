import type { PaintingType } from '@/types/models/PaintingType';

import React from 'react';
import { useQuery } from 'react-query';

import { getPaintings } from '@/api/functions';
import AlertNotFound from '@/components/AlertNotFound/AlertNotFound';

import Paginate from '@/components/Paginate/Paginate';
import Painting from '@/components/Painting/Painting';
import { usePaginate, useSearch } from '@/сontext';

import styles from './Paintings.module.scss';

const Paintings: React.FC = (): React.ReactNode => {
  const searchContext = useSearch();
  const paginateContext = usePaginate();

  const paintingsResponse = useQuery({
    queryKey: ['paintings', searchContext.searchQuery, paginateContext.currentPage],
    queryFn: async () =>
      getPaintings({
        q: searchContext.searchQuery,
        _page: paginateContext.currentPage,
        _limit: 6,
      }),
  });

  const paintings: PaintingType[] | undefined = paintingsResponse.data;

  return (
    <>
      <section>
        <div className="container">
          <AlertNotFound alertDisplay={paintings && paintings.length === 0 ? 'block' : 'none'} />
          <div className={styles.paintings}>
            {paintings
              && paintings.map(painting => (
                <Painting
                  key={painting.id}
                  name={painting.name}
                  created={painting.created}
                  id={painting.id}
                  authorId={painting.authorId}
                  locationId={painting.locationId}
                  imageUrl={painting.imageUrl}
                />
              ))}
          </div>
          <Paginate />
        </div>
      </section>
    </>
  );
};

export default Paintings;
