import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 45% 55%;
  & > * {
    margin: 18px;
  }
  grid-template-rows: 50% 50%;
`;

export const Card = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border-radius: 20px;
  padding: 25px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const ContentCard = styled(Card)`
  grid-column: 2/3;
  padding-top: 10px;
  grid-template-rows: 100px;
`;

export const Heading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 600;
  &::after {
    content: '';
    display: block;
    margin-top: 10px;
    height: 1px;
    width: calc(100% + 50px);
    transform: translateX(-25px);
    background: ${({ theme: { colors } }) => colors.grey};
  }
`;
