import React from 'react';
import { Autocomplete, AutocompleteProps } from '@mui/material';
import { Wrapper, StyledHelperText, StyledTextField } from '../TextField/index';

interface IDropdownProps extends Omit<AutocompleteProps<string, false, false, false>, 'renderInput'> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  options: string[];
  label?: string;
  isSelect?: boolean;
  required?: boolean;
  value?: string | null;
  onChange?: (event: React.SyntheticEvent, value: string | null) => void;
}

const Dropdown: React.FC<IDropdownProps> = ({
  disabled = false,
  error = false,
  helperText,
  options,
  label,
  isSelect = false,
  value,
  onChange,
  ...props
}) => {
  return (
    <Wrapper>
      {label && <span className="font-base text-sm">{label}</span>}
      <Autocomplete
        {...props}
        disabled={disabled}
        options={options}
        value={value}
        onChange={(event, newValue) => {
          onChange && onChange(event, newValue);
        }}
        renderInput={(params) => <StyledTextField {...params} error={error} placeholder="Select" />}
        fullWidth
      />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default Dropdown;
