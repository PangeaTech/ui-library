import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface IOtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  label: string;
  disabled?: boolean;
}

const OtpInput: React.FC<IOtpInputProps> = ({ length, onChange, label, disabled = false }) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(''));

  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    onChange(otpValues.join(''));
  }, [otpValues, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { value } = e.target;
    const newOtpValues = [...otpValues];

    for (let i = 0; i < value.length; i++) {
      if (index + i < length) {
        newOtpValues[index + i] = value[i];
      }
    }

    setOtpValues(newOtpValues);

    if (value.length > 0 && index + value.length < length) {
      const nextInput = inputsRef.current[index + value.length];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (index > 0 && otpValues[index] === '') {
        const prevInput = inputsRef.current[index - 1];
        if (prevInput) {
          prevInput.focus();
        }
      }

      const newOtpValues = [...otpValues];
      newOtpValues[index] = '';
      setOtpValues(newOtpValues);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <label>{label}</label>
      <Box display="flex" justifyContent="center">
        {otpValues.map((digit, index) => (
          <TextField
            key={index}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: 'center' }
            }}
            disabled={disabled}
            inputRef={(el) => (inputsRef.current[index] = el as HTMLInputElement)}
            sx={{
              width: '40px',
              margin: '0 5px'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OtpInput;
