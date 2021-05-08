import React, { useEffect, useRef } from 'react';
import { Wrapper, Message, MessageWrapper, Name, Content, Date } from './ChannelMessages.styles';
import Moment from 'react-moment';
import PublicMessagesLoading from '../../molecules/PublicMessagesLoading/PublicMessagesLoading';
import Typing from '../../molecules/Typing/Typing';
import { isToday } from '../../../helpers/isToday';

const ChannelMessages = ({ id, messages, loading, setChildFn, isTyping }) => {
  const ref = useRef();
  const scrollToBottom = () => {
    setTimeout(() => ref.current.scrollTo({ top: 0, behavior: 'smooth' }), 30);
  };
  useEffect(() => setChildFn({ scrollToBottom }), [setChildFn]);
  console.log(isTyping);
  return (
    <>
      <Wrapper ref={ref}>
        {loading ? (
          <PublicMessagesLoading />
        ) : (
          <>
            {isTyping ? <Typing /> : null}
            {messages.map(({ message, created_at, from: { userId, name } }, index) => {
              return (
                <MessageWrapper key={index}>
                  <Message name={`message${index}`} isMyMessage={id === userId}>
                    <Name>{userId === id ? 'You' : name}</Name>
                    <Content>{message}</Content>
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
