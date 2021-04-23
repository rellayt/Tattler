import * as Yup from 'yup';

export const LoginSchema = Yup.object({
  login: Yup.string('Enter your login').required('Login is required').min(3, 'Login should be of minimum 3 characters length'),
  password: Yup.string('Enter your password').required('Password is required').min(6, 'Password should be of minimum 6 characters length'),
});
