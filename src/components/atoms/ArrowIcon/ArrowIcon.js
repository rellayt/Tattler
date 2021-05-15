import React from 'react';
import { Wrapper } from './ArrowIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArrowIcon = () => (
  <Wrapper>
    <FontAwesomeIcon icon={faArrowRight} />
  </Wrapper>
);

export default ArrowIcon;
