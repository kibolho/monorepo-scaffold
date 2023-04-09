import React from 'react';
import { ElementType, HTMLAttributes, ReactNode } from 'react';
import './styles.css';

export const Body = ({ as = 'p', children, ...props }: BodyProps) => {
  const Component = as;
  return (
    <Component classname="body" {...props}>
      {children}
    </Component>
  );
};

export interface BodyProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  as?: ElementType;
}

Body.displayName = 'Body';
