import React from 'react';

type Props = {
  className?: string;
  style?: React.CSSProperties;
  imageStyle?: React.CSSProperties;
  variant?: 'light' | 'dark';
};

export default function Logo({ className = '', style, variant = 'light' }: Props) {
  const isDarkBg = variant === 'dark';

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', cursor: 'pointer', ...style }}>
      {/* Icon Badge */}
      <div style={{ background: isDarkBg ? '#10B981' : '#195B34', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', borderRadius: '4px', boxShadow: '0 4px 10px rgba(25, 91, 52, 0.25)' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      {/* Brand Text */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '19px', fontWeight: 900, color: isDarkBg ? '#FFFFFF' : '#0F291E', letterSpacing: '0.04em', lineHeight: 1 }}>
          ABC <span style={{ color: isDarkBg ? '#34D399' : '#195B34' }}>FOUNDRIES</span>
        </span>
        <span style={{ fontSize: '9.5px', fontWeight: 800, color: isDarkBg ? '#A7F3D0' : '#15803D', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px' }}>
          RAIL &amp; TRANSIT CASTINGS
        </span>
      </div>
    </div>
  );
}
