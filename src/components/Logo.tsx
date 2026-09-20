import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'light' | 'dark' | 'transparent';
};

export default function Logo({ className = '', style, variant = 'light' }: Props) {
  return (
    <a href="/" className={className} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', ...style }}>
      <img
        src="/logos/logo-white.png"
        alt="Westpoint Group Companies Logo"
        style={{
          height: '80px',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'left center'
        }}
      />
    </a>
  );
}
