import { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSnackBarDispatch } from './SnackBar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { ROOM_DESTROYED } from '../config/Snackbars';
import { useAuthDispatch, useAuthState } from './Auth';
import { refreshToken } from '../store/actions/Auth';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const snackBarDispatch = useSnackBarDispatch();
  const { token, user } = useAuthState();
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    if (!token) return;
    const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}`;
    const socket = io.connect(SOCKET_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    socket.on('connect', () => socket.emit('JOIN_PAGE'));
    socket.on('TOKEN_EXPIRED', async () => await refreshToken(authDispatch));
    socket.on(`ROOM_DESTROY_${user.id}`, () => OpenSnackBar(snackBarDispatch, ROOM_DESTROYED));

    return () => socket.disconnect();
  }, [token]);

  return <SocketContext.Provider value={notifications}>{children}</SocketContext.Provider>;
};
