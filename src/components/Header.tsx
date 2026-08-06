import React, { useState } from 'react';
import Logo from './Logo';
import MegaMenu from './MegaMenu';
import type { MegaMenuTab } from '../types';

interface HeaderProps {
  lang: 'en' | 'es';
  setLang: (lang: 'en' | 'es') => void;
  activeMegaMenu?: MegaMenuTab;
  setActiveMegaMenu?: (menu: MegaMenuTab) => void;
  t: any;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  activeMegaMenu,
  setActiveMegaMenu,
  t
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeAllMenus = () => {
    if (setActiveMegaMenu) setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const scopeMarketLinks = [
    { title: '1000-3000 Trackside Castings', href: '#products', sub: 'AREMA Ch. 4 | ASTM A27 / A536 Steel' },
    { title: '4000-6000 Rolling Stock Forgings', href: '#products', sub: 'AAR M-107 / M-208 | Forged Alloy Steel' },
    { title: '7000-8000 Couplers & Draft Gear', href: '#products', sub: 'AAR M-201 Grade E Cast Steel' },
    { title: '9000-10000 Catenary Arms', href: '#products', sub: 'EN 13674 | High-Conductivity Bronze' },
    { title: '11000-12000 Trench & Pull Boxes', href: '#products', sub: 'AASHTO M306 | Heavy Sub-Track Boxes' },
    { title: 'Custom Rail Forgings', href: '#products', sub: 'ISO 9001:2015 & PPAP Level 3 Specs' },
  ];

  const solutionLinks = [
    { title: 'Class I Freight Railroads', href: '#markets', sub: 'Heavy Haul Track & Axle Solutions' },
    { title: 'Urban Metro & Rapid Transit', href: '#markets', sub: 'Subway & Commuter Rail Castings' },
    { title: 'High-Speed Rail Corridors', href: '#markets', sub: '300+ km/h Turnout Geometry' },
    { title: 'Locomotive OEMs & Rebuilders', href: '#markets', sub: 'Traction Assemblies & Wheelsets' },
  ];

  const standardLinks = [
    { title: 'AREMA Chapter 4 Manual', href: '#manufacturing', sub: 'Trackwork Engineering Standards' },
    { title: 'AAR M-1003 QA Certification', href: '#manufacturing', sub: 'Freight Railroad Quality Assurance' },
    { title: 'Zero-Defect NDT Testing', href: '#sustainability', sub: 'Ultrasonic & Magnetic Particle Inspection' },
    { title: 'ISO 9001:2015 Metallurgical Lab', href: '#sustainability', sub: 'Spectrographic & Physical Load Testing' },
  ];

  const knowledgeLinks = [
    { title: 'CAD & 3D BIM Blueprints', href: '#knowledge', sub: 'Download Trackside CAD Libraries' },
    { title: 'Metallurgical Data Bulletins', href: '#knowledge', sub: 'Material Grades & Tensile Strength' },
    { title: 'Transit Approval Letters', href: '#knowledge', sub: 'Official DOT & Railroad Authorities' },
    { title: 'Field Maintenance Guides', href: '#knowledge', sub: 'Trackside Installation & Service' },
  ];

  return (
    <header className="site-header" style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#FFFFFF' }}>
      {/* 1. Top Utility Micro-Bar (Paving Risers Style) */}
      <div style={{ background: '#0F291E', color: '#CBD5E1', fontSize: '11px', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4vw', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E2E8F0' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            <span>AREMA Chapter 4 &amp; AAR M-1003 Certified Rail Foundry &amp; Forge</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="tel:18005557245" style={{ color: '#E2E8F0', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +1 (800) 555-RAIL
            </a>
            <span style={{ color: '#475569' }}>|</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '12px' }}>🇺🇸</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as 'en' | 'es')}
                style={{ background: 'transparent', border: 'none', color: '#FFFFFF', fontSize: '11px', fontWeight: 600, cursor: 'pointer', outline: 'none' }}
              >
                <option value="en" style={{ background: '#0F291E', color: '#FFF' }}>English - USD</option>
                <option value="es" style={{ background: '#0F291E', color: '#FFF' }}>Español - USD</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with 4px Accent Line (Paving Risers Style) */}
      <div style={{ background: '#FFFFFF', borderBottom: '4px solid #195B34', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'relative' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 4vw', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }} onClick={closeAllMenus}>
            <Logo />
          </a>

          {/* Desktop Navigation Items with Dropdowns */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '100%' }}>
            {/* 1. OVERVIEW & OBJECTIVES */}
            <a
              href="#about"
              onClick={closeAllMenus}
              style={{
                padding: '10px 14px',
                color: '#0F291E',
                fontSize: '13.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
            >
              OVERVIEW &amp; OBJECTIVES
            </a>

            {/* 2. SCOPE & MARKET Dropdown */}
            <div className="nav-dropdown-group" style={{ position: 'relative' }}>
              <button
                className="nav-dropdown-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  background: 'none',
                  border: 'none',
                  color: '#0F291E',
                  fontSize: '13.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>SCOPE &amp; MARKET</span>
                <svg className="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu" style={{ width: '320px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  {scopeMarketLinks.map((item, idx) => (
                    <li key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <a
                        href={item.href}
                        onClick={closeAllMenus}
                        className="nav-dropdown-link"
                        style={{ display: 'block', padding: '12px 18px', textDecoration: 'none', transition: 'all 0.15s ease' }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</div>
                        <div className="nav-sub-text" style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>{item.sub}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 3. SOLUTIONS Dropdown */}
            <div className="nav-dropdown-group" style={{ position: 'relative' }}>
              <button
                className="nav-dropdown-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  background: 'none',
                  border: 'none',
                  color: '#0F291E',
                  fontSize: '13.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>SOLUTIONS</span>
                <svg className="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu" style={{ width: '300px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  {solutionLinks.map((item, idx) => (
                    <li key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <a
                        href={item.href}
                        onClick={closeAllMenus}
                        className="nav-dropdown-link"
                        style={{ display: 'block', padding: '12px 18px', textDecoration: 'none', transition: 'all 0.15s ease' }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</div>
                        <div className="nav-sub-text" style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>{item.sub}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 4. STANDARDS Dropdown */}
            <div className="nav-dropdown-group" style={{ position: 'relative' }}>
              <button
                className="nav-dropdown-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  background: 'none',
                  border: 'none',
                  color: '#0F291E',
                  fontSize: '13.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>STANDARDS</span>
                <svg className="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu" style={{ width: '310px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  {standardLinks.map((item, idx) => (
                    <li key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <a
                        href={item.href}
                        onClick={closeAllMenus}
                        className="nav-dropdown-link"
                        style={{ display: 'block', padding: '12px 18px', textDecoration: 'none', transition: 'all 0.15s ease' }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</div>
                        <div className="nav-sub-text" style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>{item.sub}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. TESTINGS */}
            <a
              href="#sustainability"
              onClick={closeAllMenus}
              style={{
                padding: '10px 14px',
                color: '#0F291E',
                fontSize: '13.5px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
            >
              TESTINGS
            </a>

            {/* 6. KNOWLEDGE Dropdown */}
            <div className="nav-dropdown-group" style={{ position: 'relative' }}>
              <button
                className="nav-dropdown-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '10px 14px',
                  background: 'none',
                  border: 'none',
                  color: '#0F291E',
                  fontSize: '13.5px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>KNOWLEDGE</span>
                <svg className="nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
              </button>
              <div className="nav-dropdown-menu" style={{ width: '310px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  {knowledgeLinks.map((item, idx) => (
                    <li key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <a
                        href={item.href}
                        onClick={closeAllMenus}
                        className="nav-dropdown-link"
                        style={{ display: 'block', padding: '12px 18px', textDecoration: 'none', transition: 'all 0.15s ease' }}
                      >
                        <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{item.title}</div>
                        <div className="nav-sub-text" style={{ fontSize: '11px', color: '#64748B', marginTop: '2px', fontWeight: 500 }}>{item.sub}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Right Action Button (Paving Risers Bold Black Button) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="#contact" onClick={closeAllMenus} style={{ textDecoration: 'none' }}>
              <button
                style={{
                  background: '#0F0F0F',
                  color: '#FFFFFF',
                  border: 'none',
                  height: '46px',
                  padding: '0 26px',
                  fontSize: '11px',
                  fontWeight: 900,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '0px',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#195B34')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#0F0F0F')}
              >
                <span>{t.contactUsBtn || 'REQUEST QUOTE'}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ background: 'none', border: 'none', color: '#0F0F0F', cursor: 'pointer', padding: '4px', display: 'none' }}
              aria-label="Toggle Mobile Menu"
              className="mobile-only-flex"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            </button>
          </div>
        </div>

        {/* Embedded MegaMenu Popdown Overlay */}
        {activeMegaMenu && setActiveMegaMenu && (
          <MegaMenu
            activeMegaMenu={activeMegaMenu}
            setActiveMegaMenu={setActiveMegaMenu}
            lang={lang}
          />
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ background: '#FFFFFF', borderBottom: '3px solid #195B34', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="#about" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            OVERVIEW &amp; OBJECTIVES
          </a>
          <a href="#products" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            SCOPE &amp; MARKET
          </a>
          <a href="#markets" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            SOLUTIONS
          </a>
          <a href="#manufacturing" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            STANDARDS
          </a>
          <a href="#sustainability" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            TESTINGS
          </a>
          <a href="#knowledge" onClick={closeAllMenus} style={{ color: '#195B34', textDecoration: 'none', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase' }}>
            KNOWLEDGE
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
