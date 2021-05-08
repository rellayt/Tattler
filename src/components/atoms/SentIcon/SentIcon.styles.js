import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ size, theme: { fontSize } }) => fontSize[size]};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  background: ${({ theme: { colors } }) => colors.lightGrey};
  border-radius: 50%;
`;
