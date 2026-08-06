import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const TopContactBar: React.FC = () => {
  return (
    <div style={{ background: '#0C241B', color: '#A3B5AC', fontSize: '11.5px', borderBottom: '1px solid rgba(197, 160, 89, 0.25)', padding: '7px 0', fontFamily: "'Geist', sans-serif !important" }}>
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        
        {/* Left Side: Compliance Badges & Headquarters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin size={12} color="#C5A059" />
            <span style={{ color: '#F5F2EB', fontWeight: 700, letterSpacing: '0.04em' }}>
              Central Foundry Division: 100 Industrial Parkway, Suite 500
            </span>
          </div>

          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

          <span style={{ color: '#C5A059', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            AAR M-1003 &amp; AREMA CERTIFIED
          </span>
        </div>

        {/* Right Side: Quick Contact Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <a 
            href="tel:+18005550199" 
            style={{ color: '#F5F2EB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C5A059'}
            onMouseLeave={e => e.currentTarget.style.color = '#F5F2EB'}
          >
            <Phone size={12} color="#C5A059" />
            <span>+1 (800) 555-0199</span>
          </a>

          <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>

          <a 
            href="mailto:dispatch@abcfoundries.com" 
            style={{ color: '#F5F2EB', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C5A059'}
            onMouseLeave={e => e.currentTarget.style.color = '#F5F2EB'}
          >
            <Mail size={12} color="#C5A059" />
            <span>dispatch@abcfoundries.com</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopContactBar;
