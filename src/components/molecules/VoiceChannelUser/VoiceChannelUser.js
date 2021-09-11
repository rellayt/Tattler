import React from 'react';
import { Name, Wrapper } from './VoiceChannelUser.styles';
import VoiceChannelAvatar from '../../atoms/VoiceChannelAvatar/VoiceChannelAvatar';

const VoiceChannelUser = ({ user: { id, name, avatar, isSpeaking } }) => {
  return (
    <Wrapper>
      <VoiceChannelAvatar id={id} avatar={avatar} isSpeaking={isSpeaking} />
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default VoiceChannelUser;
