import type { AuthorType } from '@/types/models/AuthorType';
import type { LocationType } from '@/types/models/LocationType';
import type { PaintingType } from '@/types/models/PaintingType';
import React from 'react';

import { useQuery } from 'react-query';
import { baseURL } from '@/api/consts';
import { getAuthors, getLocations } from '@/api/functions';

import styles from './Painting.module.scss';

function formatText(str: string | undefined, sub: number): string {
  if (str === undefined) {
    return 'Не распознано';
  }

  return str.length <= sub ? str : `${str.substring(0, sub)}...`;
}

const Painting: React.FC<PaintingType> = ({
  id,
  name,
  created,
  imageUrl,
  authorId,
  locationId,
}): React.ReactNode => {
  const authorResponse = useQuery({
    queryKey: ['author', authorId],
    queryFn: async () => getAuthors(),
  });

  const locationResponse = useQuery({
    queryKey: ['location', locationId],
    queryFn: async () => getLocations(),
  });

  const authorGet: AuthorType | undefined = authorResponse.data?.find(
    author => author.id === authorId,
  );

  const locationGet: LocationType | undefined = locationResponse.data?.find(
    location => location.id === locationId,
  );

  return (
    <>
      <div className={styles.painting} id={`painting-id-${id}`}>
        <div className={styles.painting__image__container}>
          <img
            className={styles['painting__image__container--image']}
            src={`${baseURL}${imageUrl}`}
          />
        </div>
        <div className={styles.painting__about}>
          <div className={styles.painting__about__text}>
            <div className={styles['painting__about__text--hover']}>
              <h1 className={styles['painting__about__text--header']}>
                {formatText(authorGet?.name, 25)}
              </h1>
              <div className={`caption ${styles['painting__about__text--caption']}`}>
                {formatText(locationGet?.location, 35)}
              </div>
            </div>
            <div className={styles['painting__about__text--default']}>
              <h1 className={styles['painting__about__text--header']}>{formatText(name, 25)}</h1>
              <div className={`caption ${styles['painting__about__text--caption']}`}>{created}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Painting;
