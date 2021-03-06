import React, { useEffect, useRef } from 'react';
import { Wrapper, Message, MessageWrapper, Name, Content, Date, AvatarWrapper } from './ChannelMessages.styles';
import Moment from 'react-moment';
import PublicMessagesLoading from '../../molecules/PublicMessagesLoading/PublicMessagesLoading';
import Typing from '../../molecules/Typing/Typing';
import { isToday } from '../../../helpers/isToday';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import { getAvatarPath } from '../../../helpers/getAvatarPath';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import TypingUser from '../../molecules/TypingUser/TypingUser';

const ChannelMessages = ({ id, messages, loading, setChildFn, isTyping }) => {
  const ref = useRef();
  const scrollToBottom = () => {
    setTimeout(() => ref.current.scrollTo({ top: 0, behavior: 'smooth' }), 30);
  };
  useEffect(() => setChildFn({ scrollToBottom }), [setChildFn]);
  return (
    <>
      <Wrapper ref={ref}>
        {loading ? (
          <PublicMessagesLoading />
        ) : (
          <>
            {isTyping ? <TypingUser id={isTyping.userId} avatar={isTyping.avatar} /> : null}
            {messages.map(({ message, created_at, from: { userId, name, avatar } }, index) => {
              return (
                <MessageWrapper key={index} isMyMessage={id === userId}>
                  <Message name={`message${index}`} isMyMessage={id === userId}>
                    <Name>{userId === id ? 'You' : name}</Name>
                    <Content>{message}</Content>
                    <AvatarWrapper>
                      {avatar ? <UserAvatar size={'27px'} path={getAvatarPath(userId)} /> : <NoAvatar size={'xl'} />}
                    </AvatarWrapper>
                    <Date>
                      <Moment format={isToday(created_at) ? 'HH:mm' : 'DD/MM HH:mm'}>{created_at}</Moment>
                    </Date>
                  </Message>
                </MessageWrapper>
              );
            })}
          </>
        )}
      </Wrapper>
    </>
  );
};

export default ChannelMessages;
