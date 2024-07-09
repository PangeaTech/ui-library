import React from 'react';
import { Autocomplete, AutocompleteProps } from '@mui/material';
import { Wrapper, LabelWrapper, StyledInputLabel, StyledHelperText, StyledTextField } from '../TextField/index';

interface OptionType {
  value: string | number;
  label: string;
}

interface IDropdownProps extends Partial<AutocompleteProps<any, any, any, any>> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  options: OptionType[];
  label?: string;
  isSelect?: boolean;
  required?: boolean;
  value?: string | number;
  onChange?: (event: React.SyntheticEvent, value: OptionType | null) => void;
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
    <Wrapper>
      {label && (
        <LabelWrapper>
          <StyledInputLabel shrink>{label}</StyledInputLabel>
        </LabelWrapper>
      )}
      <Autocomplete
        {...props}
        disabled={disabled}
        options={options}
        onChange={onChange}
        disableClearable={isSelect}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            error={error}
            inputProps={{
              ...params.InputProps,
              startAdornment: params.InputProps?.startAdornment
            }}
            placeholder="Select"
          />
        )}
      />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default Dropdown;
