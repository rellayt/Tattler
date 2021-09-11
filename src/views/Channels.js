import React, { useEffect, useState } from 'react';
import { Channel, Heading, Highlight, Title } from './Channels.styles';
import Tabs from '../components/molecules/Tabs/Tabs';
import ChannelMessages from '../components/organisms/ChannelMessages/ChannelMessages';
import ChannelActions from '../components/organisms/ChannelActions/ChannelActions';
import { useAuthDispatch, useAuthState } from '../providers/Auth';
import { usePublicChannel } from '../hooks/usePublicChannel';
import { PublicChannels } from '../config/PublicChannels';
import { Redirect, useParams } from 'react-router-dom';
import { Wrapper } from '../components/templates/BasicWrapper';
import { refreshToken } from '../store/actions/Auth';

const Channels = () => {
  const {
    user: { id },
    token,
  } = useAuthState();
  const { id: channelId } = useParams();
  const authDispatch = useAuthDispatch();

  const [childFn, setChildFn] = useState();
  const enabled = Boolean(channelId && id);
  const { sendMessage, messages, loading, typing: isTyping, startTyping, endTyping, isTokenRefreshing } = usePublicChannel({
    userId: id,
    channelId: +channelId,
    enabled,
    onConnected: childFn,
    token,
  });

  useEffect(() => {
    (async () => (isTokenRefreshing ? await refreshToken(authDispatch) : null))();
  }, [isTokenRefreshing]);

  if (channelId > 3 || channelId < 1) return <Redirect to="/channel/1" />;

  return (
    <Wrapper>
      <Channel>
        <Heading>
          <Tabs channelId={channelId} />
          <Title>
            <Highlight>{PublicChannels[+channelId - 1].view}</Highlight>
          </Title>
        </Heading>
        <ChannelMessages id={id} messages={messages} loading={loading} setChildFn={setChildFn} isTyping={isTyping} />
        <ChannelActions sendMessage={sendMessage} startTyping={startTyping} endTyping={endTyping} />
      </Channel>
    </Wrapper>
  );
};

export default Channels;
