import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.basic};
  border-radius: 20px;
  padding: 40px 35px;
  width: 60vw;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 90px 1fr 1fr;
  @media (max-width: 768px) {
    width: 94vw;
  }
  @media (max-width: 1440px) {
    width: 75vw;
  }
`;

export const Heading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 600;
  justify-self: flex-start;
  grid-column: 1/3;
  grid-row: 1/2;
`;

export const FirstSection = styled.div`
  grid-column: 1/2;
  padding: 0 5px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
`;

export const Avatar = styled.div`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.grassGreen};
  font-size: 65px;
  width: 170px;
  height: 170px;
  z-index: 1;
  position: relative;
  margin-bottom: 10px;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    width: 92%;
    height: 92%;
    background: ${({ theme: { colors } }) => colors.white};
  }
`;
