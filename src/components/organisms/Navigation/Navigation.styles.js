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
`;
export const Title = styled.h1`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  margin: 15px 20px 15px auto;
  position: relative;
  &:before {
    content: 'Tattler';
  }
    @media (max-width: 480px) {
      font-weight: 600;
        &:before {
          content: 'T';
        }
    }
    @media (max-width: 768px) {
      margin: 7px auto;
    }
  }
`;
const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: 500;
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
  &:after {
    content: ${({ text }) => `'${text}'`};
  }
  @media (max-width: 480px) {
    justify-content: center;
    padding-right: 0;
    &:after {
      content: ${({ text }) => `'${text.charAt(0)}'`};
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
    }
  }
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.black};
    pointer-events: none;
  }
  &.${activeClassName}:before, &:hover:before {
    background-color: ${({ theme }) => theme.colors.grassGreen};
    width: 100%;
    transform: scaleX(1);
  }
`;
