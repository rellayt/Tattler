import { createContext, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSnackBarDispatch } from './SnackBar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { NEW_NOTIFICATION, ROOM_DESTROYED } from '../config/Snackbars';
import { useAuthDispatch, useAuthState } from './Auth';
import { refreshToken } from '../store/actions/Auth';

export const SocketContext = createContext({ notifications: [] });

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

    socket.on(`NOTIFICATIONS_${user.id}`, ({ notifications }) => setNotifications(notifications));

    socket.on(`NEW_NOTIFICATIONS_${user.id}`, ({ notifications }) => {
      setNotifications(notifications);
      OpenSnackBar(snackBarDispatch, NEW_NOTIFICATION);
    });

    return () => socket.disconnect();
  }, [token]);

  return <SocketContext.Provider value={{ notifications }}>{children}</SocketContext.Provider>;
};
