import React, { useState } from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, FormHelperText } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { TextField } from 'ui-library';

export interface IPasswordInputProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (value: string) => void;
  error?: boolean;
  helperText?: string;
  label: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({ onChange, error = false, helperText, label, disabled = false, sx, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl>
      {label && <span className="font-base text-sm mb-1">{label}</span>}
      <Box>
        <TextField
          {...props}
          type={showPassword ? 'text' : 'password'}
          error={error}
          onChange={handleChange}
          disabled={disabled}
          endIcon={
            showPassword ? (
              <IconButton onClick={togglePasswordVisibility} edge="end">
                <VisibilityIcon />
              </IconButton>
            ) : (
              <IconButton onClick={togglePasswordVisibility} edge="end">
                <VisibilityOffIcon />
              </IconButton>
            )
          }
        />
      </Box>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;
