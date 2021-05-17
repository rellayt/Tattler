import React, { useEffect, useState } from 'react';
import HeaderIcon from '../../atoms/HeaderIcon/HeaderIcon';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import SpeedDial from '@material-ui/lab/SpeedDial';
import { Wrapper } from './Notifications.styles';
import Badge from '@material-ui/core/Badge';
import { Notification } from '../../atoms/Notification/Notification';
import { useNotifications } from '../../../hooks/useNotifications';
import { useAuthState } from '../../../providers/Auth';

const DIAL_DIRECTION = 'down';

const Notifications = ({ notifications: notificationsData, history }) => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [undisplayedNotifications, setUndisplayedNotifications] = useState(0);
  const {
    token,
    user: { id },
  } = useAuthState();
  const { markAsChecked } = useNotifications({ token });

  useEffect(() => {
    setUndisplayedNotifications(notificationsData.filter(({ displayed }) => !displayed).length);
    setNotifications(notificationsData);
  }, [notificationsData]);

  const handleSpeedDialClick = () => setOpen(!open);

  const handleClick = (roomId, notificationId, displayed) => {
    if (!displayed) markAsChecked(notificationId, id);
    history.push(`/chats/r/${roomId}`);
  };

  const handleClose = () => setTimeout(() => setOpen(false), 100);

  return (
    <Wrapper>
      <Badge badgeContent={undisplayedNotifications}>
        <SpeedDial
          icon={<HeaderIcon icon={faBell} />}
          onClick={handleSpeedDialClick}
          open={open}
          onBlur={handleClose}
          direction={DIAL_DIRECTION}
          ariaLabel={'Notifications'}
        >
          {notifications.map(({ icon, message, displayed, roomId, id: notificationId }, index) => (
            <Notification
              key={index}
              icon={icon}
              tooltipTitle={message}
              tooltipOpen
              onClick={() => handleClick(roomId, notificationId, displayed)}
              displayed={displayed ? 'd' : ''}
              title={'Move to chat'}
            />
          ))}
        </SpeedDial>
      </Badge>
    </Wrapper>
  );
};

export default Notifications;
