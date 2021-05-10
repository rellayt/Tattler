import React from 'react';
import { IconsWrapper, MobileWrapper, Wrapper } from './HeaderAuth.styles';
import { HeaderButton } from 'components/atoms/HeaderButton/HeaderButton';
import { useHistory } from 'react-router-dom';
import { faBell, faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderIcon from '../../atoms/HeaderIcon/HeaderIcon';
import MobileMenu from '../MobileMenu/MobileMenu';
import { logout } from '../../../store/actions/Auth';
import { useAuthDispatch } from '../../../providers/Auth';

const HeaderAuth = ({ isLogged }) => {
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    history.push('/login');
  };
  return (
    <Wrapper isLogged={isLogged}>
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
          <IconsWrapper>
            <HeaderIcon icon={faUserAlt} tooltip={'Profile'} action={() => history.push('/profile')} />
            <HeaderIcon icon={faBell} tooltip={'Notifications'} action={() => history.push('/notifications')} />
            <HeaderIcon icon={faSignOutAlt} tooltip={'Logout'} action={handleLogout} />
          </IconsWrapper>
          <MobileWrapper>
            <MobileMenu history={history} handleLogout={handleLogout} />
          </MobileWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default HeaderAuth;
