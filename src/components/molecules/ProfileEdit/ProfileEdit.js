import React from 'react';
import { Input } from '../../atoms/TextField/TextField';

const ProfileEdit = () => (
  <div>
    <Input variant={'standard'} name={'email'} label={'E-mail'} value={email} autoComplete="off" />
  </div>
);

ProfileEdit.propTypes = {};

export default ProfileEdit;
