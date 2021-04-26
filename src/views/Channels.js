import React from 'react';
import { Channel, Heading, Highlight, Title, Wrapper } from './Channels.styles';
import Tabs from '../components/molecules/Tabs/Tabs';
import ChannelMessages from '../components/organisms/ChannelMessages/ChannelMessages';
import ChannelActions from '../components/organisms/ChannelActions/ChannelActions';
import { useAuthState } from '../providers/Auth';
import { usePublicChannel } from '../hooks/usePublicChannel';

const Channels = () => {
  const {
    user: { id },
  } = useAuthState();
  const { sendMessage, getPublicMessages } = usePublicChannel();
  return (
    <Wrapper>
      <Channel>
        <Heading>
          <Tabs />
          <Title>
            channel <Highlight>One</Highlight>
          </Title>
        </Heading>
        <ChannelMessages id={id} getPublicMessages={getPublicMessages} />
        <ChannelActions sendMessage={sendMessage} />
      </Channel>
    </Wrapper>
  );
};

export default Channels;
