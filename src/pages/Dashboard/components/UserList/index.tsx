import React from 'react';
import PropTypes from 'prop-types';
import List from 'components/List';
import Card from 'components/Card';
import { UserListProps } from './types';
import { UserType } from 'global/types/user';

const UserList = ({ users = [] }: UserListProps): React.ReactElement<any> => {
  if (users.length === 0) {
    return <div>No users found</div>;
  }
  return (
    <div>
      <List>
        {users.map((user: UserType) => (
          <Card
            key={user.email}
            title={`${user.first_name} ${user.last_name}`}
            extraLink={`/user/${user.id}`}
          >
            <p>{user.email}</p>
            <br />
            <hr />
            <br />
            <p>{user.cc_number}</p>
            <p>{user.cc_type}</p>
          </Card>
        ))}
      </List>
    </div>
  );
};

UserList.defaultProps = {
  users: [],
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      cc_number: PropTypes.string,
      cc_type: PropTypes.string,
    })
  ),
};

export default UserList;
