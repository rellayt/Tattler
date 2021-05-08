import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthState } from '../../providers/Auth';

const AppRoute = ({ component: Component, path, privateAfterAuth, privateBeforeAuth, ...rest }) => {
  const userDetails = useAuthState();

  return (
    <Route
      path={path}
      render={(props) =>
        privateBeforeAuth && !userDetails.token ? (
          <Redirect to={'/login'} />
        ) : privateAfterAuth && userDetails.token ? (
          <Redirect to={'/profile'} />
        ) : (
          <Component {...props} />
        )
      }
      {...rest}
    />
  );
};

export default AppRoute;
