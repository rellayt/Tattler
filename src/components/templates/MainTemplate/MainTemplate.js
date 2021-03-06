import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import { Header } from 'components/organisms/Header/Header';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <Header />
      {children}
    </Wrapper>
  );
};
