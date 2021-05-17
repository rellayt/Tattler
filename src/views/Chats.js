import React, { useEffect, useState } from 'react';
import { ChatsWrapper } from './Chats.styles';
import ChatOverviewList from '../components/organisms/ChatOverviewList/ChatOverviewList';
import ChatMessages from '../components/organisms/ChatMessages/ChatMessages';
import ChatMessagesAction from '../components/organisms/ChatMessagesAction/ChatMessagesAction';
import { useAuthDispatch, useAuthState } from '../providers/Auth';
import { Wrapper } from '../components/templates/BasicWrapper';
import { useParams } from 'react-router';
import { useRoom } from '../hooks/useRoom';
import NewRoom from '../components/organisms/NewRoom/NewRoom';
import { FindFriends } from '../components/organisms/ChatMessages/ChatMessages.styles';
import { Button } from '../components/atoms/Button/Button';
import { refreshToken } from '../store/actions/Auth';
import { useNotifications } from '../hooks/useNotifications';

const Chats = ({ history }) => {
  const [anyChats, setAnyChats] = useState(true);
  const [newRoom, setNewRoom] = useState(false);
  const { roomId } = useParams();

  const {
    user: { id, name },
    token,
  } = useAuthState();
  const authDispatch = useAuthDispatch();

  const { createNotifications } = useNotifications({ token });

  const enabled = Boolean(roomId && id);

  const {
    messagesData,
    messagesLoading,
    typing,
    sendMessage,
    startTyping,
    endTyping,
    roomParticipants,
    socket,
    createRoom,
    isTokenRefreshing,
  } = useRoom({
    enabled,
    roomId,
    userId: id,
    token,
  });

  useEffect(() => {
    (async () => (isTokenRefreshing ? await refreshToken(authDispatch) : null))();
  }, [isTokenRefreshing]);

  useEffect(() => {
    const { messages } = messagesData;
    if (messages && messages.length === 1 && roomParticipants.length > 0 && roomId) {
      const recipients = roomParticipants.map(({ id, name }) => ({ id, name }));
      createNotifications({ name, id }, recipients, roomId);
    }
  }, [messagesData, roomParticipants, roomId]);

  useEffect(() => {
    const {
      location: { pathname },
    } = history;
    const newRoom = pathname.split('/')[2] === 'new';
    setNewRoom(newRoom);
  }, [history]);

  const handleClickButton = () => history.push('/chats/new');

  return (
    <Wrapper>
      <ChatsWrapper>
        <ChatOverviewList roomId={roomId} userId={id} socket={socket} activeCreateRoom={newRoom} setAnyChats={setAnyChats} />
        {newRoom && <NewRoom history={history} createRoom={createRoom} />}
        <ChatMessages
          privateMessagesData={messagesData}
          anyChats={anyChats}
          id={id}
          active={enabled}
          roomParticipants={roomParticipants}
          loading={messagesLoading}
          typing={typing}
        />
        <ChatMessagesAction
          active={enabled}
          sendMessage={sendMessage}
          startTyping={startTyping}
          endTyping={endTyping}
          loading={messagesLoading}
        />
        {!anyChats && !enabled && !newRoom && (
          <FindFriends>
            Find users to start conversation <Button onClick={handleClickButton}>Create room</Button>
          </FindFriends>
        )}
      </ChatsWrapper>
    </Wrapper>
  );
};

export default Chats;
