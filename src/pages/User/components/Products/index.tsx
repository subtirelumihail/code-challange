import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { ProductType } from '../../store/types';
import { ProductsProps } from './types';
import Product from './components/Product';
import ProductModal from './components/ProductModal';
import styles from './Products.module.scss';
// import PropTypes from 'prop-types';

const Products = ({
  products,
  onSave = () => {},
  onRemove = () => {},
}: ProductsProps): React.ReactElement<any> => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, seSelectedProduct] = useState(undefined);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleHideModal = () => {
    setShowModal(false);
    seSelectedProduct(undefined);
  };
  const handleOnEdit = (product: ProductType) => {
    seSelectedProduct(product);
    setShowModal(true);
  };

  const handleOnSave = (product: ProductType) => {
    onSave(product);
    handleHideModal();
  };

  return (
    <div>
      <div className={styles.header}>
        <h2>Products</h2>
        <Button onClick={handleShowModal}>ADD</Button>
      </div>
      <div className={styles.list}>
        {products.length === 0
          ? 'No products added'
          : products.map(product => (
              <Product
                key={product.id}
                product={product}
                onEdit={handleOnEdit}
                onRemove={onRemove}
              />
            ))}
      </div>
      {showModal && (
        <ProductModal
          onSave={handleOnSave}
          product={selectedProduct}
          onClose={handleHideModal}
        />
      )}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Products;
