import React, { ReactNode } from 'react';
import { default as MuiButton, ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

interface IButtonProps extends ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onclick?: () => void;
  children?: ReactNode;
}

const LoadingSpinner = styled(CircularProgress)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.primary.main
}));

const Button: React.FC<IButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  loading = false,
  onclick,
  children,
  ...rest
}) => {
  return (
    <MuiButton variant={variant} color={color} fullWidth={fullWidth} onClick={onclick} disabled={disabled || loading} {...rest}>
      {loading && <LoadingSpinner size={24} />}
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</span>
    </MuiButton>
  );
};

export default Button;
