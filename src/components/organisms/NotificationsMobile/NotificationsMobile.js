import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const data = [
  {
    displayed: true,
    group: true,
    id: 'e2fc50e6-c38d-4594-859f-177eec7021a6',
    message: 'Test1 has created group with you and test3',
    roomId: 'tmHvDekKMBEl',
  },
  {
    displayed: true,
    group: false,
    id: '35713798-075d-4e25-829d-a2591f9f8430',
    message: 'Test1 has created room with you',
    roomId: 'PQwnlwShVnDa',
  },
  {
    displayed: true,
    group: false,
    id: '5dda4a00-0be0-47ab-9b8a-d79df38978f9',
    message: 'Rlt has created room with you',
    roomId: 'EEgjZiXdoiSF',
  },
];

const NotificationsMobile = ({ onClose, selectedValue, open }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {data.map(({ message }) => (
          <ListItem button>
            <ListItemAvatar>asddsdsa</ListItemAvatar>
            {message}
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

NotificationsMobile.propTypes = {};

export default NotificationsMobile;
