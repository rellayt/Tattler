import React, { useRef } from 'react';
import { Wrapper } from '../FormField/FormField.styles';
import { Label } from '../../atoms/Label/Label';
import InputPassword from '../../atoms/InputPassword/InputPassword';

const PasswordFormField = ({ onChange, value, label, name, id, type = 'text', passwordShown, togglePasswordVisibility }) => {
  const ref = useRef(null);
  return (
    <Wrapper>
      <Label htmlFor={id} ref={ref}>
        {label}
      </Label>
      <InputPassword
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        passwordShown={passwordShown}
        togglePasswordVisibility={togglePasswordVisibility}
      />
    </Wrapper>
  );
};

export default PasswordFormField;
