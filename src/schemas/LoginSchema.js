import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  login: Yup.string('Enter your login').required('Login is required').min(3, 'Minimum 3 characters required'),
  password: Yup.string('Enter your password').required('Password is required').min(6, 'Minimum 6 characters required'),
});
