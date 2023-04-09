import React from 'react';
import './styles.css';

interface Props {
  href: string;
  target: string;
  src: string;
  alt: string;
}
export const Logo: React.FC<Props> = ({ href, target, src, alt }) => {
  return (
    <a href={href} target={target}>
      <img src={src} className="logo" alt={alt} />
    </a>
  );
};
