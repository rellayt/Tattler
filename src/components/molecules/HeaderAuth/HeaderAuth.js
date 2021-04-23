import React from 'react';
import { Wrapper } from './HeaderAuth.styles';
import { HeaderButton } from 'components/atoms/HeaderButton/HeaderButton';
import { useHistory } from 'react-router-dom';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderIcon from '../../atoms/HeaderIcon/HeaderIcon';

const HeaderAuth = ({ isLogged, handleLogout }) => {
  const history = useHistory();

  return (
    <Wrapper>
      {!isLogged ? (
        <>
          <HeaderButton isBig onClick={() => history.push('/login')} type="button">
            Login
          </HeaderButton>
          <HeaderButton isBig onClick={() => history.push('/register')} isColored type="button">
            Register
          </HeaderButton>
        </>
      ) : (
        <>
          <HeaderIcon icon={faUserAlt} tooltip={'Profile'} action={() => history.push('/profile')} />
          <HeaderIcon icon={faBell} tooltip={'Notifications'} action={() => history.push('/notifications')} />
          <HeaderIcon icon={faSignOutAlt} tooltip={'Logout'} action={handleLogout} />
        </>
      )}
    </Wrapper>
  );
};

export default HeaderAuth;
