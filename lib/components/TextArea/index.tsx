import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { Box, FormControl, InputLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface ITextAreaProps extends BaseTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

const TextArea: React.FC<ITextAreaProps> = ({ disabled = false, error = false, helperText, label, onChange, sx, ...props }) => {
  const defaultSx: SxProps<Theme> = {
    '& .MuiInputBase-root': {
      backgroundColor: disabled ? '#f5f5f5' : 'white',
      color: disabled ? '#9e9e9e' : 'inherit',
      minWidth: '236px'
    },
    '& .MuiFormLabel-root': {
      color: disabled ? '#9e9e9e' : 'inherit'
    }
  };
  return (
    <FormControl fullWidth margin="normal">
      {label && <span className="mb-1 text-sm">{label}</span>}
      <Box>
        <TextField
          {...props}
          error={error}
          helperText={helperText}
          onChange={onChange}
          disabled={disabled}
          multiline
          rows={4}
          sx={{ ...defaultSx, ...sx }}
        />
      </Box>
    </FormControl>
  );
};

export default TextArea;
