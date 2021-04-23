import styled from 'styled-components';
import { Tooltip } from '@material-ui/core';

export const StyledTooltip = styled((props) => <Tooltip classes={{ popper: props.className, tooltip: 'tooltip' }} {...props} />)`
  & .tooltip {
    background-color: ${({ theme: { colors } }) => colors.grassGreen};
    color: ${({ theme: { colors } }) => colors.gray};
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
    border-radius: 15px;
  }
`;
