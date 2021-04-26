import React, { useEffect, useState } from 'react';
import { Wrapper, Message, MessageWrapper, Name, Content, Date, LoadingWrapper, LoadingMessage } from './ChannelMessages.styles';
import Moment from 'react-moment';
import Skeleton from '@material-ui/lab/Skeleton';
import openSocket from 'socket.io-client';
import { publicMessages } from '../../../mockData/channelMessages';
import { random } from '../../../helpers/random';

const endpoint = `http://localhost:5000/public_channel`;

const ChannelMessages = ({ id, getPublicMessages }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const messages = await getPublicMessages(1);
      setLoading(false);
      setMessages(messages);
    })();
  }, [getPublicMessages]);

  useEffect(() => {
    const socket = openSocket.connect(endpoint, { forceNew: true });
    // socket.connect();
    // socket.on('connect', () => {
    //   socket.emit('joined');
    // });
    socket.on('connect', function () {
      socket.emit('joined', { data: "I'm connected!" });
    });
  }, []);

  return (
    <>
      <Wrapper>
        {loading ? (
          <LoadingWrapper>
            {Array(5)
              .fill(0)
              .map(() => (
                <Skeleton>
                  <LoadingMessage width={random(150, 400)} height={random(50, 70)} />
                </Skeleton>
              ))}
          </LoadingWrapper>
        ) : (
          messages.map(({ message, created_at, from: { userId, name } }, index) => {
            return (
              <MessageWrapper key={index}>
                <Message isMyMessage={id === userId}>
                  <Name>{userId === id ? 'You' : name}</Name>
                  <Content>{message}</Content>
                  <Date>
                    <Moment format="MM/DD hh:mm:ss">{created_at}</Moment>
                  </Date>
                </Message>
              </MessageWrapper>
            );
          })
        )}
      </Wrapper>
    </>
  );
};

export default ChannelMessages;
