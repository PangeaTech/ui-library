import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, FormHelperText, SxProps, TextFieldProps, Theme } from '@mui/material';
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
    <FormControl error={error}>
      {label && <span className="font-base text-sm mb-1">{label}</span>}
      <Box sx={{ position: 'relative' }}>
        <TextField
          {...props}
          type={showPassword ? 'text' : 'password'}
          error={error}
          onChange={handleChange}
          disabled={disabled}
          InputProps={{
            endAdornment: (
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            )
          }}
        />
      </Box>
      <FormHelperText>{error ? helperText : ''}</FormHelperText>
    </FormControl>
  );
};

export default PasswordInput;
