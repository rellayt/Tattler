import Cookies from 'universal-cookie';

const cookies = new Cookies();

let user = cookies.get('user') ? cookies.get('user') : null;
let token = cookies.get('token') ? cookies.get('token') : null;

export const initialState = {
  user: user,
  token: token,
  loading: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...initialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case 'LOGIN_FAILED':
      return {
        ...initialState,
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
        ...initialState,
        user: null,
        token: null,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
