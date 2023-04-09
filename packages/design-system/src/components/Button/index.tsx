import { ButtonHTMLAttributes, ReactNode } from 'react';
import React from 'react';
import './styles.css';

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
