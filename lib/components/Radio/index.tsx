import React from 'react';
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, RadioProps } from '@mui/material';

export interface RadioOption {
  label: string;
  value: string;
}

export interface IRadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  RadioProps?: Partial<RadioProps>;
}

const RadioGroup: React.FC<IRadioGroupProps> = ({ label, options, value, onChange, RadioProps }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup aria-label={label} name={label} value={value} onChange={handleChange}>
        {options.map((option, index) => (
          <FormControlLabel key={index} value={option.value} control={<Radio {...RadioProps} />} label={option.label} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
