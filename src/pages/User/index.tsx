import React from 'react';
import { message } from 'antd';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  getUserSelector,
  getProductsSelector,
  getProductsSumSelector,
} from './store/selectors';
import UserDetails from './components/UserDetails';
import Products from './components/Products';
import Header from './components/Header';
import module from './store/module';
import { saveProduct, removeProduct } from './store/actions';
import { ProductType } from './store/types';

const User = (): React.ReactElement<any> => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector(getUserSelector);
  const products = useSelector(getProductsSelector);
  const sum = useSelector(getProductsSumSelector);

  const handleSaveProduct = (product: ProductType) => {
    dispatch(saveProduct(product));
    message.success('The product has been saved');
  };

  const handleRemoveProduct = (product: ProductType) => {
    dispatch(removeProduct(product));
    message.success('The product has been removed');
  };

  return (
    <DynamicModuleLoader key="userPage" modules={[module(id)]}>
      <Header user={user} />
      <div className="content">
        <UserDetails user={user} sum={sum} />
        <Products
          products={products}
          onSave={handleSaveProduct}
          onRemove={handleRemoveProduct}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default User;
