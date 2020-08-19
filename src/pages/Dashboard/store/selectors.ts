import get from 'lodash/get';
import { UserType } from 'global/types/user';

export const getUsers = (state: any): UserType[] =>
  get(state, 'dashboardPage.users', []);
