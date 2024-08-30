import { IJsonData } from 'ui-library/components/JsonForm';

export const signUpData: IJsonData = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Enter your Email',
      componentType: 'textField',
      rules: {
        required: 'Please enter your email',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Invalid email address'
        }
      }
    },
    {
      name: 'userName',
      label: 'User Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your User Name',
      componentType: 'textField',
      rules: { required: 'Please enter your User Name' }
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      required: true,
      placeholder: 'Enter your password',
      componentType: 'password',
      rules: {
        required: 'Please enter your password',
        minLength: { value: 8, message: 'Password must be at least 8 characters' },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).*$/,
          message: 'Must include at least 1 lowercase, 1 uppercase, and 1 special character'
        }
      },
      helperText: 'Must include at least 1 lowercase, 1 uppercase, and 1 special character'
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      required: true,
      placeholder: 'Enter your password',
      componentType: 'confirmPassword',
      rules: { required: 'Please enter your password', minLength: { value: 8, message: 'Password must be at least 8 characters' } }
    }
  ]
};

export const loginData: IJsonData = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      placeholder: 'Enter your Email',
      componentType: 'textField',
      rules: {
        required: 'Please enter your email',
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Invalid email address'
        }
      }
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      placeholder: 'Enter your password',
      componentType: 'password',
      rules: { required: 'Please enter your password', minLength: { value: 8, message: 'Password must be at least 8 characters' } }
    }
  ]
};
