import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import Login from './auth/Login';
import { StylesProvider } from '@material-ui/core/styles';
import Register from './auth/Register';
import { AuthProvider } from '../providers/Auth';
import Home from './Home';
import { InnerWrapper } from '../components/templates/MainTemplate/MainTemplate.styles';
import Profile from './Profile';

const Root = () => {
  return (
    <AuthProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StylesProvider injectFirst>
            <MainTemplate>
              <InnerWrapper>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/home" />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>{' '}
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                </Switch>
              </InnerWrapper>
            </MainTemplate>
          </StylesProvider>
        </ThemeProvider>
      </Router>
    </AuthProvider>
  );
};

export default Root;
