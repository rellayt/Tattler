import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 20px;
  transition: 150ms all ease-in;
  cursor: pointer;
  padding: 2px;
  position: relative;
  z-index: 5;
  background: ${({ active, theme: { colors } }) => (active ? colors.darkGrassGreen : colors.white)};
  pointer-events: ${({ active }) => (active ? 'none' : 'auto')};
  a {
    display: grid;
    grid-template-columns: 19% 59% 15% 7%;
    grid-template-rows: 50% 50%;
    height: 70px;
  }

  @media (max-width: 1440px) {
    border-radius: 10px;
    padding: 3px;
    a {
      grid-template-columns: 22% 54% 15% 9%;
    }
  }
  @media (max-width: 768px) {
    border-radius: 2px;
    a {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  }

  &:hover {
    background: ${({ theme: { colors } }) => colors.grey};
    opacity: 0.95;
  }
`;

export const Avatar = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Name = styled.div`
  grid-column: 2/5;
  grid-row: 1/2;
  margin-left: 3px;
  //display: flex;
  //justify-content: flex-start;
  //align-items: flex-end;
  margin-top: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: ${({ displayed }) => (displayed ? '400' : '500')};
  color: ${({ displayed, theme: { colors } }) => (displayed ? colors.black : colors.lowBlack)};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Message = styled.span`
  grid-column: 2/3;
  grid-row: 2/3;
  text-overflow: ellipsis;
  margin-left: 3px;
  overflow: hidden;
  white-space: nowrap;
  font-weight: ${({ displayed }) => (displayed ? '400' : '500')};
  color: ${({ displayed, theme: { colors } }) => (displayed ? colors.black : colors.grassGreen)};
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Date = styled.div`
  grid-column: 3/4;
  grid-row: 2/3;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.lowBlack};
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Checked = styled.div`
  grid-column: 4/5;
  grid-row: 1/3;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Dot = styled.div`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-shadow: inset 0 0 1px 0 ${({ theme: { colors } }) => colors.lightGrey};
  @media (max-width: 768px) {
    display: none;
  }
`;
