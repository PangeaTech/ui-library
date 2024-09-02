// src/components/Dropdown.tsx

import React from 'react';
import { Autocomplete, AutocompleteProps } from '@mui/material';
import { Wrapper, StyledHelperText, StyledTextField } from '../TextField/index';

interface OptionType {
  value: string | number;
  label: string;
}

interface IDropdownProps extends Omit<AutocompleteProps<OptionType, false, false, false>, 'renderInput' | 'value' | 'onChange'> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  options: OptionType[];
  label?: string;
  isSelect?: boolean;
  required?: boolean;
  value?: string | null;
  onChange?: (event: React.SyntheticEvent, value: string | number | null) => void;
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
  const selectedOption = options.find((option) => option.value === value) || null;

  return (
    <Wrapper>
      {label && <span className="font-base text-sm">{label}</span>}
      <Autocomplete
        {...props}
        disabled={disabled}
        options={options}
        value={selectedOption}
        onChange={(event, newValue) => {
          const newValueString = newValue ? newValue.value : null;
          if (onChange) {
            onChange(event, newValueString);
          }
        }}
        renderInput={(params) => <StyledTextField {...params} error={error} placeholder="Select" />}
        fullWidth
      />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default Dropdown;
