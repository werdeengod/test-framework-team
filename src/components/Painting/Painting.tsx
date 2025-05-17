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
  const authorsResponse = useQuery({
    queryKey: 'authors',
    queryFn: async () => getAuthors(),
  });

  const locationsResponse = useQuery({
    queryKey: 'locations',
    queryFn: async () => getLocations(),
  });

  const authors = authorsResponse.data !== undefined ? authorsResponse.data : [];
  const locations = locationsResponse.data !== undefined ? locationsResponse.data : [];

  const author: AuthorType | undefined = authors.find((author) => author.id === authorId);
  const location: LocationType | undefined = locations.find(
    (location) => location.id === locationId,
  );

  return (
    <>
      <div className={styles.painting} id={`painting-id-${id}`}>
        <div className={styles.painting__image__container}>
          <img
            className={styles['painting__image__container--image']}
            src={`${baseURL}${imageUrl}`}
            loading="lazy"
            alt="Картина художника"
          />
        </div>
        <div className={styles.painting__about}>
          <div className={styles.painting__about__text}>
            <div className={styles['painting__about__text--hover']}>
              <h1 className={styles['painting__about__text--header']}>{author?.name}</h1>
              <div className={`caption ${styles['painting__about__text--caption']}`}>
                {location?.location}
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
