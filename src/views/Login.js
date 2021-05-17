import React, { useState } from 'react';
import { Card, Wrapper } from 'components/templates/Auth/Auth.styles';
import { ForgotPassword, Heading, StyledLink } from './Login.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/TextField/TextField';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useFormik } from 'formik';
import { LoginSchema } from '../schemas/LoginSchema';
import { useAuthDispatch } from '../providers/Auth';
import { signIn } from '../store/actions/Auth';
import { useHistory } from 'react-router-dom';
import { CircularLoading } from '../components/atoms/CircularLoading/CircularLoading';
import { useSnackBarDispatch } from '../providers/SnackBar';
import { OpenSnackBar } from '../store/actions/SnackBar';
import { LOGGED_IN } from '../config/Snackbars';

const initialValues = {
  login: '',
  password: '',
};
const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const authDispatch = useAuthDispatch();
  const snackBarDispatch = useSnackBarDispatch();
  const { values, handleBlur, touched, errors, handleReset, handleChange, handleSubmit: submit, isValid } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnChange: true,
    onSubmit: async (values, actions) => await handleSubmit(values, actions),
  });
  const handleSubmit = async (values, actions) => {
    try {
      setLoading(true);
      const { login, password } = values;
      await signIn(authDispatch, { login, password });
      OpenSnackBar(snackBarDispatch, LOGGED_IN);
      setLoading(false);
      history.push('/profile');
      handleReset(null);
    } catch (error) {
      const {
        response: {
          data: { verification_error },
        },
      } = error;
      actions.setErrors(verification_error);
      setLoading(false);
    }
  };
  const handleKeyPress = (e) => e.key === 'Enter' ?? submit();
  const [showPassword, togglePassword] = useState(false);
  const handleTogglePassword = () => togglePassword(!showPassword);

  return (
    <Wrapper as="form" onSubmit={submit}>
      <Card>
        <Heading>Login</Heading>
        <Input
          label={'Name / E-mail'}
          name={'login'}
          variant={'filled'}
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          disabled={loading}
          autoComplete="off"
          error={touched.login && Boolean(errors.login)}
          helperText={touched.login && errors.login}
        />
        <Input
          label={'Password'}
          name={'password'}
          type={showPassword ? 'text' : 'password'}
          variant={'filled'}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={loading}
          onKeyPress={handleKeyPress}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <IconButton disabled={loading} onClick={handleTogglePassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            ),
          }}
        />
        <Button disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)} type="submit">
          {loading ? <CircularLoading /> : 'Sign In'}
        </Button>
        <ForgotPassword>
          <StyledLink to="forgot_password">Forgot password?</StyledLink>
        </ForgotPassword>
      </Card>
    </Wrapper>
  );
};

// Login.propTypes = {};

export default Login;
