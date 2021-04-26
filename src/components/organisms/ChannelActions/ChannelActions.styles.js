import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  background: ${({ theme: { colors } }) => colors.white};
  display: grid;
  grid-template-columns: 70% 30%;
  border-radius: 5px;
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
export const ButtonWrapper = styled.div`
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  button {
    width: 85px;
    border-radius: 15px;
  }
`;
