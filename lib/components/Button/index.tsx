import React from 'react';
import { default as MuiButton, ButtonProps } from '@mui/material/Button';

interface IButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <MuiButton variant={variant} color={color} fullWidth={fullWidth} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
