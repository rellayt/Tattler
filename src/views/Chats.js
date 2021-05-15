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

const Chats = ({ history }) => {
  const [anyChats, setAnyChats] = useState(true);
  const [newRoom, setNewRoom] = useState(false);
  const { roomId } = useParams();

  const {
    user: { id },
    token,
  } = useAuthState();
  const authDispatch = useAuthDispatch();

  const enabled = Boolean(roomId && id);

  const {
    messages,
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
        {roomId && (
          <>
            <ChatMessages
              privateMessagesData={messages}
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
          </>
        )}
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
