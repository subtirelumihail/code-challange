import reducer from './reducer';
import { getUser } from './actions';

export default function userPageModule(id: any): any {
  return {
    id: 'user',
    reducerMap: {
      userPage: reducer,
    },
    initialActions: [getUser(id)],
  };
}
