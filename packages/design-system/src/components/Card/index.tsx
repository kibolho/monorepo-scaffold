import React from 'react';
import { HTMLAttributes, ReactNode } from 'react';
import './styles.css';

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <div {...props} className="card">
      {children}
    </div>
  );
};

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
