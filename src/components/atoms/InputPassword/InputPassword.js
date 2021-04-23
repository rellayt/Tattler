import React from 'react';
import { Input } from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { EyeWrapper, InputPasswordWrapper } from './InputPassword.styles';

const InputPassword = ({ onChange, value, name, id, passwordShown = false, togglePasswordVisibility }) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

  return (
    <InputPasswordWrapper>
      <Input name={name} id={id} type={passwordShown ? 'text' : 'password'} value={value} onChange={onChange} isPassword />
      <EyeWrapper>
        <i onClick={togglePasswordVisibility}>{passwordShown ? eyeSlash : eye}</i>
      </EyeWrapper>
    </InputPasswordWrapper>
  );
};

export default InputPassword;
