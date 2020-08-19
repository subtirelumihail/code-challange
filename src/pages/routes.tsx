import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentLoader from 'components/ComponentLoader';

export const generalRoutes: any = [
  {
    path: '/',
    exact: true,
    component: ComponentLoader('pages/Dashboard'),
  },
  {
    path: '/user/:id',
    exact: true,
    component: ComponentLoader('pages/User'),
  },
  {
    component: ComponentLoader('pages/NotFound'),
  },
];

export default React.memo(
  (): React.ReactElement<any> => (
    <Router basename="/">
      <Switch>
        {generalRoutes.map((route: any, key: number) => (
          <Route key={key} {...route} />
        ))}
      </Switch>
    </Router>
  )
);
