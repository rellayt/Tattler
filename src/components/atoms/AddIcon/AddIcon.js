import React from 'react';
import { Wrapper } from './AddIcon.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StyledTooltip } from '../Tooltip/Tooltip';

const AddIcon = ({ active, tooltipContent, placement }) => {
  return (
    <Wrapper active={active}>
      <StyledTooltip title={tooltipContent} enterDelay={100} placement={placement}>
        <Link to={`/chats/new`}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </StyledTooltip>
    </Wrapper>
  );
};

export default AddIcon;
