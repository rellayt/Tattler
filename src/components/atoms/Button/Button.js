import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const Button = styled(MaterialButton)`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  text-transform: none;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  height: 47px;
  color: ${({ theme: { colors } }) => colors.white};
  transition: all 200ms;
  &:hover {
    background: ${({ theme: { colors } }) => colors.grassGreen};
    -webkit-filter: brightness(0.95);
  }
  &:disabled {
    background: ${({ theme: { colors } }) => colors.error};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
