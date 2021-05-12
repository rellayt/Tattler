import React, { useEffect, useState } from 'react';
import { Wrapper } from '../components/templates/BasicWrapper';
import { Content, Heading, Item, LoadingWrapper, Name, SelectedProfileWrapper } from './SelectedProfile.styles';
import NoAvatar from '../components/atoms/NoAvatar/NoAvatar';
import { useParams } from 'react-router';
import { useUser } from '../hooks/useUser';
import Moment from 'react-moment';
import { Button } from '../components/atoms/Button/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import { useRoom } from '../hooks/useRoom';
import { Backdrop } from '../components/templates/Backdrop/Backdrop';
import { CircularProgress } from '@material-ui/core';
import UserAvatar from '../components/molecules/UserAvatar/UserAvatar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { useSnackBarDispatch } from '../providers/SnackBar';
import { CREATED_ROOM } from '../config/Snackbars';

const SelectedProfile = ({ history }) => {
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const [backdropLoading, setBackdropLoading] = useState(false);

  const { getUser } = useUser();
  const { createRoom } = useRoom({});
  const dispatch = useSnackBarDispatch();

  const { id } = useParams();
  const AVATAR_PATH = `${process.env.REACT_APP_API_URL}/media/${id}?t=${Date.now()}`;
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
      history.push(`/chats/r/${user.roomId}`);
    } else {
      setBackdropLoading(true);
      OpenSnackBar(dispatch, CREATED_ROOM);
      const { id } = await createRoom({ isPrivate: true, users: [user.id] });
      setTimeout(() => {
        setBackdropLoading(false);
        history.push(`/chats/r/${id}`);
      }, 400);
    }
  };
  return (
    <Wrapper>
      <SelectedProfileWrapper>
        {loading ? (
          <LoadingWrapper>
            <Skeleton height={180} />
            <Skeleton variant={'text'} width={180} height={40} />
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Skeleton variant={'text'} width={180} height={30} key={index} />
              ))}
            <Skeleton variant={'text'} width={210} height={50} />
          </LoadingWrapper>
        ) : (
          <>
            <Heading isAvatar={user.avatar}>
              {user.avatar ? <UserAvatar hasBorder size={'135px'} path={AVATAR_PATH} /> : <NoAvatar isProfile />}
            </Heading>
            <Content>
              <Name>{user.name}</Name>
              <Item>
                Joined: <Moment format={'DD.MM.YY - HH:mm'}>{user.created_at}</Moment>
              </Item>
              <Item>
                Last logged: <Moment format={'DD.MM.YY - HH:mm'}>{user.lastLogged}</Moment>
              </Item>
              <Item>Email: {user.email}</Item>
              <Item>Total messages: {user.totalMessages}</Item>
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
