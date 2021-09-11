import styled from 'styled-components';
import { Card } from '../../../views/Profile.styles';

export const Wrapper = styled(Card)`
  grid-column: 1/2;
  grid-row: 1/3;
  padding: 35px;
  display: grid;
  grid-template-rows: 60% 40%;
  @media (max-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: 40% 60%;
    grid-column: 1/3;
    grid-row: 1/2;
    padding: 10px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/3;
  margin: 10px auto 20px auto;
  .MuiCircularProgress-root {
    color: ${({ theme: { colors } }) => colors.grassGreen};
    width: 127px !important;
    height: 127px !important;
    margin: 15px 0;
  }
  @media (max-width: 1024px) {
    margin: 7px;
    grid-column: 1/2;
    justify-content: center;
    .MuiCircularProgress-root {
      color: ${({ theme: { colors } }) => colors.grassGreen};
      width: 70px !important;
      height: 70px !important;
      margin: 15px 0;
    }
  }
`;

export const AvatarProps = styled.div`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.grassGreen};
  font-size: 75px;

  z-index: 1;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    width: 92%;
    height: 92%;
    background: ${({ theme: { colors } }) => colors.white};
  }
  @media (max-width: 1024px) {
    width: 94px;
    height: 94px;
    font-size: 44px;
  }
`;

export const Avatar = styled(AvatarProps)`
  width: 160px;
  height: 160px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
  @media (max-width: 1024px) {
    margin-top: 7px;
    align-items: center;
    flex-direction: column;
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-column: 1/3;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 20% 25% 25%;
  @media (max-width: 1024px) {
    grid-column: 2/3;
    padding: 12px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 33%);
  }
`;

export const Heading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 500;
  align-self: center;
  grid-column: 1/3;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LastLogin = styled.div`
  grid-column: 1/3;
  justify-self: flex-end;
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  @media (max-width: 1024px) {
    text-align: center;
    grid-column: 1/2;
    grid-row: 3/4;
    justify-self: center;
    align-self: center;
  }
`;

export const Name = styled.div`
  display: flex;
  grid-column: 1/3;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xxl};
  @media (max-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.xl};

    justify-self: center;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  @media (max-width: 1024px) {
    font-size: ${({ theme: { fontSize } }) => fontSize.l};

    justify-self: center;
    grid-column: 1/2;
    grid-row: 2/3;
  }
`;
