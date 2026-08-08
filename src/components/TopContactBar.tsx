import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const TopContactBar: React.FC = () => {
  return (
    <div style={{ background: '#1B5E20', color: '#FFFFFF', fontSize: '11.5px', borderBottom: '1px solid #4CAF50', padding: '8px 0', fontFamily: "'Geist', sans-serif !important" }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        
        {/* Left Side: Compliance Badges & Headquarters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={13} color="#81C784" />
            <span style={{ color: '#FFFFFF', fontWeight: 700, letterSpacing: '0.04em' }}>
              Central Foundry Division: 100 Industrial Parkway, Suite 500
            </span>
          </div>

          <span style={{ color: 'rgba(255,255,255,0.35)' }}>|</span>

          <span style={{ color: '#FFEB3B', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            AAR M-1003 &amp; AREMA CERTIFIED
          </span>
        </div>

        {/* Right Side: Quick Contact Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a 
            href="tel:+18005550199" 
            style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, transition: 'all 0.2s', padding: '3px 8px', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
          >
            <Phone size={13} color="#81C784" />
            <span>+1 (800) 555-0199</span>
          </a>

          <span style={{ color: 'rgba(255,255,255,0.35)' }}>|</span>

          <a 
            href="mailto:dispatch@abcfoundries.com" 
            style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 800, transition: 'all 0.2s', padding: '3px 8px', borderRadius: '2px' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
          >
            <Mail size={13} color="#81C784" />
            <span>dispatch@abcfoundries.com</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopContactBar;
