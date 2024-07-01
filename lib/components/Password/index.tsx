import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormControl, FormHelperText, InputLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface IPasswordInputProps extends Omit<TextFieldProps, 'onChange'> {
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

  const defaultSx: SxProps<Theme> = {
    '& .MuiInputBase-root': {
      backgroundColor: disabled ? '#f5f5f5' : 'inherit',
      color: disabled ? '#9e9e9e' : 'inherit'
    },
    '& .MuiFormLabel-root': {
      color: disabled ? '#9e9e9e' : 'inherit'
    }
  };

  return (
    <FormControl fullWidth margin="normal">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <Box sx={{ marginTop: label ? '1.5em' : 0 }}>
        <TextField
          {...props}
          type={showPassword ? 'text' : 'password'}
          error={error}
          onChange={handleChange}
          disabled={disabled}
          sx={{ ...defaultSx, ...sx }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default PasswordInput;
