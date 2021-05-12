import React, { useState } from 'react';
import { Actions, Heading, Participant, ParticipantList, Participants, ParticipantsHeading, Wrapper } from './NewRoom.styles';
import SearchBar from '../SearchBar/SearchBar';
import { useUser } from '../../../hooks/useUser';
import { Button } from '../../atoms/Button/Button';
import { Backdrop } from '../../templates/Backdrop/Backdrop';
import { CircularProgress } from '@material-ui/core';

const NewRoom = ({ history, createRoom }) => {
  const [participants, setParticipants] = useState([]);
  const { getUser } = useUser();
  const [backdropLoading, setBackdropLoading] = useState(false);
  const handleAdd = async (userId) => {
    const {
      user: { id, roomId, name },
    } = await getUser(userId);
    setParticipants([...participants, { id, roomId, name }]);
  };

  const handleAction = async () => {
    const { length } = participants;
    if (length === 0) return;
    const users = participants.map(({ id }) => id);
    setBackdropLoading(true);

    if (length === 1 && participants[0].roomId) history.push(`/chats/r/${participants[0].roomId}`);

    const { id } = await createRoom({ isPrivate: length === 1, users });
    setTimeout(() => {
      setBackdropLoading(false);
      history.push(`/chats/r/${id}`);
    }, 400);
  };

  return (
    <Wrapper>
      <Heading>Add user / users to create room</Heading>
      <Actions>
        <SearchBar placeholder={'Search...'} createRoom={true} handleAdd={handleAdd} participants={participants} />
        <Participants>
          <ParticipantsHeading>
            {participants.length === 0 ? '' : participants.length === 1 ? 'Participant' : 'Participants'}
          </ParticipantsHeading>
          <ParticipantList>
            {participants.map(({ name }, index) => (
              <Participant key={index}>{name} </Participant>
            ))}
          </ParticipantList>
          {participants.length > 0 && (
            <Button onClick={handleAction}>{participants.length === 1 && participants[0].roomId ? 'Go to room' : 'Create room'}</Button>
          )}
        </Participants>
        <Backdrop open={backdropLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Actions>
    </Wrapper>
  );
};

export default NewRoom;
