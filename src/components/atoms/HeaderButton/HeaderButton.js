import styled from 'styled-components';

export const HeaderButton = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '9px 36px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.l : fontSize.m)};
  color: ${({ isColored, theme: { colors } }) => (isColored ? colors.white : colors.darkGrey)};
  background: ${({ isColored, theme: { colors } }) => (isColored ? colors.grassGreen : colors.lightGrey)};
  border-radius: 20px;
  border: 2px solid ${({ isColored, theme: { colors } }) => (isColored ? colors.lightGrey : 'transparent')};
  font-weight: 500;
  box-shadow: ${({ isColored }) => (isColored ? 'inset 0 1px 3px 0 rgb(0 0 0 / 8%);' : 'none')};
  transition: 250ms ease;
  @media (max-width: 480px) {
    padding: ${({ isBig }) => (isBig ? '7px 20px' : '5px 15px')};
  }
  &:hover {
    color: ${({ isColored, theme: { colors } }) => (isColored ? colors.grassGreen : colors.grassGreen)};
    background: ${({ isColored, theme: { colors } }) => (isColored ? colors.lightGrey : 'transparent')};
    border: 2px solid ${({ isColored, theme: { colors } }) => (isColored ? colors.grassGreen : 'transparent')};
  }
  &:focus {
    outline: none;
  }
`;
