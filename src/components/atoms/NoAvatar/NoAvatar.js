import React from 'react';
import { ProfileWrapper, Wrapper } from './NoAvatar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NoAvatar = ({ size, isProfile }) =>
  isProfile ? (
    <ProfileWrapper>
      <FontAwesomeIcon icon={faUserCircle} />
    </ProfileWrapper>
  ) : (
    <Wrapper size={size}>
      <FontAwesomeIcon icon={faUserCircle} />
    </Wrapper>
  );

export default NoAvatar;
