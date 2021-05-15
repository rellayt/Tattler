import React, { useEffect, useState } from 'react';
import {
  Avatar,
  AvatarWrapper,
  ButtonsWrapper,
  Email,
  Heading,
  Item,
  LastLogin,
  Name,
  ProfileContent,
  Wrapper,
} from './ProfileCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import Moment from 'react-moment';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { useUser } from '../../../hooks/useUser';
import { useAuthDispatch } from '../../../providers/Auth';
import { CircularLoading } from '../../atoms/CircularLoading/CircularLoading';

const ProfileCard = ({ user: { id, name, avatar, email, lastLogged }, width, setUserUpdated }) => {
  const dispatch = useAuthDispatch();
  const [path, setPath] = useState('');
  const [avatarLoading, setAvatarLoading] = useState(false);

  const { uploadAvatar, deleteAvatar } = useUser();

  useEffect(() => (id ? setPath(`${process.env.REACT_APP_API_URL}/media/${id}?t=${Date.now()}`) : null), [id]);

  const handleClick = async () => {
    setAvatarLoading(true);
    setUserUpdated(true);
    await deleteAvatar(dispatch);
    setUserUpdated(false);
    setAvatarLoading(false);
  };

  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    setAvatarLoading(true);
    setUserUpdated(true);
    await uploadAvatar(dispatch, file);
    setUserUpdated(false);

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
              <UserAvatar size={width < 1024 ? '90px' : '170px'} path={path} />
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
              Change
            </Button>
          </label>
          {avatar && <DeleteButton handleClick={handleClick} />}
        </ButtonsWrapper>
      </AvatarWrapper>

      <ProfileContent>
        <Heading>My profile</Heading>
        <LastLogin>
          Last login: <Moment format="MM/DD HH:MM:SS">{lastLogged}</Moment>
        </LastLogin>
        <Name isBig>{name}</Name>
        <Email>{email}</Email>
      </ProfileContent>
    </Wrapper>
  );
};
export default ProfileCard;
