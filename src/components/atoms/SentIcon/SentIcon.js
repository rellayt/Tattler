import React from 'react';
import { Wrapper } from '../SentIcon/SentIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const SentIcon = ({ size }) => (
  <Wrapper size={size}>
    <FontAwesomeIcon icon={faCheckCircle} />
  </Wrapper>
);

export default SentIcon;
