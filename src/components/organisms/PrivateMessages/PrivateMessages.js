import React from 'react';
import { Displayed, FindFriends, Heading, HeadingName, PrivateMessagesWrapper, Wrapper } from './PrivateMessages.styles';
import PublicMessagesLoading from '../../molecules/PublicMessagesLoading/PublicMessagesLoading';
import Typing from '../../molecules/Typing/Typing';
import { Content, Date, Message, MessageWrapper, Name } from '../ChannelMessages/ChannelMessages.styles';
import Moment from 'react-moment';
import { isToday } from '../../../helpers/isToday';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import InfoIcon from '../../atoms/InfoIcon/InfoIcon';
import { Skeleton } from '@material-ui/lab';

const PrivateMessages = ({ privateMessagesData, id, active, users, typing: isTyping, anyChats }) => {
  const loading = true;
  // const isTyping = false;
  return (
    <Wrapper active={active}>
      <Heading active={active}>
        {loading ? (
          <>
            <Skeleton variant={'circle'} width={55} height={55} animation={'wave'} />
            <Skeleton variant={'text'} animation={'wave'} width={125} height={45} />
          </>
        ) : (
          <>
            <NoAvatar size="xxxl" />
            <HeadingName>{users[0]?.name}</HeadingName>
          </>
        )}
        <InfoIcon size={'xl'} path={`/profile/${users[0]?.id}`} />
      </Heading>
      <PrivateMessagesWrapper>
        {loading ? (
          <PublicMessagesLoading />
        ) : (
          <>
            {isTyping ? <Typing /> : null}
            {privateMessagesData.map(({ message, created_at, userId, name, roomId, displayed }, index) => {
              return (
                <MessageWrapper key={index}>
                  <Message name={`message${index}`} isMyMessage={id === userId}>
                    <Name>{userId === id ? 'You' : name}</Name>
                    <Content>{message}</Content>
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
      </PrivateMessagesWrapper>
      {!anyChats && !active && <FindFriends>Find users to start conversation</FindFriends>}
    </Wrapper>
  );
};

export default PrivateMessages;
