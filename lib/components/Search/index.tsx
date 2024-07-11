import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/system';
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '../../../src/assets/search.png';
// import MicIcon from '../../../src/assets/microphone.png';

const StyledTextField = styled(TextField)(({ disabled }) => ({
  '& .MuiInputBase-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 8px 8px 4px',
    gap: '8px',
    width: '100%',
    maxWidth: '268px',
    height: '50px',
    background: '#FFFFFF',
    border: disabled ? '1px solid #F4F4F4' : '1px solid #DAD7D6',
    borderRadius: '8px',
    '& input::placeholder': {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      color: disabled ? '#DAD7D6' : '#262626'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}));

interface ISearchBarProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (value: string) => void;
  disabled?: boolean;
  micIcon?: boolean;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onChange, disabled = false, micIcon, ...props }) => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setValue('');
    }
  };

  return (
    <StyledTextField
      placeholder="Search..."
      disabled={disabled}
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      InputProps={{
        startAdornment: micIcon ? (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ) : null,
        endAdornment: <InputAdornment position="end">{micIcon ? <MicIcon /> : <SearchIcon />}</InputAdornment>
      }}
      {...props}
    />
  );
};

export default SearchBar;
