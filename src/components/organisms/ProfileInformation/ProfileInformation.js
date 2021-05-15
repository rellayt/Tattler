import React from 'react';
import { DataWrapper, TitleWrapper, Wrapper } from './ProfileInformation.styles';
import Moment from 'react-moment';

const ProfileInformation = ({ information: { register, totalChats, totalRoomMessages, totalChannelMessages } = {}, width }) => {
  return (
    <Wrapper>
      <TitleWrapper>Registered at</TitleWrapper>
      <DataWrapper>
        <Moment format={width < 1024 ? 'DD/MM/YYYY' : 'DD/MM/YYYY - HH:MM'}>{register}</Moment>
      </DataWrapper>
      <TitleWrapper>Total chats</TitleWrapper>
      <DataWrapper>{totalChats}</DataWrapper>
      <TitleWrapper>{width < 512 ? 'Room messages' : 'Total room messages'}</TitleWrapper>
      <DataWrapper>{totalRoomMessages}</DataWrapper>
      <TitleWrapper>{width < 512 ? 'Channel messages' : 'Total channel messages'}</TitleWrapper>
      <DataWrapper>{totalChannelMessages}</DataWrapper>
    </Wrapper>
  );
};
ProfileInformation.propTypes = {};

export default ProfileInformation;
