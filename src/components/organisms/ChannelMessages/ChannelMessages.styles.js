import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 5px 15px;
  background: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column-reverse;
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
  text-overflow: ellipsis;
  position: relative;
  overflow: hidden;
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
