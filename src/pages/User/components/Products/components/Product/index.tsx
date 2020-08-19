import React from 'react';
import { Button, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ProductProps } from './types';
import styles from './Product.module.scss';

const Product = ({
  product,
  onEdit = () => {},
  onRemove = () => {},
}: ProductProps): React.ReactElement<any> => {
  const handleEdit = () => onEdit(product);
  const handleRemove = () => onRemove(product);
  return (
    <div className={styles.container}>
      <div>{product.name}</div>
      <div>{product.value}</div>
      <div>
        <Button onClick={handleEdit} icon={<EditOutlined />} />
        <Popconfirm
          title="Are you sure you want delete this product?"
          onConfirm={handleRemove}
          okText="Yes"
          cancelText="No"
        >
          <Button icon={<DeleteOutlined />} danger />
        </Popconfirm>
      </div>
    </div>
  );
};

Product.propTypes = {
  value: PropTypes.number,
  name: PropTypes.string,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Product;
