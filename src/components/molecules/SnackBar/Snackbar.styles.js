import styled from 'styled-components';
import { Snackbar } from '@material-ui/core';

export const StyledSnackBar = styled(Snackbar)`
  .MuiAlert-icon {
    margin: auto;
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  }
  .MuiAlert-root {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};
  }
  .MuiAlert-filledSuccess {
    background-color: ${({ theme: { colors } }) => colors.grassGreen};
  }
  .MuiAlert-filledError {
    background-color: ${({ theme: { colors } }) => colors.error};
  }
  .MuiAlert-message {
    padding: 8px 7px 8px 15px;
  }
`;
