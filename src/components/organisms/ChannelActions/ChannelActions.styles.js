import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  background: ${({ theme: { colors } }) => colors.white};
  display: grid;
  grid-template-columns: 70% 30%;
  @media (max-width: 480px) {
    grid-template-columns: 60% 40%;
  }
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  grid-column: 1/2;
  width: 100%;
  padding: 0 20% 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    padding: 0 10% 0 5%;
  }
  *:first-child {
    width: 100%;
  }
`;
export const ButtonWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  margin: 0 5px;
  button {
    width: 85px;
    border-radius: 15px;
  }
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;
