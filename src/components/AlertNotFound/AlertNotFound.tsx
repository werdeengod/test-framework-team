import type { Alert } from '@/types/components/AlertNotFound';
import React from 'react';
import { useSearch } from '@/сontext/search';

import styles from './AlertNotFound.module.scss';

const AlertNotFound: React.FC<Alert> = ({ alertDisplay }): React.ReactNode => {
  const searchContext = useSearch();

  return (
    <div className={styles.alert} style={{ display: alertDisplay }}>
      <p className={`paragraph paragraph__big ${styles.alert__header}`}>
        No&nbsp;matches&nbsp;for&nbsp;
        <span className="paragraph paragraph__big medium">{searchContext.searchQuery}</span>
      </p>
      <p className={`paragraph paragraph__base ${styles.alert__description}`}>
        Please&nbsp;try&nbsp;again&nbsp;with&nbsp;a&nbsp;different&nbsp;spelling&nbsp;or&nbsp;keywords.
      </p>
    </div>
  );
};

export default AlertNotFound;
