import React from 'react';
import { Wrapper } from './GroupIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const GroupIcon = () => (
  <Wrapper>
    <FontAwesomeIcon icon={faUsers} />
  </Wrapper>
);

export default GroupIcon;
