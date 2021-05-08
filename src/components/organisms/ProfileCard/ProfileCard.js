import React, { useState } from 'react';
import { Avatar, AvatarWrapper, Heading, Wrapper, Lastlogin, Item, ButtonsWrapper } from './ProfileCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import Moment from 'react-moment';
import UserAvatar from '../../molecules/UserAvatar/UserAvatar';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { useUser } from '../../../hooks/useUser';

const ProfileCard = ({ id, name, avatar, email, date }) => {
  const initPath = `${process.env.REACT_APP_API_URL}/media/${id}?t=${Date.now()}`;
  const [path, setPath] = useState(initPath);
  const { uploadAvatar } = useUser();
  const handleClick = (e) => {
    console.log(e.target.value);
  };
  const handleFileSelected = async (e) => {
    const file = e.target.files[0];
    const pathPart = await uploadAvatar(file);
    setPath(`${process.env.REACT_APP_API_URL}${pathPart}?t=${Date.now()}`);
  };
  return (
    <Wrapper>
      <AvatarWrapper>
        {avatar ? (
          <UserAvatar size={'150px'} path={path} />
        ) : (
          <Avatar>
            <FontAwesomeIcon icon={faUserAlt} />
          </Avatar>
        )}
        <ButtonsWrapper>
          <label htmlFor="upload-photo">
            <input style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onChange={handleFileSelected} />
            <Button variant="contained" component="span" onClick={handleClick}>
              Change avatar
            </Button>
          </label>
          <DeleteButton />
        </ButtonsWrapper>
      </AvatarWrapper>

      <Heading>My profile</Heading>
      <Lastlogin>
        Last login: <Moment format="MM/DD hh:mm:ss">{date}</Moment>
      </Lastlogin>
      <Item isBig>{name}</Item>
      <Item>{email}</Item>
      <Button>Edit profile</Button>
    </Wrapper>
  );
};

export default ProfileCard;
