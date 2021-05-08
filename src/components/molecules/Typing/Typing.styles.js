import styled from 'styled-components';

export const TypingWrapper = styled.div`
  width: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px 5px;
  background: #e6e6e6;
  border-radius: 20px;

  div:first-child {
    animation-delay: 0s;
  }
  div:nth-child(2) {
    animation-delay: 0.2s;
  }
  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;
