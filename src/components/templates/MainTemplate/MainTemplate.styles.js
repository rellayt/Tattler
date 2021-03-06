import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 140px 1fr 0.5fr;
  grid-template-rows: 100px 1fr;
  background-color: ${({ theme: { colors } }) => colors.lightGrey};
  overflow-y: auto;
  @media (max-width: 768px) {
    grid-template-columns: 110px 1fr 0.5fr;
  }
  @media (max-width: 480px) {
    grid-template-columns: 60px 1fr 0.5fr;
  }
`;

export const InnerWrapper = styled.div`
  grid-column: 2/4;
  height: calc(100%- 20px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 10px;
`;
