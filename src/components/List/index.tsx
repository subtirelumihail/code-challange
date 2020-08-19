import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styles from './List.module.scss';

const List = ({ children }: any): React.ReactElement<any> => {
  return (
    <Row>
      {React.Children.map(children, child => (
        <Col flex="auto" key={child.key}>
          <div className={styles.card}>{React.cloneElement(child)}</div>
        </Col>
      ))}
    </Row>
  );
};

List.propTypes = {
  children: PropTypes.node,
};

export default List;
