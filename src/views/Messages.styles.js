import styled from 'styled-components';

export const MessagesWrapper = styled.div`
  width: 80%;
  height: 45em;
  margin: 10px 0;
  border-radius: 15px;
  display: grid;
  grid-template-columns: minmax(240px, 0.4fr) 1fr;
  grid-template-rows: 85% 15%;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  background: ${({ theme: { colors } }) => colors.white};
  @media (max-width: 1440px) {
    width: 95%;
    margin: 5px 0;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    grid-template-columns: 70px 1fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 70px 1fr;
  }
`;
