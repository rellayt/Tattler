import React, { useEffect, useState } from 'react';
import { ContentCard, Heading, Wrapper } from './Profile.styles';
import { useAuthState } from '../providers/Auth';
import ProfileCard from '../components/organisms/ProfileCard/ProfileCard';
import { useUser } from '../hooks/useUser';
import ProfileInformation from '../components/organisms/ProfileInformation/ProfileInformation';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import ProfileLastMessages from '../components/organisms/ProfileLastMessages/ProfileLastMessages';

const Profile = () => {
  const [user, setUser] = useState({});
  const [information, setInformation] = useState(null);
  const [userUpdated, setUserUpdated] = useState(false);
  const [lastMessages, setLastMessages] = useState(null);
  const { width } = useWindowDimensions();
  const {
    user: { id },
    loading,
  } = useAuthState();
  const { getUser } = useUser();

  useEffect(() => {
    (async () => {
      if (!loading) {
        const response = await getUser(id, { lastMessages: true, information: true });
        if (response) {
          const { user } = response;
          setInformation(user.info);
          setLastMessages(user.lastMessages);
          setUser(user);
        }
      }
    })();
  }, [userUpdated]);
  return (
    <Wrapper>
      {!!user && (
        <>
          <ProfileCard width={width} user={user} setUserUpdated={setUserUpdated} />
          <ContentCard>
            <Heading>Information</Heading>
            {information && <ProfileInformation information={information} width={width} />}
          </ContentCard>
          <ContentCard>
            <Heading>Last messages</Heading>
            {lastMessages && <ProfileLastMessages lastMessages={lastMessages} width={width} />}
          </ContentCard>
        </>
      )}
    </Wrapper>
  );
};

export default Profile;
