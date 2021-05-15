import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import Cookies from 'universal-cookie';
import 'assets/styles/fonts.css';

export const cookies = new Cookies();

ReactDOM.render(
  <>
    <Root />
  </>,
  document.getElementById('root')
);
