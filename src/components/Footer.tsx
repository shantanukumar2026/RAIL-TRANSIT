import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#1B5E20', color: '#FFFFFF', borderTop: '3px solid #4CAF50' }}>
      {/* Corporate Executive Footer Columns */}
      <div className="container-custom" style={{ paddingTop: '5.5rem', paddingBottom: '4.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
          
          {/* Col 1: Brand Info */}
          <div style={{ gridColumn: 'span 4' }}>
            <Logo variant="dark" style={{ marginBottom: '1.75rem' }} />
            <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: 1.7, maxWidth: '360px', margin: '0 0 2rem 0', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
              ABC Foundries &amp; Forge is a global manufacturer of electric induction cast manganese turnout trackwork, forged steel axles, and rolling stock components. Engineered for heavy haul endurance.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <a href="#linkedin" aria-label="LinkedIn" style={{ width: '40px', height: '40px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid #4CAF50', color: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.color = '#4CAF50'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#youtube" aria-label="YouTube" style={{ width: '40px', height: '40px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid #4CAF50', color: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.color = '#4CAF50'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#twitter" aria-label="Twitter / X" style={{ width: '40px', height: '40px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.12)', border: '1px solid #4CAF50', color: '#4CAF50', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', textDecoration: 'none' }} onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.color = '#4CAF50'; }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Overview */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: "'Geist', sans-serif !important" }}>
              OVERVIEW
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Overview & Objectives', 'Scope & Market', 'Manufacturing Facilities', 'Global Operations', 'Careers'].map((link, i) => (
                <li key={i}>
                  <a href="#about" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 700, padding: '2px 4px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: "'Geist', sans-serif !important" }}>
              PRODUCTS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['Turnout Trackwork', 'Forged Axles', 'Axlebox Housings', 'Catenary Hardware', 'All Catalog'].map((link, i) => (
                <li key={i}>
                  <a href="#products" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 700, padding: '2px 4px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quality */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: "'Geist', sans-serif !important" }}>
              QUALITY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {['AREMA Chapter 4', 'AAR M-1003 QA', 'FRA Rule 213', 'Ultrasonic NDT', 'Metallurgy QA'].map((link, i) => (
                <li key={i}>
                  <a href="#standards" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: 700, padding: '2px 4px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Generic Corporate Contact Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: "'Geist', sans-serif !important" }}>
              DISPATCH
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.45, fontFamily: "'Manrope', sans-serif !important" }}>
                <MapPin size={18} color="#4CAF50" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>100 Industrial Parkway, Suite 500</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#FFFFFF', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                <Phone size={18} color="#4CAF50" style={{ flexShrink: 0 }} />
                <span>+1 (800) 555-0199</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#FFFFFF', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                <Mail size={18} color="#4CAF50" style={{ flexShrink: 0 }} />
                <span>foundrymen@wespointindustries.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', background: '#103F14', padding: '1.5rem 0', fontSize: '13px', color: '#FFFFFF', fontWeight: 600 }}>
        <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: "'Manrope', sans-serif !important", fontWeight: 700 }}>
            &copy; ABC Foundries &amp; Forge Inc. All Rights Reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <a href="#privacy" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, transition: 'all 0.2s', padding: '2px 6px', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
              Privacy Policy
            </a>
            <span style={{ color: '#4CAF50' }}>|</span>
            <a href="#terms" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, transition: 'all 0.2s', padding: '2px 6px', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
              Terms of Use
            </a>
            <span style={{ color: '#4CAF50' }}>|</span>
            <a href="#sitemap" style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, transition: 'all 0.2s', padding: '2px 6px', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }} onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }} onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
