import get from 'lodash/get';
import { UserType } from 'global/types/user';
import { ProductType } from './types';

export const getUserSelector = (state: any): UserType =>
  get(state, 'userPage.user', null);

export const getProductsSelector = (state: any): ProductType[] =>
  get(state, 'userPage.products', []);

export const getProductsSumSelector = (state: any): number => {
  const products = get(state, 'userPage.products', []);
  return products.reduce(
    (acc: number, product: ProductType) => acc + product.value,
    0
  );
};
