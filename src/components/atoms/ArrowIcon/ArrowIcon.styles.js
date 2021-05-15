import styled from 'styled-components';

export const Wrapper = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.black};
  margin: 5px;
`;
