import React from 'react';
import { Avatar, AvatarWrapper, Heading, Wrapper, Lastlogin, Item } from './ProfileCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../atoms/Button/Button';
import Moment from 'react-moment';
import { Input } from '../../atoms/TextField/TextField';

const ProfileCard = ({ name, avatar, email, date }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar>
          <FontAwesomeIcon icon={faUserAlt} />
        </Avatar>
        <Button>Change avatar</Button>
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
