import React from 'react';
import { Date, Item, Message, MessageWrapper, Wrapper } from './ProfileLastMessages.styles';
import ArrowIcon from '../../atoms/ArrowIcon/ArrowIcon';
import Moment from 'react-moment';
import { isToday } from '../../../helpers/isToday';

const ProfileLastMessages = ({ lastMessages = [], width }) => {
  return (
    <Wrapper>
      {lastMessages.map(({ created_at, names, isRoom, message, isYourMessage, channel = 0 }, index) => {
        return (
          <MessageWrapper key={index}>
            {isRoom ? (
              <>
                <Item isYourMessage={isYourMessage}>
                  {isYourMessage ? 'You' : names.map((name, i) => `${name}${names.length !== i + 1 ? ',' : ''} `)}
                </Item>
                <ArrowIcon />
                <Item isYourMessage={!isYourMessage}>
                  {isYourMessage ? names.map((name, i) => `${name}${names.length !== i + 1 ? ',' : ''} `) : 'You'}
                </Item>
              </>
            ) : (
              <>
                <Item isYourMessage>You</Item>
                <ArrowIcon />
                <Item> Channel {channel === 1 ? 'ONE' : channel === 2 ? 'TWO' : 'THREE'}</Item>
              </>
            )}
            <Message>{message}</Message>

            {width > 1440 && (
              <Date>
                <Moment format={isToday(created_at) ? 'HH:mm' : 'DD/MM HH:mm'}>{created_at}</Moment>
              </Date>
            )}
          </MessageWrapper>
        );
      })}
    </Wrapper>
  );
};

export default ProfileLastMessages;
