import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 37em;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 50% 50%;
  & > * {
    margin: 18px;
  }
  @media (max-width: 1440px) {
    & > * {
      margin: 18px;
    }
  }
  @media (max-width: 1024px) {
    height: 45em;
    grid-template-columns: 1fr;
    grid-template-rows: 33% 33% 33%;
    & > * {
      margin: 12px;
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border-radius: 20px;
  //padding: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const ContentCard = styled(Card)`
  grid-column: 2/3;
  grid-template-rows: 45px 1fr;
  @media (max-width: 1024px) {
    grid-column: 1/3;
  }
`;

export const Heading = styled.div`
  grid-row: 1/2;
  grid-column: 1/3;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  padding-top: 10px;
  padding-left: 20px;
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 500;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;
