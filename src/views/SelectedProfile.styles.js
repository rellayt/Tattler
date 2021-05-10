import styled from 'styled-components';

export const SelectedProfileWrapper = styled.div`
  width: 30em;
  height: 34em;
  margin: 10px 0;
  border-radius: 15px;
  display: grid;
  grid-template-rows: 30% 12% 58%;
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  background: ${({ theme: { colors } }) => colors.white};
  @media (max-width: 1440px) {
    width: 25em;
    height: 32em;
    margin: 5px 0;
  }
  @media (max-width: 768px) {
    width: 25em;
    height: 29em;
    margin: 0;
  }
`;

export const LoadingWrapper = styled.div`
  grid-row: 1/4;
  span:first-child {
    transform: scale(1);
    margin: 0;
    border-radius: 15px 15px 0 0;
  }
  span:nth-child(2) {
    margin: 55px auto 30px auto;
  }
  span:last-child {
    margin: 30px auto;
  }
  & > * {
    margin: 10px;
  }
`;

export const Heading = styled.div`
  grid-row: 1/2;
  background: ${({ theme: { colors } }) => colors.grassGreen};
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  div:first-child {
    transform: ${({ isAvatar }) => (isAvatar ? 'translateY(62px)' : 'translateY(85px)')};
  }
`;

export const Content = styled.div`
  grid-row: 3/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  button:last-child {
    margin-top: 23px;
  }
  @media (max-width: 768px) {
    button:last-child {
      margin: 15px 0;
    }
  }
`;

export const Name = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
`;

export const Item = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.m};
  align-self: flex-start;
  margin: 5px 15px;
  @media (max-width: 1440px) {
    margin: 4px 7px;
  }
  @media (max-width: 768px) {
    margin: 2px 4px;
  }
`;
