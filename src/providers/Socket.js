import { createContext, useEffect, useState } from 'react';
import Socketio from 'socket.io-client';
import { useSnackBarDispatch } from './SnackBar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { ROOM_DESTROYED } from '../config/Snackbars';
import { useAuthState } from './Auth';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  // const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}`;
  // const {
  //   token,
  //   user: { id },
  // } = useAuthState();
  //
  // const snackBarDispatch = useSnackBarDispatch();
  //
  // const socket = Socketio.connect(SOCKET_URL, {
  //   extraHeaders: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // useEffect(() => {
  //   if (!token) return;
  //   socket.on('connect', () => socket.emit('JOIN_PAGE'));
  //   socket.on(`ROOM_DESTROY_${id}`, () => OpenSnackBar(snackBarDispatch, ROOM_DESTROYED));
  //
  //   return () => socket.disconnect();
  // }, [token]);

  return <SocketContext.Provider value={notifications}>{children}</SocketContext.Provider>;
};
