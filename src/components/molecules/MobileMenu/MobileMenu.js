import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Wrapper } from './MobileMenu.styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import NotificationsMobile from '../../organisms/NotificationsMobile/NotificationsMobile';

const MobileMenu = ({ history, handleLogout, notifications }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseDialog = () => setOpen(false);

  const handleClose = () => setAnchorEl(null);

  const openDialog = () => {
    setAnchorEl(null);
    setOpen(true);
  };
  return (
    <Wrapper>
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            history.push('/profile');
          }}
        >
          Profile
        </MenuItem>
        <MenuItem onClick={openDialog}>Notifications</MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
      <NotificationsMobile open={open} onClose={handleCloseDialog} notifications={notifications} history={history} />
    </Wrapper>
  );
};

MobileMenu.propTypes = {};

export default MobileMenu;
