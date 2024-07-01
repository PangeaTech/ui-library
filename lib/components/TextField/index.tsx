import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { Box, FormControl, FormHelperText, InputLabel } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface ITextFieldProps extends BaseTextFieldProps {
  disabled?: boolean;
  errormsg?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
}

const CustomTextField: React.FC<ITextFieldProps> = ({ disabled = true, errormsg, label, onChange, sx, ...props }) => {
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
          error={Boolean(errormsg)}
          helperText={errormsg}
          onChange={onChange}
          disabled={disabled}
          sx={{ ...defaultSx, ...sx }}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      {errormsg && <FormHelperText error>{errormsg}</FormHelperText>}
    </FormControl>
  );
};

export default CustomTextField;
