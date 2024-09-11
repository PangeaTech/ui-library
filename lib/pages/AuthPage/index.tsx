import React, { useMemo, useState } from 'react';
import { JsonForm } from 'ui-library';
import { signUpData, loginData } from './authData';

export interface IAuthPageProps {
  mode: 'login' | 'signup' | 'forgotPassword';
  onSubmit: (data: any) => void;
  fields?: { fields: any[] };
  loading?: boolean;
  className?: string;
  header?: string;
  message?: string;
  initialValues?: Record<string, any>; // Added initialValues prop
}

const AuthPage: React.FC<IAuthPageProps> = ({
  mode,
  onSubmit,
  fields,
  loading,
  className,
  header,
  message,
  initialValues = {} // Default to empty object if not provided
}) => {
  const [resetPasswordSent] = useState(false);

  const jsonData = useMemo(() => {
    if (fields) {
      return fields;
    }
    if (mode === 'signup') {
      return signUpData;
    }
    if (mode === 'login') {
      return loginData;
    }
    return { fields: [] };
  }, [mode, fields]);

  const defaultHeader = useMemo(() => {
    if (header) return header;
    if (mode === 'login') return 'Login';
    if (mode === 'signup') return 'Sign Up';
    return resetPasswordSent ? 'Reset Password' : 'Forgot Password';
  }, [header, mode, resetPasswordSent]);

  const defaultMessage = useMemo(() => {
    if (message) return message;
    if (mode === 'login') return 'Welcome back!';
    if (mode === 'signup') return 'Create an account';
    return resetPasswordSent ? 'Enter your new password' : 'Enter your email address';
  }, [message, mode, resetPasswordSent]);

  return (
    <div className={`border-2 space-y-4 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{defaultHeader}</h2>
        <p className="text-gray-600">{defaultMessage}</p>
      </div>
      <JsonForm
        loading={loading}
        onSubmit={onSubmit}
        jsonData={jsonData}
        submitButtonLabel={mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Send Reset Link'}
        initialValues={initialValues} // Pass initialValues to JsonForm
      />
    </div>
  );
};

export default AuthPage;
