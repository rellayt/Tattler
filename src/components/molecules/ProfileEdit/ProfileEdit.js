import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../atoms/TextField/TextField';
import { Wrapper } from '../../organisms/ProfileCard/ProfileCard.styles';

const ProfileEdit = () => (
  <div>
    <Input variant={'standard'} name={'email'} label={'E-mail'} value={email} autoComplete="off" />
  </div>
);

ProfileEdit.propTypes = {};

export default ProfileEdit;
