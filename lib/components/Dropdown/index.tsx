import React from 'react';
import { Autocomplete, AutocompleteProps } from '@mui/material';
import { Wrapper, StyledHelperText, StyledTextField } from '../TextField/index';

interface OptionType {
  value: string;
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
  value?: string; // Value as string
  onChange?: (event: React.SyntheticEvent, value: string | null) => void; // onChange expects a string or null
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
  // Convert string value to OptionType for Autocomplete component
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
