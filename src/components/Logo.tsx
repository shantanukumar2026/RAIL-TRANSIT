import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  variant?: 'light' | 'dark' | 'transparent';
};

export default function Logo({ className = '', style, variant = 'light' }: Props) {
  const isDark = variant === 'dark' || variant === 'transparent';

  return (
    <a href="#" className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', textDecoration: 'none', ...style }}>
      {/* Heavy Industrial Emblem */}
      <div 
        style={{ 
          background: isDark ? '#FFFFFF' : '#1B5E20', 
          color: isDark ? '#1B5E20' : '#FFFFFF', 
          padding: '6px 10px', 
          fontWeight: 900, 
          fontSize: '22px', 
          letterSpacing: '0.04em',
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #4CAF50'
        }}
      >
        ABC
      </div>
      
      {/* Corporate Division Text */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '15px', fontWeight: 800, color: isDark ? '#FFFFFF' : '#1B5E20', letterSpacing: '0.08em', textTransform: 'uppercase', lineHeight: 1.1 }}>
          RAIL &amp; TRANSIT
        </span>
        <span style={{ fontSize: '9.5px', fontWeight: 700, color: isDark ? '#4CAF50' : '#4CAF50', letterSpacing: '0.16em', textTransform: 'uppercase', marginTop: '2px' }}>
          CASTINGS &amp; FORGINGS
        </span>
      </div>
    </a>
  );
}
