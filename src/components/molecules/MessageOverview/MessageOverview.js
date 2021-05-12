import React from 'react';
import { Avatar, Checked, Date, Dot, Message, Name, Wrapper } from './MessageOverview.styles';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import SentIcon from '../../atoms/SentIcon/SentIcon';
import { getTimeSince } from '../../../helpers/getTimeSince';
import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import { getAvatarPath } from '../../../helpers/getAvatarPath';
import GroupIcon from '../../atoms/GroupIcon/GroupIcon';

export const MessageOverview = ({ names, created_at, isYourMessage, message, displayed, active, roomId, avatar, userId }) => {
  const timeSince = getTimeSince(created_at);
  return (
    <Wrapper active={active}>
      <Link to={`/chats/r/${roomId}`} key={roomId}>
        <Avatar>
          {names.length > 1 ? <GroupIcon /> : avatar ? <UserAvatar size={'55px'} path={getAvatarPath(userId)} /> : <NoAvatar size="xxxl" />}
        </Avatar>
        <Name displayed={(isYourMessage && !displayed) || displayed}>
          {names.length === 1 ? names[0] : names.map((name, index) => `${name}${names.length !== index + 1 ? ',' : ''} `)}
        </Name>
        <Message displayed={(isYourMessage && !displayed) || displayed}>
          {isYourMessage && 'You: '}
          {message}
        </Message>
        <Date>{timeSince}</Date>
        <Checked>
          {!isYourMessage && !displayed ? (
            <Dot />
          ) : isYourMessage && displayed ? (
            <>{names.length === 1 && <>{avatar ? <UserAvatar size={'20px'} path={getAvatarPath(userId)} /> : <NoAvatar size="m" />}</>}</>
          ) : isYourMessage && !displayed ? (
            <SentIcon />
          ) : null}
        </Checked>
      </Link>
    </Wrapper>
  );
};

export default MessageOverview;
