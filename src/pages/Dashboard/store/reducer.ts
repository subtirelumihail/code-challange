import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { UserType } from 'global/types/user';
import mockData from 'data/mock.json';
import * as actions from './actions';

export const users = createReducer(mockData as UserType[]).handleAction(
  [actions.search],
  (_state: any, action: any) => {
    if (!action.payload.length) {
      return mockData;
    }
    const users = mockData.filter(
      o => o.cc_number.indexOf(action.payload) > -1
    );
    return users as UserType[];
  }
);

const dashboardReducer = combineReducers({
  users,
});

export default dashboardReducer;
export type Dashboard = ReturnType<typeof dashboardReducer>;
