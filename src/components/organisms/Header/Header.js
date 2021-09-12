import React from 'react';
import { Name, StatusInfo, Wrapper } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';
import HeaderActions from '../../molecules/HeaderActions/HeaderActions';
import { useAuthState } from '../../../providers/Auth';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const { user } = useAuthState();
  const history = useHistory();

  return (
    <Wrapper>
      {user && (
        <>
          <StatusInfo>
            <p>Welcome,</p>
            <p>
              <Name>{user.name}</Name>
            </p>
          </StatusInfo>
          {/*<SearchBar history={history} placeholder={'Find users'} />*/}
        </>
      )}
      <HeaderActions isLogged={Boolean(user)} />
    </Wrapper>
  );
};

export default Header;
