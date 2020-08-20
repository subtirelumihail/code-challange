import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import PropTypes from 'prop-types';
import { ModalProps } from './types';
import { Modal } from 'antd';

const ProductModal = ({
  product,
  onClose = () => {},
  onSave = () => {},
}: ModalProps): React.ReactElement<any> => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a validate number!',
    },
  };
  const handleOnSave = (values: any) =>
    onSave({
      ...product,
      ...values,
    });
  return (
    <div>
      <Modal
        title="Add/edit product modal"
        visible={true}
        onCancel={onClose}
        footer={null}
      >
        <Form
          name="product-form"
          validateMessages={validateMessages}
          initialValues={
            product ? { name: product.name, value: product.value } : {}
          }
          onFinish={handleOnSave}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="value"
            label="Value"
            rules={[{ required: true, type: 'number' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

ProductModal.propTypes = {
  onClose: PropTypes.func,
  product: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.number,
  }),
};

export default ProductModal;
