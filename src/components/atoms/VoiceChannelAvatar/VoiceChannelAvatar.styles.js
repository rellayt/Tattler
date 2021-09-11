import styled from 'styled-components';
import { AvatarProps } from '../../organisms/ProfileCard/ProfileCard.styles';
import { css } from 'styled-components';

export const Wrapper = styled.div``;

export const isSpeaking = css`
  box-shadow: 0 0 15px -2px ${({ isSpeaking, theme: { colors } }) => (isSpeaking ? colors.darkGrey : 'transparent')};
  opacity: ${({ isSpeaking }) => (isSpeaking ? '1' : '0.6')};
  transition: all ease-in 200ms;
`;

export const NoAvatar = styled(AvatarProps)`
  width: 90px;
  height: 90px;
  font-size: 40px;
  ${isSpeaking}
`;

export const Avatar = styled.div`
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    ${isSpeaking}
  }
`;
