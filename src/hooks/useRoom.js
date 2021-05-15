import { post } from 'axios';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';

export const useRoom = ({ enabled = false, roomId, userId, token }) => {
  const [roomParticipants, setRoomParticipants] = useState([]);

  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  const [typing, setTyping] = useState(false);
  const [isTokenRefreshing, setTokenRefreshing] = useState(false);

  const sendMessage = (message) => roomSocket.emit('ADD_MESSAGE', { roomId, message });
  const startTyping = () => roomSocket.emit('START_TYPING', { roomId, userId });
  const endTyping = () => roomSocket.emit('END_TYPING', { roomId, userId });

  const createRoom = async ({ isPrivate, users }) => {
    try {
      const {
        data: { room },
      } = await post(`${process.env.REACT_APP_API_URL}/room`, { isPrivate, users });
      return room;
    } catch (e) {
      console.error(e);
    }
  };

  const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}/room`;
  const roomSocket = io.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => setMessagesLoading(true), [roomId]);

  roomSocket.on('TOKEN_EXPIRED', () => {
    setTokenRefreshing(true);
    setMessagesLoading(true);
  });
  useEffect(() => {
    roomSocket.emit('JOIN');

    if (!enabled) return;
    roomSocket.emit('JOIN_ROOM', { roomId });

    roomSocket.on(`ROOM_MESSAGES_${roomId}`, (data) => {
      const { messages } = data;
      if (messages && messages[0]?.userId !== userId) roomSocket.emit('CHECK_NOT_DISPLAYED', { roomId });
      setMessages(data);
      setMessagesLoading(false);
    });

    roomSocket.on(`ROOM_USERS_${roomId}`, ({ users }) => setRoomParticipants(users));
    roomSocket.on(`TYPING_ROOM_${roomId}`, ({ id }) => (id && id !== userId ? setTyping(true) : setTyping(false)));
    roomSocket.on('disconnect', () => console.log('Disconnected from room'));

    return () => {
      roomSocket.emit('CHECK_EMPTY_ROOMS');
      roomSocket.disconnect();
    };
  }, [roomId]);

  return {
    createRoom,
    messages,
    messagesLoading,
    typing,
    sendMessage,
    startTyping,
    endTyping,
    roomParticipants,
    socket: roomSocket,
    isTokenRefreshing,
  };
};
