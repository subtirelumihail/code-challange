import React from 'react';
import styles from './Loading.module.scss';

export const Loading = (): React.ReactElement<any> => {
  return (
    <div className={styles.loading} data-testid="loading">
      Loading
    </div>
  );
};
