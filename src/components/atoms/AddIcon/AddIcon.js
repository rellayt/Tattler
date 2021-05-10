import React from 'react';
import { Wrapper } from './AddIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AddIcon = ({ active }) => {
  return (
    <Wrapper active={active}>
      <Link to={`/messages/new`}>
        <FontAwesomeIcon icon={faPlusCircle} />
      </Link>
    </Wrapper>
  );
};

export default AddIcon;
