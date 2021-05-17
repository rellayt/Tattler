import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';
import Typing from '../Typing/Typing';
import { Wrapper } from './TypingUser.styles';
import { getAvatarPath } from '../../../helpers/getAvatarPath';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';

const TypingUser = ({ id, avatar }) => (
  <Wrapper>
    {avatar ? <UserAvatar size={'30px'} path={getAvatarPath(id)} /> : <NoAvatar size={'xl'} />}
    <Typing />
  </Wrapper>
);

TypingUser.propTypes = {};

export default TypingUser;
