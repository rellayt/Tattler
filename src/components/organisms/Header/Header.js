import React from 'react';
import { Wrapper } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';
import HeaderAuth from '../../molecules/HeaderAuth/HeaderAuth';
import { useAuthDispatch, useAuthState } from '../../../providers/Auth';
import { logout } from '../../../store/actions/Auth';
import { useHistory } from 'react-router-dom';

export const Header = (props) => {
  const { user } = useAuthState();
  const dispatch = useAuthDispatch();
  const history = useHistory();

  const handleLogout = () => {
    logout(dispatch);
    history.push('/login');
  };
  return (
    <Wrapper>
      {user ? <SearchBar name={user.name} /> : null}
      <HeaderAuth isLogged={Boolean(user)} handleLogout={handleLogout} />
    </Wrapper>
  );
};

export default Header;
