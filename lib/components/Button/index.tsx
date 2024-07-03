import React from 'react';
import { default as MuiButton, ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

interface IButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const LoadingSpinner = styled(CircularProgress)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.main
}));

const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
  children,
  ...rest
}) => {
  return (
    <MuiButton variant={variant} color={color} fullWidth={fullWidth} onClick={onClick} disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner size={24} />}
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</span>
    </MuiButton>
  );
};

export default Button;
