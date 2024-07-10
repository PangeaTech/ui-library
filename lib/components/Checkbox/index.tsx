import React from 'react';
import { CheckboxProps, default as MuiCheckbox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/system';
import '../../color-palettes.css';
import { colorClasses, ColorClassName } from '../../themeConfig';

export interface ICheckboxProps extends CheckboxProps {
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  className?: ColorClassName;
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
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

const StyledCheckbox = styled(MuiCheckbox)(() => ({
  boxSizing: 'border-box',
  width: '20px',
  height: '20px',
  backgroundColor: '#DFE0FF',
  border: '1px solid #2D35DC',
  borderRadius: '6px',
  padding: 0,
  '&.Mui-checked': {
    backgroundColor: '#DFE0FF',
    border: '1px solid #2D35DC',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '15%',
      right: '15%',
      top: '15%',
      bottom: '15%',
      background: `url('path-to-check-icon') no-repeat center center`,
      backgroundSize: 'contain'
    }
  },
  '& .MuiSvgIcon-root': {
    display: 'none'
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

const Checkbox: React.FC<ICheckboxProps> = ({ disabled, onChange, checked = false, required = false, label, labelPlacement, className }) => {
  return (
    <FormGroup>
      <StyledFormControlLabel
        required={required}
        labelPlacement={labelPlacement}
        control={<StyledCheckbox className={className ? colorClasses[className] : ''} disabled={disabled} onChange={onChange} checked={checked} />}
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
