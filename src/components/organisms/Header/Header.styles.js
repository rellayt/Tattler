import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  box-shadow: 4px -3px 12px rgba(115, 124, 142, 0.3);
  grid-column: 2/4;
`;