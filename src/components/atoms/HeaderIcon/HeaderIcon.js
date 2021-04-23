import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderIconWrapper } from './HeaderIcon.styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { StyledTooltip } from '../Tooltip/Tooltip';

export const HeaderIcon = ({ icon, tooltip, action }) => (
  <ButtonBase onClick={action}>
    <StyledTooltip title={tooltip} enterDelay={100}>
      <HeaderIconWrapper>
        <FontAwesomeIcon icon={icon} />
      </HeaderIconWrapper>
    </StyledTooltip>
  </ButtonBase>
);

export default HeaderIcon;
