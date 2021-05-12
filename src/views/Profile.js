import React, { useEffect, useState } from 'react';
import { ContentCard, Heading, Wrapper } from './Profile.styles';
import { useAuthState } from '../providers/Auth';
import ProfileCard from '../components/organisms/ProfileCard/ProfileCard';
import { useUser } from '../hooks/useUser';

const Profile = () => {
  const [user, setUser] = useState({});

  const {
    user: { id },
  } = useAuthState();
  const { getUser } = useUser();

  useEffect(() => {
    (async () => {
      const { user } = await getUser(id);
      setUser(user);
    })();
  }, []);
  return (
    <Wrapper>
      <ProfileCard user={user} />
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
