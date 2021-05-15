import axios from 'axios';
import { cookies } from '../../index';

export const signIn = async (dispatch, payload) => {
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);

  if (response.data.user) {
    const {
      data: { user, accessToken: token },
    } = response;
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    cookies.set('token', token, { path: '/' });
  }
};

export const register = async (dispatch, payload) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, payload);

  if (response.data.user) {
    const {
      data: { user, accessToken: token },
    } = response;
    dispatch({ type: 'REGISTER_SUCCESS', payload: { user, token } });
    cookies.set('token', token, { path: '/' });
  }
};

export const Authenticate = async (dispatch, payload) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  try {
    const {
      data: { user, accessToken: token },
    } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/me`, payload);
    dispatch({ type: 'AUTHENTICATE_SUCCESS', payload: { user, token } });
    cookies.set('token', token, { path: '/' });
    return true;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      await refreshToken(dispatch);
      return true;
    } else {
      dispatch({ type: 'AUTHENTICATE_FAILED' });
      cookies.remove('token');
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`);
      return false;
    }
  }
};

let refreshFlag = false;
export const refreshToken = async (dispatch) => {
  if (!refreshFlag) {
    refreshFlag = true;
    dispatch({ type: 'REFRESH_TOKEN_REQUEST' });
    try {
      const {
        data: { user, accessToken: token },
      } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/refresh_token`);
      cookies.set('token', token, { path: '/' });

      dispatch({ type: 'REFRESH_TOKEN_SUCCESS', payload: { user, token } });

      setTimeout(() => (refreshFlag = false), 100);
      return true;
    } catch (error) {
      await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`);
      cookies.remove('token');

      dispatch({ type: 'REFRESH_TOKEN_FAILED' });

      setTimeout(() => (refreshFlag = false), 100);
      return false;
    }
  }
};

export const logout = async (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  cookies.remove('token');
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/auth/logout`);
  } catch (error) {
    console.error(error);
  }
};
