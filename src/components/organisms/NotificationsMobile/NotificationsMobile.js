import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import { useAuthState } from '../../../providers/Auth';
import { useNotifications } from '../../../hooks/useNotifications';
import { EmptyNotifications, Message, MobileIcon, MobileIconWrapper, Title } from './NotificationsMobile.styles';

const NotificationsMobile = ({ onClose, open, notifications: notificationsData, history }) => {
  const [notifications, setNotifications] = useState([]);
  const {
    token,
    user: { id },
  } = useAuthState();
  const { markAsChecked } = useNotifications({ token });

  const handleClick = ({ roomId, notificationId, displayed }) => {
    if (!displayed) markAsChecked(notificationId, id);
    history.push(`/chats/r/${roomId}`);
    onClose();
  };

  useEffect(() => {
    setNotifications(notificationsData);
  }, [notificationsData]);

  return (
    <Dialog onClose={onClose} open={open}>
      <Title>Notifications</Title>
      <List>
        {notifications.map(({ message, icon, displayed, roomId, id: notificationId }, index) => (
          <ListItem button key={index} onClick={() => handleClick({ roomId, displayed, notificationId })}>
            <MobileIconWrapper>
              <MobileIcon isViewed={displayed}>{icon}</MobileIcon>
            </MobileIconWrapper>
            <Message isViewed={displayed}>{message}</Message>
          </ListItem>
        ))}
        {notifications.length === 0 && <EmptyNotifications />}
      </List>
    </Dialog>
  );
};

NotificationsMobile.propTypes = {};

export default NotificationsMobile;
