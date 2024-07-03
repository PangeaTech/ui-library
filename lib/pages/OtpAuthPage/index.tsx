import { Button, OtpInput, TextField } from 'ui-library';
import React, { useState } from 'react';

interface Field {
  label: string;
  type: string;
}

export interface IOtpAuthPageProps {
  fields: Field[];
  logoUrl: string;
  onSendOtp: (email: string) => boolean;
  onVerifyOtp: (otp: string) => boolean;
}

const OtpAuthPage: React.FC<IOtpAuthPageProps> = ({ fields, logoUrl, onSendOtp, onVerifyOtp }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [flag] = useState(true);

  const generateDummyOtp = () => {
    const dummyOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit random OTP
    setOtp(dummyOtp);
  };

  const handleSendOtp = () => {
    if (onSendOtp(email)) {
      generateDummyOtp();
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    const token = onVerifyOtp(otp);
    if (token) {
      console.log('OTP verified successfully');
      // Proceed with navigation or other actions upon successful OTP verification
    } else {
      console.log('Invalid OTP');
    }
  };

  return (
    <div className="w-vw h-vh flex flex-col justify-center items-center border-[2px] border-spacing-2">
      <img src={logoUrl} alt="Logo" className="mb-4" />
      {otpSent ? (
        <>
          <OtpInput
            length={6}
            onChange={(otpValue) => {
              setOtp(otpValue);
            }}
            label="OTP"
            disabled={!flag}
          />
          <Button onClick={handleVerifyOtp} variant="contained" color="secondary" className="mt-4">
            Verify OTP
          </Button>
        </>
      ) : (
        <>
          {fields.map((field, index) => (
            <TextField
              key={index}
              label={field.label}
              type={field.type}
              value={field.label === 'Email' ? email : ''}
              onChange={(e) => (field.label === 'Email' ? setEmail(e.target.value) : null)}
              errormsg={field.label === 'Email' && email === '' ? 'Email is required' : ''}
              disabled={flag}
            />
          ))}
          <Button onClick={handleSendOtp} variant="contained" color="primary">
            Send OTP
          </Button>
        </>
      )}
    </div>
  );
};

export default OtpAuthPage;
