import { combineReducers } from 'redux';
import find from 'lodash/find';
import { createReducer } from 'typesafe-actions';
import uniqid from 'uniqid';
import { UserType } from 'global/types/user';
import { ProductType } from './types';
import mockData from 'data/mock.json';
import * as actions from './actions';

export const user = createReducer(null as UserType).handleAction(
  [actions.getUser],
  (_state: any, action: any) => {
    return find(mockData, ['id', +action.payload]) || null;
  }
);

export const products = createReducer([] as ProductType[])
  .handleAction([actions.saveProduct], (_state: any, action: any) => {
    if (action.payload.id) {
      return [..._state].map(product => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    }
    return [
      ..._state,
      {
        id: uniqid(),
        ...action.payload,
      },
    ];
  })
  .handleAction([actions.removeProduct], (_state: any, action: any) =>
    [..._state].filter(product => product.id !== action.payload.id)
  );

const userReducer = combineReducers({
  user,
  products,
});

export default userReducer;
export type UserStore = ReturnType<typeof userReducer>;
