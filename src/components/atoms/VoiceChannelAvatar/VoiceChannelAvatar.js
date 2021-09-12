import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { Avatar, NoAvatar } from './VoiceChannelAvatar.styles';

const AVATAR_PATH = `${process.env.REACT_APP_API_URL}/media/`;

const VoiceChannelAvatar = ({ id, avatar, isSpeaking }) => {
  return avatar ? (
    <Avatar isSpeaking={isSpeaking}>
      <img src={`${AVATAR_PATH}${id}`} alt={id} />
    </Avatar>
  ) : (
    <>
      <NoAvatar isSpeaking={isSpeaking}>
        <FontAwesomeIcon icon={faUserAlt} />
      </NoAvatar>
    </>
  );
};

export default VoiceChannelAvatar;
