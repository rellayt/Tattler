import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { StylesProvider } from '@material-ui/core/styles';
import { AuthProvider } from '../providers/Auth';
import { SnackBarProvider } from '../providers/SnackBar';
import routes from '../config/Routes';
import AppRoute from '../components/templates/AppRoute';
import { InnerWrapper } from '../components/templates/MainTemplate/MainTemplate.styles';
import { SocketProvider } from '../providers/Socket';

const Root = () => {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StylesProvider injectFirst>
            <SnackBarProvider>
              <SocketProvider>
                <MainTemplate>
                  <InnerWrapper>
                    <Switch>
                      {routes.map(({ path, component, privateAfterAuth, privateBeforeAuth }) => (
                        <AppRoute
                          key={path}
                          path={path}
                          component={component}
                          privateAfterAuth={privateAfterAuth}
                          privateBeforeAuth={privateBeforeAuth}
                        />
                      ))}
                      <Redirect exact from="/channel" to="/channel/1" />
                      <Redirect exact from="/" to="/home" />
                      <Redirect from="/*" to="/home" />
                    </Switch>
                  </InnerWrapper>
                </MainTemplate>
              </SocketProvider>
            </SnackBarProvider>
          </StylesProvider>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
};

export default Root;
