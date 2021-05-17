import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}/public_channel`;

export const usePublicChannel = ({ userId, channelId, enabled, onConnected, token }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [typing, setTyping] = useState(false);
  const [isTokenRefreshing, setTokenRefreshing] = useState(false);

  const channelSocket = io.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  const sendMessage = (message) => channelSocket.emit('ADD_MESSAGE', { channelId, message });
  const startTyping = () => channelSocket.emit('START_TYPING', { channelId, userId });
  const endTyping = () => channelSocket.emit('END_TYPING', { channelId, userId });

  channelSocket.on('TOKEN_EXPIRED', () => {
    setTokenRefreshing(true);
    setLoading(true);
  });

  useEffect(() => {
    if (!enabled) return;

    setLoading(true);
    channelSocket.on('connect', () => channelSocket.emit('JOIN', { channelId }));

    channelSocket.on(`MESSAGES_CHANNEL_${channelId}`, ({ messages }) => {
      if (onConnected) onConnected.scrollToBottom();
      setMessages(messages);
      setTimeout(() => setLoading(false), 300);
    });

    channelSocket.on(`TYPING_CHANNEL_${channelId}`, ({ typingUsers }) => {
      console.log(typingUsers);
      typingUsers.length > 1 || (typingUsers.length === 1 && typingUsers[0].userId !== userId)
        ? setTyping(typingUsers[0])
        : setTyping(null);
    });

    channelSocket.on('disconnect', () => console.log('Disconnected from public channel'));

    return () => channelSocket.disconnect();
  }, [enabled, channelId, onConnected, token]);

  return {
    messages,
    loading,
    typing,
    startTyping,
    endTyping,
    sendMessage,
    isTokenRefreshing,
  };
};
