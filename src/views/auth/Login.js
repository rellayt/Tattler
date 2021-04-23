import React, { useState } from 'react';
import { Card, Wrapper } from 'components/templates/Auth/Auth.styles';
import { ForgotPassword, StyledLink } from './Login.styles';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/TextField/TextField';
import { IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useFormik } from 'formik';
import { LoginSchema } from '../../schemas/LoginSchema';
import { useAuthDispatch, useAuthState } from '../../providers/Auth';
import { signIn } from '../../store/actions/Auth';
import { useHistory } from 'react-router-dom';
import { CircularLoading } from '../../components/atoms/CircularLoading/CircularLoading';

const initialValues = {
  login: '',
  password: '',
};
const Login = () => {
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const { loading } = useAuthState();
  const { values, handleBlur, touched, errors, handleReset, handleChange, handleSubmit, isValid } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnChange: false,
    onSubmit: async (values, actions) => {
      try {
        const { login, password } = values;
        await signIn(dispatch, { login, password });
        history.push('/home');
        handleReset(null);
      } catch (error) {
        const {
          response: {
            data: { verification_error },
          },
        } = error;
        actions.setErrors(verification_error);
        dispatch({ type: 'LOGIN_FAILED' });
      }
    },
  });
  const [showPassword, togglePassword] = useState(false);
  const handleTogglePassword = () => togglePassword(!showPassword);

  return (
    <Wrapper as="form" onSubmit={handleSubmit}>
      <Card>
        <h2>Login</h2>
        <Input
          label={'Name / E-mail'}
          name={'login'}
          variant={'filled'}
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
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
