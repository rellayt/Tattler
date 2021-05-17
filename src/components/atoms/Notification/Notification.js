import styled from 'styled-components';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

export const Notification = styled(SpeedDialAction)`
  opacity: ${({ displayed }) => (displayed ? '0.8' : '1')};
  background: ${({ displayed, theme: { colors } }) => (displayed ? colors.lightGrey : colors.grassGreen)};
  color: ${({ displayed, theme: { colors } }) => (displayed ? colors.black : colors.white)};
`;
