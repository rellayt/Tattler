import io from 'socket.io-client';

const SOCKET_URL = `${process.env.REACT_APP_WEB_SOCKET_URL}/notifications`;

export const useNotifications = ({ token }) => {
  const notificationSocket = io.connect(SOCKET_URL, {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  const createNotifications = (sender, recipients, roomId) =>
    token ? notificationSocket.emit('CREATE_NOTIFICATIONS', { sender, recipients, roomId }) : null;

  const markAsChecked = (notificationId, userId) => notificationSocket.emit('MARK_AS_CHECKED', { notificationId, userId });

  return {
    createNotifications,
    markAsChecked,
  };
};
