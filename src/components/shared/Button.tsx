import { Button as MuiButton } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined' | 'text';
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'contained',
  sx = {},
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <MuiButton
      type={type}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        backgroundColor: variant === 'contained' ? '#FF6B35' : 'transparent',
        color: variant === 'contained' ? '#fff' : '#FF6B35',
        border: variant === 'outlined' ? '2px solid #FF6B35' : 'none',
        borderRadius: '2rem',
        fontWeight: 700,
        fontSize: '1.1rem',
        textTransform: 'none',
        boxShadow: 'none',
        padding: '0.7rem 2.2rem',
        transition: 'background 0.2s, color 0.2s',
        '&:hover': {
          backgroundColor: variant === 'contained' ? '#e65a1e' : '#FF6B35',
          color: '#fff',
        },
        ...sx,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button; 