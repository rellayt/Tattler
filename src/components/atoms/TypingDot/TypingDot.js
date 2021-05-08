import styled from 'styled-components';

export const TypingDot = styled.div`
  float: left;
  width: 8px;
  height: 8px;
  margin: 2px 5px;
  background: #8d8c91;
  border-radius: 50%;
  opacity: 0;
  animation: loadingFade 1.2s infinite;

  @keyframes loadingFade {
    0% {
      opacity: 0;
      transform: scale(0.65, 0.65);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2, 1.2);
    }
    100% {
      opacity: 0;
      transform: scale(1.1, 1.1);
    }
  }
`;
