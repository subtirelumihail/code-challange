import React from 'react';
import PropTypes from 'prop-types';
import { Descriptions, Row, Col } from 'antd';
import styles from './UserDetails.module.scss';
import { UserDetailsProps } from './types';

const UserList = ({
  user,
  sum = 0,
}: UserDetailsProps): React.ReactElement<any> => {
  if (!user) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Row>
        <Col span={12} flex="auto">
          <Descriptions>
            <Descriptions.Item label="" span={3}>
              {user.email}
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              {user.cc_number}
            </Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              {user.cc_type}
            </Descriptions.Item>
          </Descriptions>
        </Col>
        <Col span={12} flex="auto">
          <div className={styles.right}>
            <h2>{sum}</h2>
            <span>{user.currency}</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

UserList.defaultProps = {
  sum: 0,
};

UserList.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    cc_number: PropTypes.string,
    cc_type: PropTypes.string,
    currency: PropTypes.string,
  }),
  sum: PropTypes.number,
};

export default UserList;
