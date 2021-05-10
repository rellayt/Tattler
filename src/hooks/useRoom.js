import { post } from 'axios';
import { useAuthState } from '../providers/Auth';
import Socketio from 'socket.io-client';
import { useEffect, useState } from 'react';

export const useRoom = ({ enabled = false, roomId, userId }) => {
  const [roomParticipants, setRoomParticipants] = useState([]);

  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(true);

  const [typing, setTyping] = useState(false);
  const { token } = useAuthState();

  const sendMessage = (message) => socket.emit('ADD_MESSAGE', { roomId, message });
  const startTyping = () => socket.emit('START_TYPING', { roomId, userId });
  const endTyping = () => socket.emit('END_TYPING', { roomId, userId });

  const createRoom = async ({ isPrivate, userId }) => {
    try {
      const {
        data: { room },
      } = await post(`${process.env.REACT_APP_API_URL}/room`, { isPrivate, userId });
      return room;
    } catch (e) {
      console.error(e);
    }
  };

  const SOCKET_URL = process.env.REACT_APP_WEB_SOCKET_ROOM;
  const socket = Socketio.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => setMessagesLoading(true), [roomId]);

  useEffect(() => {
    socket.emit('JOIN');
    if (!enabled) return;

    socket.emit('JOIN_ROOM', { roomId });

    socket.on(`ROOM_MESSAGES_${roomId}`, (data) => {
      setMessages(data);
      setMessagesLoading(false);
    });

    socket.on(`ROOM_USERS_${roomId}`, ({ users }) => setRoomParticipants(users));

    socket.on(`TYPING_ROOM_${roomId}`, ({ id }) => (id && id !== userId ? setTyping(true) : setTyping(false)));
    return () => {
      socket.emit('CHECK_EMPTY_ROOMS');
      socket.disconnect();
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
    socket,
  };
};
