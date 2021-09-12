import React from 'react';
import { ButtonsWrapper, IconsWrapper, MobileWrapper, Wrapper } from './HeaderActions.styles';
import { HeaderButton } from 'components/atoms/HeaderButton/HeaderButton';
import { useHistory } from 'react-router-dom';
import { faSignOutAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import HeaderIcon from '../../atoms/HeaderIcon/HeaderIcon';
import MobileMenu from '../MobileMenu/MobileMenu';
import { logout } from '../../../store/actions/Auth';
import { useAuthDispatch } from '../../../providers/Auth';
import { useSnackBarDispatch } from '../../../providers/SnackBar';
import { OpenSnackBar } from '../../../store/actions/SnackBar';
import { LOGGED_OUT } from '../../../config/Snackbars';
import Notifications from '../Notifications/Notifications';
import { SocketContext } from '../../../providers/Socket';

const HeaderActions = ({ isLogged }) => {
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const snackBarDispatch = useSnackBarDispatch();

  const handleLogout = async () => {
    OpenSnackBar(snackBarDispatch, LOGGED_OUT);
    await logout(dispatch);
    history.push('/login');
  };
  return (
    <SocketContext.Consumer>
      {({ notifications }) => (
        <Wrapper isLogged={isLogged}>
          {!isLogged ? (
            <ButtonsWrapper>
              <HeaderButton isBig onClick={() => history.push('/login')} type="button">
                Login
              </HeaderButton>
              <HeaderButton isBig onClick={() => history.push('/register')} isColored type="button">
                Register
              </HeaderButton>
            </ButtonsWrapper>
          ) : (
            <>
              <IconsWrapper>
                {/*<HeaderIcon icon={faUserAlt} tooltipContent={'Profile'} placement={'bottom'} action={() => history.push('/profile')} />*/}
                {/*<Notifications notifications={notifications} history={history} />*/}
                <HeaderIcon icon={faSignOutAlt} tooltipContent={'Logout'} placement={'bottom'} action={handleLogout} />
              </IconsWrapper>
              <MobileWrapper>
                <MobileMenu notifications={notifications} history={history} handleLogout={handleLogout} />
              </MobileWrapper>
            </>
          )}
        </Wrapper>
      )}
    </SocketContext.Consumer>
  );
};

export default HeaderActions;
