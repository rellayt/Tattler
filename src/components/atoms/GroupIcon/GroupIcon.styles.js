import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.grassGreen};
  padding: 9px;
  border-radius: 50%;
`;
