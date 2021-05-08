import styled from 'styled-components';
import { Card } from '../../../views/Profile.styles';

export const Wrapper = styled(Card)`
  grid-column: 1/2;
  grid-row: 1/3;
  span:nth-child(2) {
    //margin-top: 10px;
    //padding: 10px;
    //height: 40px;
  }
  button:nth-child(6) {
    margin-top: 15px;
    grid-column: 1/3;
    justify-self: center;
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.grassGreen};
    border: 2px solid ${({ theme: { colors } }) => colors.grassGreen};
    &:hover {
      background: ${({ theme: { colors } }) => colors.grassGreen};
      color: ${({ theme: { colors } }) => colors.white};
      -webkit-filter: brightness(0.95);
    }
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/3;
  margin: 20px auto 40px auto;
  button {
    //margin-bottom: 15px;
  }
`;

export const Avatar = styled.div`
  background: ${({ theme: { colors } }) => colors.grassGreen};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.grassGreen};
  font-size: 75px;
  width: 150px;
  height: 150px;
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
`;
export const Heading = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
  color: ${({ theme: { colors } }) => colors.black};
  font-weight: 500;
  height: 40px;
  margin-top: auto;
  grid-column: 1/2;
`;
export const Lastlogin = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  margin-top: auto;
  margin-left: auto;
  height: 40px;
  grid-column: 2/3;
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.xl : fontSize.l)};
  height: 35px;
  grid-column: 1/3;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;
