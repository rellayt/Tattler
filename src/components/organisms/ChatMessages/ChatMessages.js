import React from 'react';
import { Displayed, FindFriends, Heading, HeadingName, Message, ChatMessagesWrapper, Wrapper } from './ChatMessages.styles';
import PublicMessagesLoading from '../../molecules/PublicMessagesLoading/PublicMessagesLoading';
import Typing from '../../molecules/Typing/Typing';
import { AvatarWrapper, Content, Date, MessageWrapper, Name } from '../ChannelMessages/ChannelMessages.styles';
import Moment from 'react-moment';
import { isToday } from '../../../helpers/isToday';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import InfoIcon from '../../atoms/InfoIcon/InfoIcon';
import { Skeleton } from '@material-ui/lab';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import { getAvatarPath } from '../../../helpers/getAvatarPath';

const ChatMessages = ({ privateMessagesData: { messages, avatars }, id, active, roomParticipants, loading, typing: isTyping }) => {
  return (
    <Wrapper active={active}>
      <Heading active={active} isGroup={roomParticipants.length > 1}>
        {loading ? (
          <>
            <Skeleton variant={'circle'} width={55} height={55} animation={'wave'} />
            <Skeleton variant={'text'} animation={'wave'} width={125} height={45} />
          </>
        ) : (
          <>
            {roomParticipants.length === 1 && (
              <>
                {roomParticipants[0].avatar ? (
                  <UserAvatar size={'60px'} path={getAvatarPath(roomParticipants[0].id)} />
                ) : (
                  <NoAvatar size="xxxl" />
                )}
                <HeadingName>{roomParticipants[0]?.name}</HeadingName>
              </>
            )}
            {roomParticipants.length > 1 && (
              <>
                <HeadingName>
                  {roomParticipants.map(({ name }, index) => `${name}${roomParticipants.length !== index + 1 ? ',' : ''} `)}
                </HeadingName>
              </>
            )}
          </>
        )}
        {roomParticipants.length === 1 && <InfoIcon size={'xl'} path={`/profile/${roomParticipants[0]?.id}`} />}
      </Heading>
      <ChatMessagesWrapper>
        {loading ? (
          <PublicMessagesLoading />
        ) : (
          <>
            {isTyping ? <Typing /> : null}
            {messages.map(({ message, created_at, userId, name, roomId, displayed }, index) => {
              return (
                <MessageWrapper key={index} isMyMessage={id === userId}>
                  <Message name={`message${index}`} isMyMessage={id === userId}>
                    <Name>{userId === id ? 'You' : name}</Name>
                    <Content>{message}</Content>
                    <AvatarWrapper>
                      {avatars.find((avatar) => avatar.id === userId).avatar ? (
                        <UserAvatar size={'27px'} path={getAvatarPath(userId)} />
                      ) : (
                        <NoAvatar size={'xl'} />
                      )}
                    </AvatarWrapper>
                    <Date>
                      <Moment format={isToday(created_at) ? 'HH:mm' : 'DD/MM HH:mm'}>{created_at}</Moment>
                    </Date>
                    {displayed && index === 0 && userId === id && <Displayed>viewed</Displayed>}
                  </Message>
                </MessageWrapper>
              );
            })}
          </>
        )}
      </ChatMessagesWrapper>
    </Wrapper>
  );
};

export default ChatMessages;
