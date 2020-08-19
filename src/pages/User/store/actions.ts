import { createStandardAction } from 'typesafe-actions';
import { ProductType } from './types';

export const getUser = createStandardAction('userPage/GET_USER')<string>();

export const saveProduct = createStandardAction('userPage/SAVE_PRODUCT')<
  ProductType
>();

export const removeProduct = createStandardAction('userPage/REMOVE_PRODUCT')<
  ProductType
>();
