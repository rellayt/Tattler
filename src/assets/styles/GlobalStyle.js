import { createGlobalStyle } from 'styled-components';
import RubikRegular from '../fonts/Rubik-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    
    html {
      box-sizing: border-box;
    }
    
    *, *::after, *::before {
      box-sizing: inherit;
    }
    @font-face {
      font-family: RubikRegular;
      font-style: normal;
      font-weight: normal;
      src: url(${RubikRegular}) format('truetype');
    }
    body {
      margin: 0;
      font-family: RubikRegular, 'Comic Sans MS';
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    a, button {
      font-family: 'Montserrat', sans-serif;
    }
`;
