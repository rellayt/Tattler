import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const signIn = async (dispatch, payload) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login`, payload);
  if (response.data.user) {
    const {
      data: { user, accessToken },
    } = response;
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token: accessToken } });
    cookies.set('user', JSON.stringify(user), { path: '/' });
    cookies.set('token', accessToken, { path: '/' });
  }
};

export const register = async (dispatch, payload) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, payload);
  if (response.data.user) {
    const {
      data: { user, accessToken },
    } = response;
    dispatch({ type: 'REGISTER_SUCCESS', payload: { user, token: accessToken } });
    cookies.set('user', JSON.stringify(user), { path: '/' });
    cookies.set('token', accessToken, { path: '/' });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: 'LOGOUT' });
  cookies.remove('user');
  cookies.remove('token');
};
