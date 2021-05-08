import React from 'react';
import { Wrapper } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';
import HeaderAuth from '../../molecules/HeaderAuth/HeaderAuth';
import { useAuthDispatch, useAuthState } from '../../../providers/Auth';
import { logout } from '../../../store/actions/Auth';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const { user } = useAuthState();
  const history = useHistory();

  return (
    <Wrapper>
      {user ? <SearchBar history={history} name={user.name} placeholder={'Find users'} /> : null}
      <HeaderAuth isLogged={Boolean(user)} />
    </Wrapper>
  );
};

export default Header;
