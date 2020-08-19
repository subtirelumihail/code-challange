import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styles from './Search.module.scss';

const Search: React.FunctionComponent<any> = ({
  onChange,
}): React.ReactElement<any> => {
  return (
    <div className={styles.container}>
      <Input
        placeholder="Search CC Number"
        prefix={<SearchOutlined />}
        onChange={onChange}
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
