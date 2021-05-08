import React from 'react';
import { Wrapper, ContentCard } from './Profile.styles';
import { Heading } from './Profile.styles';
import { useAuthState } from '../providers/Auth';
import ProfileCard from '../components/organisms/ProfileCard/ProfileCard';

const Profile = () => {
  const {
    user: { id, name, email, created_at, avatar },
  } = useAuthState();
  return (
    <Wrapper>
      <ProfileCard id={id} name={name} email={email} date={created_at} avatar={avatar} />
      <ContentCard>
        <Heading>Information</Heading>
      </ContentCard>
      <ContentCard>
        <Heading>Last messages</Heading>
      </ContentCard>
    </Wrapper>
  );
};

export default Profile;
