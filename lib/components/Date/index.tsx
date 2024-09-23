import React, { useRef } from 'react';
import { IconButton } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { TextField } from 'ui-library'; // Your custom TextField component

interface IDatePickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
  minDate?: string;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  inputStyles?: React.CSSProperties;
  textFieldProps?: any;
}

const Date: React.FC<IDatePickerProps> = ({
  label,
  value,
  onChange,
  minDate,
  placeholder,
  required,
  error,
  helperText,
  inputStyles,
  textFieldProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null); // Create a ref for the hidden input

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker(); // Use the showPicker() method to open the native date picker
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Update the value when the date changes
  };

  return (
    <div style={{ position: 'relative', ...inputStyles }}>
      {/* The visible TextField */}
      <TextField
        label={label}
        value={value}
        onChange={(event: any) => event.preventDefault()} // Prevent manual typing in the TextField
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        required={required}
        endIcon={
          <IconButton onClick={handleIconClick} size="small">
            <CalendarTodayIcon />
          </IconButton>
        }
        {...textFieldProps}
      />

      {/* Hidden input of type 'date' */}
      <input
        ref={inputRef} // Attach the ref to the hidden input
        type="date"
        value={value}
        onChange={handleChange}
        min={minDate}
        required={required}
        style={{ position: 'absolute', top: 0, left: 0, width: 0, height: 0, opacity: 0, pointerEvents: 'none' }}
      />
    </div>
  );
};

export default Date;
