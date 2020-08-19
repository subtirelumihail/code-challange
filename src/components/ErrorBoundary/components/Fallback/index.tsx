import React from 'react';
import styles from './Fallback.module.scss';

const Fallback = (): React.ReactElement<any> => {
  const handleRefresh = (): void => window.top.location.reload();
  return (
    <div className={styles.container} onClick={handleRefresh}>
      <div className={styles.message}>
        There has been an error with one of our components, please refresh.
      </div>
    </div>
  );
};

export default Fallback;
