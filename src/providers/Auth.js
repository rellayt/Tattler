import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { AuthReducer, initialState } from '../store/reducers/Auth';
import axios from 'axios';
import { cookies } from '../index';
import { Authenticate, refreshToken } from '../store/actions/Auth';
import { Backdrop } from '../components/templates/Backdrop/Backdrop';
import { CircularProgress } from '@material-ui/core';
import { useSnackBarDispatch } from './SnackBar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { AUTH_ERROR } from '../config/Snackbars';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

axios.interceptors.request.use(
  (request) => {
    const token = cookies.get('token');
    if (token) {
      const httpMethods = ['post', 'put', 'get', 'delete'];
      httpMethods.forEach((method) => (request.headers[method]['Authorization'] = `Bearer ${token}`));
    }
    return request;
  },
  (error) => Promise.reject(error)
);

export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error('useAuthState must be used within AuthProvider');
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error('useAuthDispatch must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);
  const snackBarDispatch = useSnackBarDispatch();
  useEffect(() => {
    authState.token
      ? (async () => {
          const isAuthenticated = await Authenticate(dispatch);
          if (!isAuthenticated) OpenSnackBar(snackBarDispatch, AUTH_ERROR);
        })()
      : dispatch({ type: 'GUEST' });
  }, []);

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response && error.response.status === 401) {
        const isRefreshed = await refreshToken(dispatch);
        if (isRefreshed !== undefined && !isRefreshed) OpenSnackBar(snackBarDispatch, AUTH_ERROR);
        axios.defaults.headers.common['Authorization'] = `Bearer ${authState.token}`;
      }
      return Promise.reject(error);
    }
  );

  return (
    <AuthStateContext.Provider value={authState}>
      {authState.loading ? (
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
      )}
    </AuthStateContext.Provider>
  );
};
