import React from 'react';
import { DynamicModuleLoader } from 'redux-dynamic-modules';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from './store/selectors';
import module from './store/module';
import { search } from './store/actions';
import UserList from './components/UserList';
import Search from './components/Search';

const Dashboard = (): React.ReactElement<any> => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    dispatch(search(e.target.value.trim()));
  };
  return (
    <DynamicModuleLoader key="dashboardPage" modules={[module()]}>
      <Search onChange={handleSearch} />
      <UserList users={users} />
    </DynamicModuleLoader>
  );
};

export default Dashboard;
