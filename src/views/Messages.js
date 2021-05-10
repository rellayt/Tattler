import React, { useEffect, useState } from 'react';
import { MessagesWrapper } from './Messages.styles';
import MessageOverviewList from '../components/organisms/MessageOverviewList/MessageOverviewList';
import PrivateMessages from '../components/organisms/PrivateMessages/PrivateMessages';
import PrivateMessagesAction from '../components/organisms/PrivateMessagesAction/PrivateMessagesAction';
import { useAuthState } from '../providers/Auth';
import { Wrapper } from '../components/templates/BasicWrapper';
import { useParams } from 'react-router';
import { useRoom } from '../hooks/useRoom';
import NewRoom from '../components/organisms/NewRoom/NewRoom';

const Messages = ({ history: { location } }) => {
  const {
    user: { id },
  } = useAuthState();
  useEffect(() => {
    const { pathname } = location;
    const newRoom = pathname.split('/')[2] === 'new';
    setNewRoom(newRoom);
  }, []);
  const { roomId } = useParams();
  const [anyChats, setAnyChats] = useState(false);
  const [newRoom, setNewRoom] = useState(false);
  const enabled = Boolean(roomId && id);
  const { messages, messagesLoading, typing, sendMessage, startTyping, endTyping, roomParticipants, socket } = useRoom({
    enabled,
    roomId,
    userId: id,
  });
  return (
    <Wrapper>
      <MessagesWrapper>
        <MessageOverviewList roomId={roomId} userId={id} socket={socket} setAnyChats={setAnyChats} activeCreateRoom={newRoom} />
        {newRoom && <NewRoom />}
        {roomId && (
          <>
            <PrivateMessages
              privateMessagesData={messages}
              anyChats={anyChats}
              id={id}
              active={enabled}
              roomParticipants={roomParticipants}
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
          </>
        )}
      </MessagesWrapper>
    </Wrapper>
  );
};

export default Messages;
