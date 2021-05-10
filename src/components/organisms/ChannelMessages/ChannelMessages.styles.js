import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 5px 5px 5px 10px;
  background: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column-reverse;
`;

export const MessageWrapper = styled.div`
  width: 100%;
  //margin: 5px 0;
  display: flex;
  justify-content: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
`;

export const Message = styled.div`
  display: grid;
  grid-template-columns: ${({ isMyMessage }) => (isMyMessage ? '1fr 35px' : '35px 1fr')};
  grid-template-rows: 25px 1fr 20px;
  justify-content: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
  div:first-child,
  div:nth-child(2),
  div:nth-child(4) {
    justify-self: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
    grid-column: ${({ isMyMessage }) => (isMyMessage ? '1/2' : '2/3')};
  }
  div:nth-child(2) {
    background: ${({ isMyMessage, theme: { colors } }) => (isMyMessage ? colors.grey : colors.grassGreen)};
    border-radius: ${({ isMyMessage }) => (isMyMessage ? '15px 15px 4px 15px' : '15px 15px 15px 4px')};
    color: ${({ isMyMessage, theme: { colors } }) => (isMyMessage ? colors.black : colors.white)};
    grid-column: ${({ isMyMessage }) => (isMyMessage ? '1/2' : '2/3')};
  }
  div:nth-child(3) {
    grid-column: ${({ isMyMessage }) => (isMyMessage ? '2/3' : '1/2')};
    justify-self: ${({ isMyMessage }) => (isMyMessage ? 'flex-end' : 'flex-start')};
  }
`;

export const AvatarWrapper = styled.div`
  align-self: flex-end;
  grid-row: 2/4;
  padding-bottom: 5px;
`;

export const Content = styled.div`
  grid-row: 2/3;
  min-width: min-content;
  max-width: 47%;
  text-overflow: ellipsis;
  position: relative;
  overflow: hidden;
  padding: 8px 10px;
  box-shadow: inset 0 0 5px -4px rgba(0, 0, 0, 5);
`;

export const Name = styled.div`
  justify-self: flex-start;
  align-self: center;
  grid-row: 1/2;
  margin: 0 7px;
`;

export const Date = styled.div`
  grid-row: 3/4;
  justify-self: flex-start;
  align-self: center;
  color: ${({ theme: { colors } }) => colors.darkGrey};
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`;
