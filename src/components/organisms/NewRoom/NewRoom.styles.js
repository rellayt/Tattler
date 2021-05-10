import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 100px 1fr;
`;

export const Heading = styled.div`
  grid-row: 1/2;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  background: ${({ theme: { colors } }) => colors.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  box-shadow: 0 4px 12px -5px ${({ theme: { colors } }) => colors.grey};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
