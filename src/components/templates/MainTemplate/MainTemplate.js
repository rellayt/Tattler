import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { InnerWrapper, Wrapper } from './MainTemplate.styles';
import { Header } from 'components/organisms/Header/Header';

export const MainTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <Header />
    <InnerWrapper>{children}</InnerWrapper>
  </Wrapper>
);

export default MainTemplate;
