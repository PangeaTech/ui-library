import { CheckboxProps, default as MuiCheckBox } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
// extend switch props

export interface ICheckboxProps extends CheckboxProps {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const Checkbox: React.FC<ICheckboxProps> = ({ disabled, onChange, checked = false, required = false, label, labelPlacement }) => {
  return (
    <FormGroup>
      <FormControlLabel
        required={required}
        labelPlacement={labelPlacement}
        control={<MuiCheckBox disabled={disabled} onChange={onChange} checked={checked} />}
        label={label}
      />
    </FormGroup>
  );
};

export default Checkbox;
