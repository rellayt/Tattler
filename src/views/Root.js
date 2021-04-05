import React from 'react';
// import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from '../assets/styles/theme';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${() => `${window.innerWidth / 2}px`};
  background-color: ${({ theme: { colors } }) => colors.lightPurple};
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>asdsds</Wrapper>
  </ThemeProvider>
);

// Root.propTypes = {};

export default Root;
