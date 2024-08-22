import React, { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { TextField } from 'ui-library';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

interface IOtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  label: string;
  disabled?: boolean;
}

const OtpBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '10px'
});

const OtpInputBox = styled(TextField)(({ disabled }) => ({
  '& .MuiInputBase-input': {
    textAlign: 'center',
    fontSize: '18px',
    padding: '10px',
    width: '32px',
    height: '40px'
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: disabled ? '#f5f5f5' : '#f0f0f0',
    border: `1px solid ${disabled ? '#d0d0d0' : '#d0d0d0'}`,
    color: disabled ? '#a0a0a0' : 'inherit',
    '&.Mui-focused fieldset': {
      borderColor: disabled ? '#d0d0d0' : '#3f51b5'
    },
    '&:hover fieldset': {
      borderColor: disabled ? '#d0d0d0' : '#3f51b5'
    }
  }
}));

const ErrorText = styled('p')({
  color: 'red',
  marginTop: '8px',
  fontSize: '14px',
  textAlign: 'center'
});

const OtpInput: React.FC<IOtpInputProps> = ({ length, onChange, label, disabled = false }) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(''));
  const [errorText, setErrorText] = useState<string>('');

  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    onChange(otpValues.join(''));
  }, [otpValues, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { value } = e.target;
    const newOtpValues = [...otpValues];
    let isValid = true;

    for (let i = 0; i < value.length; i++) {
      if (index + i < length) {
        if (!/^\d+$/.test(value[i])) {
          isValid = false;
          break;
        }
        newOtpValues[index + i] = value[i];
      }
    }

    if (isValid) {
      setOtpValues(newOtpValues);
      setErrorText('');
      if (value.length > 0 && index + value.length < length) {
        const nextInput = inputsRef.current[index + value.length];
        if (nextInput) {
          nextInput.focus();
        }
      }
    } else {
      setErrorText('Please enter numbers only.');
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

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    const newOtpValues = [...otpValues];

    for (let i = 0; i < pastedData.length && i < length; i++) {
      if (/^\d+$/.test(pastedData[i])) {
        newOtpValues[i] = pastedData[i];
      } else {
        setErrorText('Please enter numbers only.');
        return;
      }
    }

    setOtpValues(newOtpValues);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <label>{label}</label>
      <OtpBox>
        {otpValues.map((digit, index) => (
          <OtpInputBox
            key={index}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            inputProps={{
              maxLength: 1
            }}
            disabled={disabled}
            inputRef={(el) => (inputsRef.current[index] = el as HTMLInputElement)}
          />
        ))}
      </OtpBox>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Box>
  );
};

export default OtpInput;
