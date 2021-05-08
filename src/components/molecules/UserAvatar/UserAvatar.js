import React from 'react';
import { Wrapper } from './UserAvatar.styles';

const UserAvatar = ({ size, path }) => (
  <Wrapper size={size}>
    <img src={path} alt="User avatar" />
  </Wrapper>
);

export default UserAvatar;
