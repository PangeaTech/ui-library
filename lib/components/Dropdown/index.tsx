import React from 'react';
import { Autocomplete, TextField, AutocompleteProps, InputLabel, Box, FormControl } from '@mui/material';

interface IDropdownProps extends Partial<AutocompleteProps<any, any, any, any>> {
  disabled?: boolean;
  errormsg?: string;
  options: { value: string | number; label: string }[];
  label?: string;
  isSelect?: boolean;
}

const Dropdown: React.FC<IDropdownProps> = ({ disabled = true, errormsg, options, label, isSelect = false, onChange, ...props }) => {
  return (
    <FormControl fullWidth margin="normal">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <Box sx={{ marginTop: label ? '1.5em' : 0 }}>
        <Autocomplete
          {...props}
          disabled={!disabled}
          options={options.map((option) => option.label)}
          onChange={onChange}
          renderInput={(params) => (
            <TextField
              {...params}
              error={Boolean(errormsg)}
              helperText={errormsg}
              sx={{
                backgroundColor: !disabled ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
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
