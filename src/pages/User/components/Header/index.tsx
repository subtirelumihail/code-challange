import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { HeaderProps } from './types';
import styles from './Header.module.scss';

const Header = ({ user }: HeaderProps): React.ReactElement<any> => {
  if (!user) {
    return null;
  }
  return (
    <div className={styles.container}>
      <Link to="/">
        <LeftOutlined />
      </Link>
      <h2 className={styles.title}>
        {user.first_name} {user.last_name}
      </h2>
    </div>
  );
};

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    cc_number: PropTypes.string,
    cc_type: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export default Header;
