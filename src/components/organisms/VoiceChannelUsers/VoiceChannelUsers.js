import React from 'react';
import { Wrapper } from './VoiceChannelUsers.styles';
import VoiceChannelUser from '../../molecules/VoiceChannelUser/VoiceChannelUser';

const VoiceChannelUsers = ({ users }) => {
  return <Wrapper>{users.length > 0 && users.map((user, index) => <VoiceChannelUser user={user} key={index} />)}</Wrapper>;
};

export default VoiceChannelUsers;
