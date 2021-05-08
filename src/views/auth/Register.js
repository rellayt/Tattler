import React, { useState } from 'react';
import { Card, Wrapper } from 'components/templates/Auth/Auth.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from '../../components/atoms/TextField/TextField';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { useAuthDispatch, useAuthState } from '../../providers/Auth';
import { useFormik } from 'formik';
import { RegisterSchema } from '../../schemas/RegisterSchema';
import { register } from '../../store/actions/Auth';
import { CircularLoading } from '../../components/atoms/CircularLoading/CircularLoading';
import { Heading } from './Login.styles';

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

const Register = () => {
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState();
  const { values, handleBlur, touched, errors, handleReset, handleChange, handleSubmit, isValid, isValidating } = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      try {
        const { name, email, password } = values;
        await register(dispatch, { name, email, password });
        history.push('/home');
        handleReset(null);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const [showPassword, togglePassword] = useState(false);
  const handleTogglePassword = () => togglePassword(!showPassword);
  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <Card>
        <Heading>Register</Heading>
        <Input
          label={'Name'}
          name={'name'}
          variant={'filled'}
          value={values.name}
          disabled={loading || isValidating}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.name && Boolean(errors.name) && !isValidating}
          helperText={!isValidating && touched.name && errors.name}
          autoComplete="off"
        />
        <Input
          label={'E-mail'}
          name={'email'}
          variant={'filled'}
          value={values.email}
          disabled={loading || isValidating}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email) && !isValidating}
          helperText={!isValidating && touched.email && errors.email}
          autoComplete="off"
        />
        <Input
          label={'Password'}
          name={'password'}
          type={showPassword ? 'text' : 'password'}
          variant={'filled'}
          value={values.password}
          disabled={loading || isValidating}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password) && !isValidating}
          helperText={!isValidating && touched.password && errors.password}
          InputProps={{
            endAdornment: (
              <IconButton onClick={handleTogglePassword}>{values.showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
            ),
          }}
        />
        <Input
          label={'Password confirmation'}
          name={'passwordConfirmation'}
          type={showPassword ? 'text' : 'password'}
          variant={'filled'}
          value={values.passwordConfirmation}
          disabled={loading || isValidating}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation) && !isValidating}
          helperText={!isValidating && touched.passwordConfirmation && errors.passwordConfirmation}
        />
        <Button disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)} type="submit">
          {loading || isValidating ? <CircularLoading /> : 'Sign Up'}
        </Button>
      </Card>
    </Wrapper>
  );
};

export default Register;
