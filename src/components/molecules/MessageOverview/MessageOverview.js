import React from 'react';
import { Avatar, Checked, Date, Dot, Message, Name, Wrapper } from './MessageOverview.styles';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import SentIcon from '../../atoms/SentIcon/SentIcon';
import { getTimeSince } from '../../../helpers/getTimeSince';
import { Link } from 'react-router-dom';
import UserAvatar from '../UserAvatar/UserAvatar';
import { getAvatarPath } from '../../../helpers/getAvatarPath';

export const MessageOverview = ({ names, created_at, isYourMessage, message, displayed, active, roomId, avatar, userId }) => {
  const timeSince = getTimeSince(created_at);
  return (
    <Wrapper active={active}>
      <Link to={`/messages/r/${roomId}`} key={roomId}>
        <Avatar>{avatar ? <UserAvatar size={'55px'} path={getAvatarPath(userId)} /> : <NoAvatar size="xxxl" />}</Avatar>
        <Name displayed={(isYourMessage && !displayed) || displayed}>{names[0]}</Name>
        <Message displayed={(isYourMessage && !displayed) || displayed}>
          {isYourMessage && 'You: '}
          {message}
        </Message>
        <Date>{timeSince}</Date>
        <Checked>
          {!isYourMessage && !displayed ? (
            <Dot />
          ) : isYourMessage && displayed ? (
            <>{avatar ? <UserAvatar size={'20px'} path={getAvatarPath(userId)} /> : <NoAvatar size="m" />}</>
          ) : isYourMessage && !displayed ? (
            <SentIcon />
          ) : null}
        </Checked>
      </Link>
    </Wrapper>
  );
};

export default MessageOverview;
