import React from 'react';
import { Wrapper, Logo, StyledLink, Title } from 'components/organisms/Navigation/Navigation.styles';

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
