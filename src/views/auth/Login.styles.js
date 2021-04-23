import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ForgotPassword = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme: { colors } }) => colors.white};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  line-height: 30px;
  border-bottom: 2px solid transparent;
  transition: 200ms all;
  text-decoration: none;
  &:hover {
    color: ${({ theme: { colors } }) => colors.black};
    border-bottom: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
  }
`;
