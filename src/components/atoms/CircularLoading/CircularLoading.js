import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

export const CircularLoading = styled(CircularProgress)`
  color: ${({ theme: { colors } }) => colors.white};
  width: 30px !important;
  height: 30px !important;
`;
