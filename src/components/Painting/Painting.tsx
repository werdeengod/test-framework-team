import type { AuthorType } from '@/types/models/AuthorType';
import type { LocationType } from '@/types/models/LocationType';
import type { PaintingType } from '@/types/models/PaintingType';
import React from 'react';

import { useQuery } from 'react-query';
import { getAuthors, getLocations } from '@/api/functions';
import { BASE_API_URL } from '@/consts';

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

  const author: AuthorType | undefined = authors.find(author => author.id === authorId);
  const location: LocationType | undefined = locations.find(
    location => location.id === locationId,
  );

  return (
    <>
      <div className={styles.painting} id={`painting-id-${id}`}>
        <div className={styles.painting__image__container}>
          <img src={`${BASE_API_URL}${imageUrl}`} loading="lazy" alt="Picture" />
        </div>
        <div className={styles.painting__about}>
          <div className={styles.painting__about__text}>
            <div className={styles.painting__about__text__hover}>
              <h1 className={styles.painting__about__text__header}>{author?.name}</h1>
              <p className={`caption ${styles.painting__about__text__caption}`}>
                {location?.location}
              </p>
            </div>
            <div className={styles.painting__about__text__default}>
              <h1 className={styles.painting__about__text__header}>{name}</h1>
              <p className={`caption ${styles.painting__about__text__caption}`}>{created}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Painting;
