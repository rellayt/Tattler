import { createGlobalStyle } from 'styled-components';
import { fade } from '../../components/templates/Backdrop/Backdrop';

export const GlobalStyle = createGlobalStyle`
    
    html {
      box-sizing: border-box;
    }
     
    *, *::after, *::before {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-family: 'Rubik', sans-serif; 
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; 
    }  
    
    a, button {
      font-family: 'Rubik', sans-serif;
      font-weight: 400;
    }
    .MuiSkeleton-text {
    transform: scale(1, 0.8);
    transition: opacity;
    animation: ${fade} 0.3s ease;
    }
    .MuiMenuItem-root {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
    .MuiMenu-list {
      color: ${({ theme: { colors } }) => colors.black};
      background: ${({ theme: { colors } }) => colors.lightGrey};
    }
`;
