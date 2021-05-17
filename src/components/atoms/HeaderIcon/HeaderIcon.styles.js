import styled from 'styled-components';

export const HeaderIconWrapper = styled.div`
  border-radius: 50%;
  background-color: ${({ theme: { colors } }) => colors.grassGreen};
  color: ${({ theme: { colors } }) => colors.grey};
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  z-index: 6;
  width: 43px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid transparent;
  transition: 300ms ease;
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.grey};
    color: ${({ theme: { colors } }) => colors.grassGreen};
    border: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
  }
`;
