import React from 'react';
import { Autocomplete, TextField, AutocompleteProps, InputLabel, Box, FormControl } from '@mui/material';

interface IDropdownProps extends Partial<AutocompleteProps<any, any, any, any>> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  options: { value: string | number; label: string }[];
  label?: string;
  isSelect?: boolean;
  required?: boolean;
}

const Dropdown: React.FC<IDropdownProps> = ({
  disabled = false,
  error = false,
  helperText,
  options,
  label,
  isSelect = false,
  onChange,
  ...props
}) => {
  return (
    <FormControl fullWidth margin="normal">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <Box sx={{ marginTop: label ? '1.5em' : 0 }}>
        <Autocomplete
          {...props}
          disabled={disabled}
          options={options}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              error={error}
              helperText={helperText}
              sx={{
                backgroundColor: disabled ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)'
                }
              }}
            />
          )}
          disableClearable={isSelect}
        />
      </Box>
    </FormControl>
  );
};

export default Dropdown;
