import { useEffect, useState } from 'react';
import Socketio from 'socket.io-client';
import { useAuthState } from '../providers/Auth';

export const usePublicChannel = ({ userId, channelId, enabled, onConnected }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typing, setTyping] = useState(false);
  const { token } = useAuthState();

  const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}/public_channel`;
  const socket = Socketio.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  const sendMessage = (message) => socket.emit('ADD_MESSAGE', { channelId, message });
  const startTyping = () => socket.emit('START_TYPING', { channelId, userId });
  const endTyping = () => socket.emit('END_TYPING', { channelId, userId });

  useEffect(() => {
    if (!enabled) return;
    setLoading(true);
    socket.on('connect', () => socket.emit('JOIN', { channelId }));

    socket.on(`MESSAGES_CHANNEL_${channelId}`, ({ messages }) => {
      if (onConnected) onConnected.scrollToBottom();
      setMessages(messages);
      setTimeout(() => setLoading(false), 300);
    });

    socket.on(`TYPING_CHANNEL_${channelId}`, ({ typingUsers }) => {
      typingUsers.length > 1 || (typingUsers.length === 1 && typingUsers[0] !== userId) ? setTyping(true) : setTyping(false);
    });

    socket.on('disconnect', () => console.log('Disconnected from public channel'));

    return () => socket.disconnect();
  }, [enabled, channelId, onConnected]);

  return {
    messages,
    loading,
    typing,
    startTyping,
    endTyping,
    sendMessage,
  };
};
