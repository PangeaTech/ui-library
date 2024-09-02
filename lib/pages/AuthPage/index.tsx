import { JsonForm } from 'ui-library';
import React, { useMemo, useState } from 'react';
import { signUpData, loginData } from './authData';
export interface IAuthPageProps {
  mode: 'login' | 'signup' | 'forgotPassword';
  onSubmit: (data: { [key: string]: string }) => boolean;
}

const AuthPage: React.FC<IAuthPageProps> = ({ mode, onSubmit }) => {
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const jsonData = useMemo(() => {
    if (mode === 'signup') {
      return signUpData;
    }
    if (mode === 'login') {
      return loginData;
    }
    return { fields: [] };
  }, [mode]);

  const handleSubmit = (data: any) => {
    if (onSubmit(data)) {
      if (mode === 'login') {
        console.log('Login successful', data);
      } else if (mode === 'signup') {
        alert('Sign Up successful');
      } else if (mode === 'forgotPassword') {
        if (resetPasswordSent) {
          alert('Password reset successful');
        } else {
          setResetPasswordSent(true);
        }
      }
    }
  };

  return (
    <div className="border-2 space-y-4">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">
          {mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Forgot Password'}
        </h2>
        <p>
          {mode === 'login'
            ? 'Welcome back!'
            : mode === 'signup'
              ? 'Create an account'
              : resetPasswordSent
                ? 'Enter your new password'
                : 'Enter your email address'}
        </p>
      </div>

      <JsonForm
        onSubmit={handleSubmit}
        jsonData={jsonData}
        submitButtonLabel={mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Send Reset Link'}
      />
    </div>
  );
};

export default AuthPage;
