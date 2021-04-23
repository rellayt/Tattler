import React from 'react';
import { Wrapper, Logo, StyledLink } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h1>Tattler</h1>
    </Logo>
    <StyledLink to="/home">Home</StyledLink>
    <StyledLink to="/channel">Channels</StyledLink>
    <StyledLink to="/messages">Messages</StyledLink>
  </Wrapper>
);

export default Navigation;
