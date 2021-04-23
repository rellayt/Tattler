import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme: { colors } }) => colors.lightSky};
  box-shadow: -3px 4px 12px rgba(115, 124, 142, 0.3);
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/3;
  grid-column: 1/1;
`;

export const Logo = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${({ theme: { colors } }) => colors.grassGreen};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 50px;

  h1 {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    color: ${({ theme: { colors } }) => colors.white};
    text-align: right;
    margin: 15px 20px 15px auto;
    position: relative;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: bold;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  width: 100%;
  height: 25px;
  margin: 15px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 7px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    background-color: transparent;
    right: 0;
    bottom: -6px;
    transform-origin: right;
    transition: 250ms all;
    transform: scaleX(0);
  }
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.black};
  }
  &.${activeClassName}:before, &:hover:before {
    background-color: ${({ theme }) => theme.colors.grassGreen};
    width: 100%;
    transform: scaleX(1);
  }
`;
