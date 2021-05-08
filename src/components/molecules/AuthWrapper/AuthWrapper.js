import styled from 'styled-components';

export const AuthWrapper = styled.div`
  background-color: ${({ theme: { colors } }) => colors.white};
  //max-width: 500px;
  padding: 45px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.auth};
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
`;
