import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 2/3;
  background: ${({ theme: { colors } }) => colors.white};
  z-index: 2;
  display: ${({ active }) => (active ? 'grid' : 'none')};
  grid-template-columns: 80% 20%;
  border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
  & > * {
    opacity: ${({ active }) => (active ? '1' : '0')};
  }
`;
export const InputWrapper = styled.div`
  grid-column: 1/2;
  width: 100%;
  padding: 0 20% 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  *:first-child {
    width: 100%;
  }
`;
