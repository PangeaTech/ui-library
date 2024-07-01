import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export interface DateComponentProps {
  label: string;
  onChange: (date: Date | null) => void;
  value: any;
}

const DateComponent: React.FC<DateComponentProps> = ({ label, onChange, value, ...datePickerProps }) => {
  return <DatePicker label={label} value={value} onChange={onChange} {...datePickerProps} />;
};

export default DateComponent;
