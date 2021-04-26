import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 2px 15px;
  background: ${({ theme: { colors } }) => colors.white};
  //box-shadow: inset 0 0 3px 1px rgba(0, 0, 0, 0.9);
`;

export const MessageWrapper = styled.div`
  width: 100%;
  margin: 5px 0;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
  div:nth-child(2) {
    background: ${({ isMyMessage, theme: { colors } }) => (isMyMessage ? colors.grey : colors.grassGreen)};
    border-radius: ${({ isMyMessage }) => (isMyMessage ? '15px 15px 4px 15px' : '15px 15px 15px 4px')};
    color: ${({ isMyMessage, theme: { colors } }) => (isMyMessage ? colors.black : colors.white)};
  }
`;
export const Content = styled.div`
  max-width: 44%;
  padding: 8px;
  box-shadow: inset 0 0 5px -4px rgba(0, 0, 0, 5);
`;

export const Name = styled.div`
  margin: 2px 8px;
`;

export const Date = styled.div`
  margin: 1px 3px;
  color: ${({ theme: { colors } }) => colors.darkGrey};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;

export const LoadingWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const LoadingMessage = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: 15px;
  margin: 6px 0;
`;
