import 'antd/dist/antd.css';
import './base.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store/configureStore';
import Routes from './pages/routes';
import store from './store/configureStore';
import styles from './index.module.scss';

export const Root = (): React.ReactElement<any> => (
  <div className={styles.container}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </div>
);

render(<Root />, document.getElementById('root'));
