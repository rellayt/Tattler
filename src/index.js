import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import axios from 'axios';
import Cookies from 'universal-cookie';
import 'assets/styles/fonts.css';

export const cookies = new Cookies();
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

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
