import React, { useEffect } from 'react';
import { StyledSnackBar } from './Snackbar.styles';
import MuiAlert from '@material-ui/lab/Alert';
import { CloseSnackBar } from '../../../store/actions/SnackBar';
import { useSnackBarDispatch } from '../../../providers/SnackBar';

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

const AUTO_DISMISS = 1700;

const Snackbar = ({ config: { content, type, open } }) => {
  const dispatch = useSnackBarDispatch();

  useEffect(() => {
    setTimeout(() => {
      CloseSnackBar(dispatch);
    }, AUTO_DISMISS);
  }, [content, type, open]);
  return (
    <StyledSnackBar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
      <Alert severity={type}>{content}</Alert>
    </StyledSnackBar>
  );
};

export default Snackbar;
