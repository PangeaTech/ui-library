import React from 'react';
import { CheckboxProps, default as MuiCheckbox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { ColorClassName, colorClasses } from 'ui-library/themeConfig';
export interface ICheckboxProps extends CheckboxProps {
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  checkboxColor?: ColorClassName;
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
const getColorClassName = (checkboxColor?: ColorClassName, isBgColor?: boolean) => {
  if (isBgColor) {
    return colorClasses[checkboxColor as ColorClassName] + '30'; // pass opacity to background color
  }
  if (checkboxColor) {
    return colorClasses[checkboxColor];
  }
  return '#2D35DC';
};
const StyledCheckbox = styled((props: ICheckboxProps) => <MuiCheckbox {...props} />)(({ checkboxColor }) => ({
  boxSizing: 'border-box',
  width: '20px',
  height: '20px',
  backgroundColor: '#FAFAFA',
  border: '1px solid #D6D6D6',
  borderRadius: '6px',
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '&.Mui-checked': {
    // pass opacity to background color
    backgroundColor: getColorClassName(checkboxColor, true),
    border: `1px solid ${getColorClassName(checkboxColor)}`,
    '& .MuiSvgIcon-root': {
      display: 'block',
      color: `${getColorClassName(checkboxColor)}`
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

const Checkbox: React.FC<ICheckboxProps> = ({
  disabled,
  onChange,
  checked = false,
  required = false,
  label,
  labelPlacement,
  className,
  checkboxColor
}) => {
  return (
    <FormGroup>
      <StyledFormControlLabel
        required={required}
        labelPlacement={labelPlacement}
        control={
          <StyledCheckbox
            label=""
            checkboxColor={checkboxColor}
            className={className}
            disabled={disabled}
            onChange={onChange}
            checked={checked}
            icon={<CheckIcon />}
            checkedIcon={<CheckIcon />}
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
