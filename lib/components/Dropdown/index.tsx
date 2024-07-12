// src/components/Dropdown.tsx

import React from 'react';
import { Autocomplete, AutocompleteProps } from '@mui/material';
import { Wrapper, StyledHelperText, StyledTextField } from '../TextField/index';

interface OptionType {
  value: string | number;
  label: string;
}

interface IDropdownProps extends Partial<AutocompleteProps<OptionType, false, false, false>> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  options: OptionType[];
  label?: string;
  isSelect?: boolean;
  required?: boolean;
  value?: OptionType | null;
  onChange?: (event: React.SyntheticEvent, value: OptionType | null) => void;
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
        getOptionLabel={(option) => option.label}
        onChange={onChange}
        renderInput={(params) => <StyledTextField {...params} error={error} placeholder="Select" />}
        fullWidth
      />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default Dropdown;
