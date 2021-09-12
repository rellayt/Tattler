import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 125px;
  height: 125px;
  align-items: center;
  justify-content: center;
  display: grid;
  margin: 5px;
  animation: fade 150ms ease-in;
  transition: opacity 200ms ease-out;
  & > * {
    align-self: center;
    justify-self: center;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Name = styled.div`
  margin: 4px 0;
`;

export const animation = css`
  box-shadow: 0 0 15px -2px ${({ isSpeaking, theme: { colors } }) => (isSpeaking ? colors.darkGrey : 'transparent')};
  opacity: ${({ isSpeaking }) => (isSpeaking ? '1' : '0.6')};
  transition: all ease-in 200ms;
`;
