import { Button, TextField } from 'pangea_ui_library';
import React, { useState } from 'react';

export interface IAuthPageProps {
  mode: 'login' | 'signup' | 'forgotPassword';
  logoUrl: string;
  onSubmit: (data: { [key: string]: string }) => boolean;
}

const AuthPage: React.FC<IAuthPageProps> = ({ mode, logoUrl, onSubmit }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [resetPasswordSent, setResetPasswordSent] = useState(false);

  const handleChange = (label: string, value: string) => {
    setFormData({ ...formData, [label]: value });
  };

  const handleSubmit = () => {
    if (onSubmit(formData)) {
      if (mode === 'login') {
        console.log('Login successful');
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

  const renderFields = () => {
    if (mode === 'login') {
      return [
        { label: 'Email', type: 'email' },
        { label: 'Password', type: 'password' }
      ];
    } else if (mode === 'signup') {
      return [
        { label: 'Email', type: 'email' },
        { label: 'Username', type: 'text' },
        { label: 'Password', type: 'password' },
        { label: 'Confirm Password', type: 'password' }
      ];
    } else if (mode === 'forgotPassword') {
      if (resetPasswordSent) {
        return [
          { label: 'New Password', type: 'password' },
          { label: 'Confirm New Password', type: 'password' }
        ];
      } else {
        return [{ label: 'Email', type: 'email' }];
      }
    }
    return [];
  };

  return (
    <div className="w-vw h-vh flex flex-col justify-center items-center border-[2px] border-spacing-2">
      <img src={logoUrl} alt="Logo" className="mb-4" />
      {renderFields().map((field, index) => (
        <TextField
          key={index}
          label={field.label}
          type={field.type}
          value={formData[field.label] || ''}
          onChange={(e) => handleChange(field.label, e.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      ))}
      <Button onClick={handleSubmit} variant="contained" color="primary">
        {mode === 'login' ? 'Login' : mode === 'signup' ? 'Sign Up' : resetPasswordSent ? 'Reset Password' : 'Send Reset Link'}
      </Button>
    </div>
  );
};

export default AuthPage;
