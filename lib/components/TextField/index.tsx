import React from 'react';
import { default as MuiTextField, BaseTextFieldProps } from '@mui/material/TextField';
import { Box, FormControl, InputLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export interface ITextFieldProps extends BaseTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

const TextField: React.FC<ITextFieldProps> = ({ disabled = false, error = false, helperText, label, onChange, sx, ...props }) => {
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
        <MuiTextField
          {...props}
          error={error}
          helperText={helperText}
          onChange={onChange}
          disabled={disabled}
          sx={{ ...defaultSx, ...sx }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
    </FormControl>
  );
};

export default TextField;
