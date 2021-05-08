import React, { useEffect, useState } from 'react';
import { Wrapper } from '../components/templates/BasicWrapper';
import { Heading, Content, Item, Name, SelectedProfileWrapper, LoadingWrapper } from './SelectedProfile.styles';
import NoAvatar from '../components/atoms/NoAvatar/NoAvatar';
import { useParams } from 'react-router';
import { useUser } from '../hooks/useUser';
import Moment from 'react-moment';
import { isToday } from '../helpers/isToday';
import { Button } from '../components/atoms/Button/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRoom } from '../hooks/useRoom';
import { Backdrop } from '../components/templates/Backdrop/Backdrop';
import { CircularProgress } from '@material-ui/core';

const SelectedProfile = ({ history }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [backdropLoading, setBackdropLoading] = useState(false);
  const { getUser } = useUser();
  const { createRoom } = useRoom({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { user } = await getUser(id);
      setUser(user);
      setLoading(false);
    })();
  }, [id]);

  const handleClick = async () => {
    if (user.roomId) {
      history.push(`/messages/${user.roomId}`);
    } else {
      setBackdropLoading(true);
      const { id } = await createRoom({ isPrivate: true, userId: user.id });
      setTimeout(() => {
        setBackdropLoading(false);
        history.push(`/messages/${id}`);
      }, 400);
      console.log(id);
    }
  };

  return (
    <Wrapper>
      <SelectedProfileWrapper>
        {loading ? (
          <>
            <LoadingWrapper>
              <Skeleton height={180} />
              <Skeleton variant={'text'} width={180} height={40} />
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Skeleton variant={'text'} width={180} height={30} key={index} />
                ))}
              <Skeleton variant={'text'} width={250} height={40} />
            </LoadingWrapper>
          </>
        ) : (
          <>
            <Heading>
              <NoAvatar isProfile />
            </Heading>
            <Content>
              <Name>{user.name}</Name>
              <Item>
                Joined: <Moment format={'DD.MM.YY - HH:mm'}>{user.created_at}</Moment>
              </Item>
              <Item>
                Last logged: <Moment format={isToday(user.created_at) ? 'HH:mm' : 'DD.MM.YY - HH:mm'}>{user.created_at}</Moment>
              </Item>
              <Item>Email: {user.email}</Item>
              <Item>Total messages: 120</Item>
              <Button onClick={handleClick}>{user.roomId ? 'Send message' : 'Create room'}</Button>
            </Content>
          </>
        )}
      </SelectedProfileWrapper>
      <Backdrop open={backdropLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrapper>
  );
};

export default SelectedProfile;
