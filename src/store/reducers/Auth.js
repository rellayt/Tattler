import Cookies from 'universal-cookie';

const cookies = new Cookies();

let token = cookies.get('token') ? cookies.get('token') : null;

export const initialState = {
  token: token,
  user: null,
  loading: true,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'REFRESH_TOKEN_REQUEST':
      return {
        user: null,
        token: null,
        loading: true,
      };
    case 'REFRESH_TOKEN_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case 'REFRESH_TOKEN_FAILED':
      return {
        user: null,
        token: null,
        loading: false,
      };
    case 'GUEST':
      return {
        ...initialState,
        loading: false,
      };
    case 'AUTHENTICATE_REQUEST':
      return {
        ...initialState,
        loading: true,
      };
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...initialState,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'AUTHENTICATE_FAILED':
      return {
        user: null,
        token: null,
        loading: false,
      };
    case 'USER_UPDATED':
      return {
        ...initialState,
        user: action.payload.user,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case 'REGISTER_REQUEST':
      return {
        ...initialState,
        loading: true,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case 'LOGOUT':
      return {
        loading: false,
        user: null,
        token: null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
