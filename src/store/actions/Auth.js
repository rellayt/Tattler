import axios from 'axios';
import { cookies } from '../../index';

export const signIn = async (dispatch, payload) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, payload);
  if (response.data.user) {
    const {
      data: { user, accessToken: token },
    } = response;
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    cookies.set('user', JSON.stringify(user), { path: '/' });
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
    cookies.set('user', JSON.stringify(user), { path: '/' });
    cookies.set('token', token, { path: '/' });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  cookies.remove('user');
  cookies.remove('token');
};
