import React from 'react';
import { FormLabel, RadioGroup as MuiRadioGroup, Radio, RadioProps } from '@mui/material';

export interface RadioOption {
  label: string;
  value: string;
}

export interface IRadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  row?: boolean; // Add row prop to control horizontal/vertical layout
  RadioProps?: Partial<RadioProps>;
  className?: string;
}

const RadioGroup: React.FC<IRadioGroupProps> = ({ label, options, value, onChange, row = false, RadioProps, className }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <MuiRadioGroup row={row} aria-label={label} name={label} value={value} onChange={handleChange} className={className}>
        <div className="flex justify-center items-center">
          {options.map((option) => (
            <>
              <Radio {...RadioProps} value={option.value} />
              <FormLabel>{option.label}</FormLabel>
            </>
          ))}
        </div>
      </MuiRadioGroup>
    </>
  );
};

export default RadioGroup;
