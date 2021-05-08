import React from 'react';
import { MessagesWrapper } from './Messages.styles';
import MessageOverviewList from '../components/organisms/MessageOverviewList/MessageOverviewList';
import PrivateMessages from '../components/organisms/PrivateMessages/PrivateMessages';
import PrivateMessagesAction from '../components/organisms/PrivateMessagesAction/PrivateMessagesAction';
import { useAuthState } from '../providers/Auth';
import { Wrapper } from '../components/templates/BasicWrapper';
import { useParams } from 'react-router';
import { useRoom } from '../hooks/useRoom';

const Messages = () => {
  const {
    user: { id },
  } = useAuthState();
  const { roomId } = useParams();
  const enabled = Boolean(roomId && id);
  const { messages, messagesLoading, typing, sendMessage, startTyping, endTyping, users, socket } = useRoom({
    enabled,
    roomId,
    userId: id,
  });
  return (
    <Wrapper>
      <MessagesWrapper>
        <MessageOverviewList roomId={roomId} userId={id} socket={socket} />
        <PrivateMessages
          privateMessagesData={messages}
          anyChats={true}
          id={id}
          active={enabled}
          users={users}
          loading={messagesLoading}
          typing={typing}
        />
        <PrivateMessagesAction
          active={enabled}
          sendMessage={sendMessage}
          startTyping={startTyping}
          endTyping={endTyping}
          loading={messagesLoading}
        />
      </MessagesWrapper>
    </Wrapper>
  );
};

export default Messages;
