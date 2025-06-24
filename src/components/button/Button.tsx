import type { Theme } from '@emotion/react';
import { Button as MuiButton, type SxProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../colors.css';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined' | 'text';
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick,
  type = 'button',
  variant = 'contained',
  sx = {},
  fullWidth = false,
  disabled = false,
}) => {
  const { t } = useTranslation();

  return (
    <MuiButton
      type={type}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-bg)',
        border: variant === 'outlined' ? '2px solid var(--color-primary)' : 'none',
        borderRadius: '2rem',
        fontWeight: 700,
        fontSize: '1.1rem',
        textTransform: 'none',
        boxShadow: 'none',
        padding: '0.7rem 2.2rem',
        transition: 'background 0.2s, color 0.2s',
        '&:hover': {
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg)',
        },
        ...sx,
      }}
    >
        {text ? t(text) : children}
    </MuiButton>
  );
};

export default Button;
