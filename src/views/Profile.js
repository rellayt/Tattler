import React from 'react';
import { Card, FirstSection, Avatar, AvatarWrapper } from './Profile.styles';
import { Heading } from './Profile.styles';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components/atoms/Button/Button';

const Profile = () => (
  <Card>
    <Heading>Profile</Heading>
    <FirstSection>
      <AvatarWrapper>
        <Avatar>
          <FontAwesomeIcon icon={faUserAlt} />
        </Avatar>
        <Button>Change avatar</Button>
      </AvatarWrapper>
    </FirstSection>
  </Card>
);

export default Profile;
