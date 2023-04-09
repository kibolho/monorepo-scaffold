import React from 'react';
import { ElementType, HTMLAttributes, ReactNode } from 'react';
import './styles.css';

export const Heading = ({ as = 'h2', children, ...props }: HeadingProps) => {
  const Component = as;
  return <Component {...props}>{children}</Component>;
};

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: ElementType;
}

Heading.displayName = 'Heading';
