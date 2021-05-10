import React from 'react';
import { Logo, StyledLink, Title, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => (
  <Wrapper>
    <Logo>
      <Title />
    </Logo>
    <StyledLink to="/home" text={'Home'} />
    <StyledLink to="/channel" text={'Channels'} />
    <StyledLink to="/messages" text={'Messages'} />
  </Wrapper>
);

export default Navigation;
