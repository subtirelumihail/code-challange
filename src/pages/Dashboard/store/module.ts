import reducer from './reducer';

export default function dashboardPageModule(): any {
  return {
    id: 'dashboard',
    reducerMap: {
      dashboardPage: reducer,
    },
  };
}
