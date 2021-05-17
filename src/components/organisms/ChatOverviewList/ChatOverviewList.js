import React, { useState } from 'react';
import MessageOverview from '../../molecules/MessageOverview/MessageOverview';
import { Heading, Wrapper, LastMessages } from './ChatOverviewList.styles';
import Skeleton from '@material-ui/lab/Skeleton';
import AddIcon from '../../atoms/AddIcon/AddIcon';

export const ChatOverviewList = ({ roomId: id, userId, socket, activeCreateRoom, setAnyChats }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  socket.on(`ROOM_OVERVIEW_${userId}`, ({ overviewMessages }) => {
    setMessages(overviewMessages);
    setAnyChats(overviewMessages.length > 0);
    setLoading(false);
  });
  return (
    <Wrapper>
      <Heading>
        <AddIcon active={activeCreateRoom} tooltipContent={'Create room'} placement={'top'} />
      </Heading>
      <LastMessages>
        {loading ? (
          <>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} height={90} animation={'wave'} />
              ))}
          </>
        ) : (
          <>
            {messages.map(({ names, userId, created_at, message, isYourMessage, displayed, roomId, avatar }, index) => {
              return (
                <MessageOverview
                  key={index}
                  names={names}
                  userId={userId}
                  created_at={created_at}
                  message={message}
                  isYourMessage={isYourMessage}
                  displayed={displayed}
                  active={id === roomId}
                  roomId={roomId}
                  avatar={avatar}
                />
              );
            })}
          </>
        )}
      </LastMessages>
    </Wrapper>
  );
};

export default ChatOverviewList;
