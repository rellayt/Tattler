import React from 'react';
import { Wrapper, Avatar, Checked, Date, Message, Name, Dot } from './MessageOverview.styles';
import NoAvatar from '../../atoms/NoAvatar/NoAvatar';
import SentIcon from '../../atoms/SentIcon/SentIcon';
import { getTimeSince } from '../../../helpers/getTimeSince';
import { Link } from 'react-router-dom';

export const MessageOverview = ({ names, created_at, isYourMessage, message, displayed, active, roomId }) => {
  const timeSince = getTimeSince(created_at);
  return (
    <Wrapper active={active}>
      <Link to={`/messages/${roomId}`} key={roomId}>
        <Avatar>
          <NoAvatar size="xxxl" />
        </Avatar>
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
            <NoAvatar size="m" />
          ) : isYourMessage && !displayed ? (
            <SentIcon />
          ) : null}
        </Checked>
      </Link>
    </Wrapper>
  );
};

export default MessageOverview;
