import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { CardProps } from './types';
import styles from './Card.module.scss';

const ListCard: React.FunctionComponent<CardProps> = ({
  title = '',
  extraLink,
  children,
}): React.ReactElement<any> => {
  const extra = extraLink ? <Link to={extraLink}>Details</Link> : null;
  return (
    <Card
      title={title}
      className={styles.container}
      bordered={false}
      extra={extra}
    >
      {children}
    </Card>
  );
};

ListCard.defaultProps = {
  title: '',
};

ListCard.propTypes = {
  title: PropTypes.string,
  extraLink: PropTypes.string,
};

export default ListCard;
