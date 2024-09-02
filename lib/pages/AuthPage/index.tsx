import React, { useMemo, useState } from 'react';
import { JsonForm } from 'ui-library';
import { signUpData, loginData } from './authData';

export interface IAuthPageProps {
  mode: 'login' | 'signup' | 'forgotPassword';
  onSubmit: (data: any) => void;
  customJsonData?: { fields: any[] };
  loading?: boolean;
}

const AuthPage: React.FC<IAuthPageProps> = ({ mode, onSubmit, customJsonData, loading }) => {
  const [resetPasswordSent] = useState(false);

  const jsonData = useMemo(() => {
    if (customJsonData) {
      return customJsonData;
    }
    if (mode === 'signup') {
      return signUpData;
    }
    if (mode === 'login') {
      return loginData;
    }
    return { fields: [] };
  }, [mode, customJsonData]);

  return (
    <div className="border-2 space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Forgot Password'}
        </h2>
        <p className="text-gray-600">
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
        loading={loading}
        onSubmit={onSubmit}
        jsonData={jsonData}
        submitButtonLabel={mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Send Reset Link'}
      />
    </div>
  );
};

export default AuthPage;
