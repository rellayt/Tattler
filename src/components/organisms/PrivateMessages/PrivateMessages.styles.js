import styled from 'styled-components';
import { Message as ChannelMessage } from '../ChannelMessages/ChannelMessages.styles';

export const Wrapper = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-rows: 70px 1fr;
  border-right: 1px solid ${({ theme: { colors } }) => colors.border};
  box-shadow: 5px 0 9px -4px ${({ theme: { colors } }) => colors.border};
  border-radius: 15px;
  div:nth-child(2) {
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    display: ${({ active }) => (active ? 'column-reverse' : 'none')};
  }
`;

export const Heading = styled.div`
  z-index: 2;
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  grid-row: 1/2;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 0 15px 0 0;
  box-shadow: 0 3px 9px -4px ${({ theme: { colors } }) => colors.border};
  & > * {
    opacity: ${({ active }) => (active ? '1' : '0')};
    justify-self: center;
    align-self: center;
  }
  span:nth-child(2) {
    justify-self: flex-start;
  }
  a:last-child {
    justify-self: flex-end;
    margin: 0 4%;
  }
`;

export const PrivateMessagesWrapper = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 5px 5px 5px 10px;
  background: ${({ theme: { colors } }) => colors.white};
  display: flex;
  flex-direction: column-reverse;
`;

export const HeadingName = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.xl};
  grid-column: 2/3;
  justify-self: flex-start;
`;

export const FindFriends = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme: { fontSize } }) => fontSize.l};
`;

export const Displayed = styled.div`
  font-size: ${({ theme: { fontSize } }) => fontSize.s};
  color: ${({ theme: { colors } }) => colors.darkGrey};
  grid-row: 4/5;
  grid-column: 1/2;
  display: flex;
  align-self: center;
  justify-content: flex-end;
`;

export const Message = styled(ChannelMessage)`
  grid-template-rows: 25px 1fr 20px 10px;
`;
