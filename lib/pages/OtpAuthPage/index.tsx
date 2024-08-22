import { Button, JsonForm, OtpInput, TextField } from 'ui-library';
import React, { useState } from 'react';
import { isValidEmailInput } from 'ui-library/utils/functions';

export interface IOtpAuthPageProps {
  logoUrl: string;
  onSendOtp: (email: string) => boolean;
  onVerifyOtp: (otp: string) => boolean;
}

type ErrorType = {
  message: string;
  isError: boolean;
};
const OtpAuthPage: React.FC<IOtpAuthPageProps> = ({ logoUrl, onSendOtp, onVerifyOtp }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const emailForm = {
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
      }
    ]
  };
  const generateDummyOtp = () => {
    const dummyOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit random OTP
    setOtp(dummyOtp);
  };

  const handleSendOtp = (data) => {
    if (onSendOtp(data)) {
      generateDummyOtp();
      setEmail(data.email);
      setOtpSent(true);
    }
  };

  const handleVerifyOtp = () => {
    const token = onVerifyOtp(otp);
    if (token) {
      console.log('OTP verified successfully');
      // Proceed with navigation or other actions upon successful OTP verification
    } else {
      alert('Invalid OTP');
    }
  };

  const renderHeader = () => {
    if (otpSent) {
      return (
        <div>
          <p className="">
            Enter the OTP sent to <span className="font-semibold">{email}</span>
          </p>
        </div>
      );
    }

    return (
      <div className="">
        <p className="font-semibold">Enter your Email address</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center border space-y-2">
      {/* <img src={logoUrl} alt="Logo" className="mb-2" /> */}
      {renderHeader()}
      {otpSent ? (
        <>
          <OtpInput
            length={6}
            onChange={(otpValue) => {
              setOtp(otpValue);
            }}
            label="OTP"
          />
          <Button onClick={handleVerifyOtp} variant="contained" color="secondary" className="mt-4" disabled={otp.length !== 6}>
            Verify OTP
          </Button>
        </>
      ) : (
        <>
          <JsonForm jsonData={emailForm} onSubmit={handleSendOtp} submitButtonLabel="Send OTP" />
          {/* <TextField label="Email" type="email" value={email} onChange={handleEmailChange} error={errors.isError} helperText={errors.message || ''} />
          <Button onClick={handleSendOtp} variant="contained" color="primary" disabled={email === ''}>
            Send OTP
          </Button> */}
        </>
      )}
    </div>
  );
};

export default OtpAuthPage;
