import styled, { keyframes } from 'styled-components';
import { Backdrop as BackdropWrapper } from '@material-ui/core';

export const fade = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 0.6 !important;
  }
  `;

export const Backdrop = styled(BackdropWrapper)`
  position: absolute;
  z-index: 10;
  color: ${({ theme: { colors } }) => colors.white};
  transition: opacity;
  animation: ${fade} 1s ease;
`;
