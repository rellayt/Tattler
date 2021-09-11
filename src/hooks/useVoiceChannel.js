import io from 'socket.io-client';
import { useEffect, useState } from 'react';

export const useVoiceChannel = ({ enabled = false, token }) => {
  const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}/voice_channel`;
  const [channelParticipants, setChannelParticipants] = useState([]);

  const startSpeaking = () => voiceChannelSocket.emit('START_SPEAKING');

  const stopSpeaking = () => voiceChannelSocket.emit('STOP_SPEAKING');

  const voiceChannelSocket = io.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    voiceChannelSocket.emit('JOIN');
    if (!enabled) return;

    voiceChannelSocket.on(`CHANNEL_PARTICIPANTS`, ({ participants }) => setChannelParticipants(participants));

    voiceChannelSocket.on('disconnect', () => console.log('Disconnected from voip room'));

    return () => {
      voiceChannelSocket.emit('LEAVE_VOICE_CHANNEL');
      voiceChannelSocket.disconnect();
    };
  }, []);

  return {
    channelParticipants,
    startSpeaking,
    stopSpeaking,
  };
};
