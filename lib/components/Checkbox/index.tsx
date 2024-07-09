import React from 'react';
import { CheckboxProps, default as MuiCheckbox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/system';

export interface ICheckboxProps extends CheckboxProps {
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: 0,
  gap: '12px',
  width: '188px',
  height: '22px',
  '& .MuiFormControlLabel-label': {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    letterSpacing: '-0.01em',
    color: '#0F0F0F'
  }
}));

const StyledCheckbox = styled(MuiCheckbox)(({ theme }) => ({
  boxSizing: 'border-box',
  width: '20px',
  height: '20px',
  backgroundColor: '#DFE0FF',
  border: '1px solid #2D35DC',
  borderRadius: '6px',
  padding: 0,
  '& .MuiSvgIcon-root': {
    display: 'none'
  },
  '&.Mui-checked': {
    backgroundColor: '#DFE0FF',
    border: '1px solid #2D35DC',
    '& .MuiIconButton-label': {
      '&:after': {
        content: '""',
        position: 'absolute',
        left: '4px',
        top: '4px',
        width: '8px',
        height: '16px',
        border: 'solid white',
        borderWidth: '0 3px 3px 0',
        transform: 'rotate(45deg)'
      }
    }
  },
  '&:hover': {
    backgroundColor: '#DFE0FF'
  },
  '&.Mui-disabled': {
    backgroundColor: '#F4F4F4',
    border: '1px solid #F4F4F4',
    '& .MuiSvgIcon-root': {
      color: '#DAD7D6'
    }
  }
}));

const Checkbox: React.FC<ICheckboxProps> = ({ disabled, onChange, checked = false, required = false, label, labelPlacement }) => {
  return (
    <FormGroup>
      <StyledFormControlLabel
        required={required}
        labelPlacement={labelPlacement}
        control={<StyledCheckbox disabled={disabled} onChange={onChange} checked={checked} />}
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
