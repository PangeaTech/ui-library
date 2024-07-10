import React from 'react';
import { TextField as MuiTextField, InputLabel, FormHelperText, InputAdornment, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';
import '../../../src/index.css';

interface ITextFieldProps extends Omit<TextFieldProps, 'onChange'> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '4px',
  width: '100%',
  maxWidth: '326px'
});

export const LabelWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px 10px 0px 0px',
  gap: '4px',
  width: '100%',
  maxWidth: '326px',
  height: '12px'
});

export const StyledInputLabel = styled(InputLabel)({
  width: '100%',
  maxWidth: '248px',
  height: '28px',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  color: '#262626'
});

export const StyledTextField = styled((props: ITextFieldProps) => <MuiTextField {...props} />)(({ disabled, readOnly, error }) => ({
  '& .MuiInputBase-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 8px 8px 4px',
    gap: '8px',
    width: '100%',
    maxWidth: '268px',
    height: '44px',
    background: '#FFFFFF',
    border: error ? '1px solid #ED7857' : disabled || readOnly ? '1px solid #F4F4F4' : '1px solid #DAD7D6',
    borderRadius: '8px',
    '& input::placeholder': {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      color: disabled ? '#DAD7D6' : '#262626'
    },
    '& input': {
      pointerEvents: readOnly ? 'none' : 'auto'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
}));

export const StyledHelperText = styled(FormHelperText)({
  width: '100%',
  maxWidth: '268px',
  height: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  color: '#ED7857',
  display: 'flex',
  alignItems: 'center',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0
});

const ErrorIndicator = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '6px',
  width: '100%',
  maxWidth: '236px',
  height: '3px',
  marginTop: '6px'
});

const ErrorRectangle = styled('div')({
  height: '3px',
  background: '#ED7857',
  borderRadius: '1px',
  flex: 'none',
  flexGrow: 1
});

const TextField: React.FC<ITextFieldProps> = ({
  disabled = false,
  error = false,
  helperText,
  label,
  onChange,
  readOnly = false,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <Wrapper>
      {/* {label && (
        <LabelWrapper>
          <StyledInputLabel>{label}</StyledInputLabel>
        </LabelWrapper>
      )} */}
      {label && <span className="font-base text-sm">{label}</span>}
      <StyledTextField
        {...props}
        error={error}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        // InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: startIcon ? <InputAdornment position="start">{startIcon}</InputAdornment> : null,
          endAdornment: endIcon ? (
            <InputAdornment position="end" sx={{ marginRight: '8px' }}>
              {endIcon}
            </InputAdornment>
          ) : null
        }}
      />
      {error && props.type === 'password' && (
        <ErrorIndicator>
          <ErrorRectangle />
          <ErrorRectangle />
          <ErrorRectangle />
          <ErrorRectangle />
        </ErrorIndicator>
      )}
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default TextField;
