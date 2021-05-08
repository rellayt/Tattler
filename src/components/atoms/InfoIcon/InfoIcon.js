import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from '../NoAvatar/NoAvatar.styles';
import { Link } from 'react-router-dom';

const InfoIcon = ({ size, path }) => (
  <Link to={path}>
    <Wrapper size={size}>
      <FontAwesomeIcon icon={faInfoCircle} />
    </Wrapper>
  </Link>
);

export default InfoIcon;
