import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: repeat(4, 25%);
  padding: 7px 11px;

  & > * {
    align-self: center;
    justify-self: center;
  }
  @media (max-width: 1024px) {
    grid-column: 1/3;
    grid-row: 2/3;
    padding: 6px;
    & > * {
      justify-self: flex-start;
    }
  }
`;
export const ContentWrapper = styled.div`
  padding: 5px 11px;
  border-radius: 15px;
  text-align: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }
  @media (max-width: 768px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.s};
    margin: 2px;
    padding: 6px 9px;
  }
  @media (max-width: 360px) {
    margin: 0;
  }
`;

export const TitleWrapper = styled(ContentWrapper)`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  color: ${({ theme: { colors } }) => colors.white};
`;

export const DataWrapper = styled(ContentWrapper)`
  background: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border: 1px solid ${({ theme: { colors } }) => colors.border};
`;
