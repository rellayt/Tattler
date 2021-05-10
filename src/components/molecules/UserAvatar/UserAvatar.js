import React from 'react';
import { Wrapper } from './UserAvatar.styles';

const UserAvatar = ({ size, path, hasBorder }) => (
  <Wrapper hasBorder={hasBorder} size={size}>
    <img src={path} alt="User avatar" />
  </Wrapper>
);

export default UserAvatar;
