import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeaderIconWrapper } from './HeaderIcon.styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { StyledTooltip } from '../Tooltip/Tooltip';

export const HeaderIcon = ({ icon, tooltipContent, action, placement }) => (
  <>
    {tooltipContent ? (
      <ButtonBase onClick={action}>
        <StyledTooltip title={tooltipContent} enterDelay={100} placement={placement}>
          <HeaderIconWrapper>
            <FontAwesomeIcon icon={icon} />
          </HeaderIconWrapper>
        </StyledTooltip>
      </ButtonBase>
    ) : (
      <HeaderIconWrapper>
        <FontAwesomeIcon icon={icon} />
      </HeaderIconWrapper>
    )}
  </>
);

export default HeaderIcon;
