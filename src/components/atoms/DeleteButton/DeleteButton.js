import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Wrapper } from './DeleteButton.styles';

const DeleteButton = ({ handleClick }) => (
  <Wrapper>
    <IconButton onClick={handleClick}>
      <CloseIcon />
    </IconButton>
  </Wrapper>
);

export default DeleteButton;
