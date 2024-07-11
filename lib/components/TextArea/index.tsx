import React, { useEffect, useRef } from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { Box, FormControl } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface ITextAreaProps extends BaseTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps<Theme>;
  resizable?: boolean;
  autoResize?: boolean;
}

const TextArea: React.FC<ITextAreaProps> = ({
  disabled = false,
  error = false,
  helperText,
  label,
  onChange,
  sx,
  resizable = false,
  autoResize = false,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to auto to recalculate height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  };

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to auto to recalculate height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height
    }
  }, [autoResize]);

  const defaultSx: SxProps<Theme> = {
    '& .MuiInputBase-root': {
      backgroundColor: disabled ? '#f5f5f5' : 'white',
      color: disabled ? '#9e9e9e' : 'inherit',
      minWidth: '236px'
    },
    textarea: {
      resize: resizable ? 'both' : 'none',
      overflow: 'hidden' // Hide the scrollbar if not resizable
    },
    '& .MuiFormLabel-root': {
      color: disabled ? '#9e9e9e' : 'inherit'
    }
  };

  return (
    <FormControl fullWidth margin="normal">
      {label && <span className="mb-1 text-sm">{label}</span>}
      <Box>
        <TextField
          {...props}
          error={error}
          helperText={helperText}
          onChange={handleInput}
          disabled={disabled}
          multiline
          rows={4}
          sx={{ ...defaultSx, ...sx }}
          inputRef={textareaRef}
        />
      </Box>
    </FormControl>
  );
};

export default TextArea;
