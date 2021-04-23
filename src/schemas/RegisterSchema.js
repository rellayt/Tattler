import * as Yup from 'yup';
import axios from 'axios';

const namePattern = /^[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻ]+[0-9]*$/;

let cachedNameValidation = { name: '', availability: false },
  cachedEmailValidation = { email: '', availability: false };

export const RegisterSchema = Yup.object({
  name: Yup.string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .matches(namePattern, 'Name is not valid')
    .test('CheckNameAvailability', 'Name is taken', async (name) => {
      if (name === cachedNameValidation.name) return cachedNameValidation.availability;
      try {
        const {
          data: { availability },
        } = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/check_name/${name}`);
        cachedNameValidation = { name, availability };
        return availability;
      } catch (error) {
        console.log(error);
      }
    })
    .required('Name is required'),
  email: Yup.string('Enter your Email')
    .min(5, 'Email should be of minimum 5 characters length')
    .email('Incorrect email')
    .test('CheckEmailAvailability', 'Email is taken', async (email) => {
      if (email === cachedEmailValidation.email) return cachedEmailValidation.availability;
      try {
        const {
          data: { availability },
        } = await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/check_email/${email}`);
        cachedEmailValidation = { email, availability };
        return availability;
      } catch (error) {
        console.log(error);
      }
    })
    .required('Email is required'),
  password: Yup.string('Enter your password').min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});
