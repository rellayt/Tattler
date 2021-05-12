import React, { useState } from 'react';
import { Avatar, AvatarWrapper, ButtonsWrapper, Heading, Item, Lastlogin, Wrapper } from './ProfileCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import Moment from 'react-moment';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { useUser } from '../../../hooks/useUser';
import { useAuthDispatch } from '../../../providers/Auth';
import { CircularLoading } from '../../atoms/CircularLoading/CircularLoading';

const ProfileCard = ({ user: { id, name, avatar, email, lastLogged } }) => {
  const initPath = `${process.env.REACT_APP_API_URL}/media/${id}?t=${Date.now()}`;
  const dispatch = useAuthDispatch();

  const [path, setPath] = useState(initPath);
  const [avatarLoading, setAvatarLoading] = useState(false);

  const { uploadAvatar, deleteAvatar } = useUser();

  const handleClick = async () => {
    setAvatarLoading(true);
    await deleteAvatar(dispatch);
    setAvatarLoading(false);
  };
  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    setAvatarLoading(true);
    await uploadAvatar(dispatch, file);
    setPath(`${process.env.REACT_APP_API_URL}/media/${id}?t=${Date.now()}`);
    setAvatarLoading(false);
  };
  return (
    <Wrapper>
      <AvatarWrapper>
        {avatarLoading ? (
          <CircularLoading />
        ) : (
          <>
            {avatar ? (
              <UserAvatar size={'150px'} path={path} />
            ) : (
              <Avatar>
                <FontAwesomeIcon icon={faUserAlt} />
              </Avatar>
            )}
          </>
        )}

        <ButtonsWrapper>
          <label htmlFor="upload-photo">
            <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onChange={handleFileSelected} />
            <Button variant="contained" component="span">
              Change avatar
            </Button>
          </label>
          {avatar && <DeleteButton handleClick={handleClick} />}
        </ButtonsWrapper>
      </AvatarWrapper>

      <Heading>My profile</Heading>
      <Lastlogin>
        Last login: <Moment format="MM/DD hh:mm:ss">{lastLogged}</Moment>
      </Lastlogin>
      <Item isBig>{name}</Item>
      <Item>{email}</Item>
      <Button>Edit profile</Button>
    </Wrapper>
  );
};
export default ProfileCard;
