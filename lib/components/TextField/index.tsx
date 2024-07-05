import React from 'react';
import { TextField as MuiTextField, BaseTextFieldProps, InputLabel, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

interface ITextFieldProps extends BaseTextFieldProps {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: 0,
  gap: '8px',
  position: 'absolute',
  width: '268px',
  height: '88px',
  left: 0,
  top: '59px'
});

const LabelWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0px 10px 0px 0px',
  gap: '4px',
  width: '268px',
  height: '20px'
});

const StyledInputLabel = styled(InputLabel)({
  width: '248px',
  height: '28px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '28px',
  display: 'flex',
  alignItems: 'center',
  letterSpacing: '-0.02em',
  color: '#262626'
});

const StyledTextField = styled(MuiTextField)({
  '& .MuiInputBase-root': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '8px 8px 8px 12px',
    gap: '8px',
    width: '268px',
    height: '44px',
    background: '#FFFFFF',
    border: '1px solid #DAD7D6',
    borderRadius: '8px',
    '& input::placeholder': {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '28px',
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.02em',
      color: '#262626'
    }
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
});

const StyledHelperText = styled(FormHelperText)({
  width: '268px',
  height: '12px',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: '12px',
  color: '#ED7857',
  display: 'flex',
  alignItems: 'center',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0
});

const TextField: React.FC<ITextFieldProps> = ({ disabled = false, error = false, helperText, label, onChange, ...props }) => {
  return (
    <Wrapper>
      {label && (
        <LabelWrapper>
          <StyledInputLabel shrink>{label}</StyledInputLabel>
        </LabelWrapper>
      )}
      <StyledTextField {...props} error={error} onChange={onChange} disabled={disabled} InputLabelProps={{ shrink: true }} />
      {helperText && <StyledHelperText>{helperText}</StyledHelperText>}
    </Wrapper>
  );
};

export default TextField;
