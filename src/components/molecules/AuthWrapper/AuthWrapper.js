import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  width: 100%;
  min-width: 475px;
  padding: 45px 45px;
  border-radius: 10px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.auth};
`;
