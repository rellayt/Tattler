import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

export const Button = styled(MaterialButton)`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  text-transform: none;
  font-size: ${({ isSmall, theme: { fontSize } }) => (isSmall ? fontSize.m : fontSize.l)};
  padding: 5px 12px;
  height: 45px;
  border-radius: 10px;
  color: ${({ theme: { colors } }) => colors.white};
  transition: all 200ms;
  &:hover {
    background: ${({ theme: { colors } }) => colors.grassGreen};
    color: ${({ theme: { colors } }) => colors.white};
    -webkit-filter: brightness(0.95);
  }
  &:disabled {
    background: ${({ theme: { colors } }) => colors.error};
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
