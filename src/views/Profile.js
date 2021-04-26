import React from 'react';
import { Wrapper, ContentCard } from './Profile.styles';
import { Heading } from './Profile.styles';
import { useAuthState } from '../providers/Auth';
import ProfileCard from '../components/organisms/ProfileCard/ProfileCard';

const Profile = () => {
  const {
    user: { name, email, created_at },
  } = useAuthState();
  return (
    <Wrapper>
      {/*<ProfileCard>*/}
      {/*  <FirstColumn>*/}
      {/*    <Name>{name}</Name>*/}
      {/*    {email} {created_at}*/}
      {/*  </FirstColumn>*/}
      {/*  <SecondColumn>*/}

      {/*  </SecondColumn>*/}
      {/*</ProfileCard>*/}
      <ProfileCard name={name} email={email} date={created_at} />
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
