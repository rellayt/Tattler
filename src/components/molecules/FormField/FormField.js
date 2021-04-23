import React, { useRef } from 'react';
import { Wrapper } from './FormField.styles';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const FormField = ({ onChange, value, label, name, id, type = 'text', passwordShown, togglePasswordVisibility }) => {
  const ref = useRef(null);
  return (
    <Wrapper>
      <Label htmlFor={id} ref={ref}>
        {label}
      </Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} autoComplete="off" />
    </Wrapper>
  );
};

FormField.propTypes = {};

export default FormField;
