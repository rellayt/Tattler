import React, { useState } from 'react';
import { ButtonWrapper, Heading, Wrapper } from './VoiceChannel.styles';
import VoiceChannelUsers from '../components/organisms/VoiceChannelUsers/VoiceChannelUsers';
import { Button } from '../components/atoms/Button/Button';
import { useAuthState } from '../providers/Auth';
import { useVoiceChannel } from '../hooks/useVoiceChannel';

const VoiceChannel = () => {
  const {
    user: { id, name, avatar },
    token,
  } = useAuthState();

  const [audio, setAudio] = useState(null);

  const { channelParticipants, startSpeaking, stopSpeaking } = useVoiceChannel({ enabled: id && name, token });

  const toggleMicrophone = async () => {
    if (audio) {
      stopSpeaking();
      stopMicrophone();
    } else {
      startSpeaking();
      getMicrophone();
    }
  };

  const getMicrophone = async () => {
    const audio = new Audio();

    if (channelParticipants.length > 1) {
      const randomTimeout = Math.floor(Math.random() * 100);
      setTimeout(async () => {
        audio.srcObject = await navigator.mediaDevices.getUserMedia({ audio: true });
        await audio.play();
      }, randomTimeout);
    }
    setAudio(audio);
  };

  const stopMicrophone = () => {
    audio['srcObject'] = null;
    setAudio(null);
  };

  return (
    <Wrapper>
      <Heading>Voice Channel</Heading>
      <VoiceChannelUsers users={channelParticipants} />
      <ButtonWrapper isSpeaking={audio}>
        <Button onClick={toggleMicrophone}>{audio ? 'Press to stop talking' : 'Press to start talking'}</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default VoiceChannel;
