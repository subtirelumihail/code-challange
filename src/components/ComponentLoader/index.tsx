import React, { Suspense } from 'react';
import ErrorBoundary from 'components/ErrorBoundary';
import styles from './ComponentLoader.module.scss';

const retry = (fn: any, retriesLeft = 5, interval = 1000): any => {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: any) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }
          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
};

/**
 * Lazy loads the components.
 * Has a Loading component for fallback.
 */
const ComponentLoader = (
  componentPath: string,
  delay = 0
) => (): React.ReactElement<any> => {
  const Component = React.memo(
    React.lazy(() =>
      retry(() => {
        return new Promise(resolve => {
          setTimeout(() => resolve(import(`../../${componentPath}`)), delay);
        });
      })
    )
  );

  const renderLogo = (): any => {
    return (
      <div data-testid="loading" className={styles.loading}>
        Loading...
      </div>
    );
  };

  return (
    <div>
      <Suspense fallback={renderLogo()}>
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default ComponentLoader;
