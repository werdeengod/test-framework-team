import type { AuthorType } from '@/types/models/AuthorType';
import type { LocationType } from '@/types/models/LocationType';
import type { PaintingType } from '@/types/models/PaintingType';
import React from 'react';

import { useQuery } from 'react-query';
import { baseURL } from '@/api/consts';
import { getAuthors, getLocations } from '@/api/functions';

import styles from './Painting.module.scss';

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
            alt="Картина художника"
          />
        </div>
        <div className={styles.painting__about}>
          <div className={styles.painting__about__text}>
            <div className={styles['painting__about__text--hover']}>
              <h1 className={styles['painting__about__text--header']}>{authorGet?.name}</h1>
              <div className={`caption ${styles['painting__about__text--caption']}`}>
                {locationGet?.location}
              </div>
            </div>
            <div className={styles['painting__about__text--default']}>
              <h1 className={styles['painting__about__text--header']}>{name}</h1>
              <div className={`caption ${styles['painting__about__text--caption']}`}>{created}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Painting;
