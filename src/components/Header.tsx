import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowRight, Search, ChevronDown, Building2, Layers, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onRequestQuoteClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories = [
    {
      id: 'solutions',
      label: 'SOLUTIONS & DIVISIONS',
      icon: Layers,
      columns: [
        {
          title: 'RAIL & TRANSIT SECTORS',
          links: ['Class I Freight Railways', 'Urban Rapid Transit & Metro', 'High-Speed Rail Corridors', 'Mining & Industrial Freight']
        },
        {
          title: 'SPECIALIZED ENGINEERING',
          links: ['Custom Trackwork Turnout Sets', 'Heavy Axle Load (HAL) Wheelsets', 'Under-Carriage Bogie Assemblies', 'Overhead Catenary Electrification']
        }
      ]
    },
    {
      id: 'products',
      label: 'PRODUCTS & CATALOG',
      icon: Building2,
      columns: [
        {
          title: 'TRACKWORK & INFRASTRUCTURE',
          links: ['Austenitic Manganese Turnout Frogs', 'Heavy Freight Track Plates', 'Switch Point Assemblies', 'Guard Rail Clamps & Fasteners']
        },
        {
          title: 'LOCOMOTIVE & ROLLING STOCK',
          links: ['Forged Locomotive Steel Axles', 'Machined Axlebox Housings', 'Locomotive Jacking Pads', 'Center Disc Bearings']
        }
      ]
    },
    {
      id: 'manufacturing',
      label: 'MANUFACTURING & QA',
      icon: ShieldCheck,
      columns: [
        {
          title: 'PRIMARY FOUNDRY & FORGE',
          links: ['Computerized Electric Induction Melting', '36-Ton Heavy Drop Forging Press', 'Robotic 5-Axis CNC Milling', 'Trackwork & Bogie Assembly']
        },
        {
          title: 'QUALITY ASSURANCE',
          links: ['100% Volumetric Ultrasonic NDT', 'Magnetic Particle Flaw Scan', 'Sub-Zero Impact Endurance QA', 'Mechanical Yield Testing']
        }
      ]
    },
    {
      id: 'governance',
      label: 'CORPORATE GOVERNANCE',
      icon: ShieldCheck,
      columns: [
        {
          title: 'QUALITY & STANDARDS',
          links: ['AREMA Chapter 4 Standards', 'AAR M-1003 QA Certification', 'FRA Rule 213 Track Compliance', 'ASTM A27 & A536 Steel Alloys']
        },
        {
          title: 'AUTHORITIES & APPROVALS',
          links: ['Federal Railroad Admin (FRA)', 'Amtrak Approved Manufacturer', 'BNSF & Union Pacific Qualified', 'Metra Transit Agency Spec']
        }
      ]
    }
  ];

  return (
    <>
      <header 
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          background: '#FFFFFF',
          boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          fontFamily: "'Geist', sans-serif"
        }}
        onMouseLeave={() => setActiveMegaMenu(null)}
      >

        {/* Tier 1: Middle Corporate Branding Bar */}
        <div style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB', padding: '14px 0' }}>
          <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            
            {/* Corporate Division Emblem */}
            <Logo variant="light" />

            {/* Technical Search Bar */}
            <div style={{ flex: 1, maxWidth: '440px', position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search AREMA specs, CAD models, products..."
                style={{
                  width: '100%',
                  padding: '10px 40px 10px 16px',
                  fontSize: '13px',
                  fontWeight: 500,
                  background: '#F8F9FA',
                  border: '1px solid #E5E7EB',
                  borderRadius: '2px',
                  outline: 'none',
                  color: '#1F2937',
                  fontFamily: "'Manrope', sans-serif"
                }}
              />
              <Search size={16} color="#6C757D" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            {/* Animated Request Quote CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={onRequestQuoteClick}
                className="btn-animated"
                style={{
                  background: '#143D2E',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 26px',
                  fontSize: '13px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '2px',
                  boxShadow: '0 4px 14px rgba(20, 61, 46, 0.18)',
                  fontFamily: "'Geist', sans-serif"
                }}
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight size={15} color="#C5A059" />
              </button>
            </div>

          </div>
        </div>

        {/* Tier 2: Fortune 500 Corporate Industrial Navigation Bar */}
        <div style={{ background: '#143D2E', borderBottom: '3px solid #C5A059', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)' }}>
          <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            
            <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none', width: '100%' }}>
              {navCategories.map((cat) => {
                const isActive = activeMegaMenu === cat.id;
                return (
                  <div 
                    key={cat.id}
                    onMouseEnter={() => setActiveMegaMenu(cat.id)}
                    style={{ position: 'relative', flexShrink: 0, borderRight: '1px solid rgba(255, 255, 255, 0.08)' }}
                  >
                    <button
                      style={{
                        background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                        border: 'none',
                        color: isActive ? '#C5A059' : '#FFFFFF',
                        fontSize: '13px',
                        fontWeight: 900,
                        letterSpacing: '0.06em',
                        padding: '16px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7px',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s ease',
                        borderBottom: isActive ? '3px solid #C5A059' : '3px solid transparent',
                        fontFamily: "'Geist', sans-serif"
                      }}
                      onClick={() => setActiveMegaMenu(isActive ? null : cat.id)}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={13} style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#C5A059' }} />
                    </button>
                  </div>
                );
              })}

              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a 
                  href="#downloads" 
                  style={{ 
                    color: '#FFFFFF', 
                    textDecoration: 'none', 
                    fontSize: '13px', 
                    fontWeight: 900, 
                    letterSpacing: '0.06em', 
                    padding: '16px 20px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Geist', sans-serif"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C5A059'}
                  onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}
                >
                  <span>TECHNICAL LIBRARY</span>
                </a>
              </div>
            </nav>

          </div>
        </div>

        {/* High-Impact Corporate Mega Menu Overlay Panel Attached Directly to Header Bottom */}
        {activeMegaMenu && (
          <div 
            className="megamenu-panel"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: '#FFFFFF',
              color: '#1F2937',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2)',
              borderTop: '3px solid #C5A059',
              borderBottom: '3px solid #143D2E',
              zIndex: 999,
              fontFamily: "'Manrope', sans-serif"
            }}
          >
            <div className="container-custom" style={{ padding: '2.5rem 2rem 1.75rem 2rem' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
                
                {/* Categorized Multi-Column Content */}
                <div style={{ gridColumn: 'span 8', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                  {navCategories.find(m => m.id === activeMegaMenu)?.columns.map((col, idx) => (
                    <div key={idx}>
                      <div style={{ fontSize: '13px', fontWeight: 900, color: '#143D2E', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1.5px solid #E5E7EB', paddingBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Geist', sans-serif" }}>
                        <span style={{ width: '4px', height: '14px', background: '#C5A059', display: 'inline-block' }} />
                        <span>{col.title}</span>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                        {col.links.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a 
                              href="#products" 
                              onClick={() => setActiveMegaMenu(null)}
                              style={{ 
                                color: '#374151', 
                                textDecoration: 'none', 
                                fontSize: '13.5px', 
                                fontWeight: 600,
                                display: 'inline-block',
                                transition: 'all 0.2s',
                                fontFamily: "'Manrope', sans-serif"
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = '#143D2E';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = '#374151';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Featured Division Right Panel */}
                <div style={{ gridColumn: 'span 4' }}>
                  <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ position: 'relative', height: '160px', overflow: 'hidden' }}>
                      <img 
                        src="/images/real_metal_casting_stock.jpg" 
                        alt="Rail & Transit Manufacturing" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20, 61, 46, 0.88), transparent)' }} />
                      <span style={{ position: 'absolute', bottom: '12px', left: '14px', color: '#FFFFFF', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: "'Geist', sans-serif" }}>
                        AAR M-1003 CERTIFIED FOUNDRY
                      </span>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#143D2E', margin: '0 0 6px 0', fontFamily: "'Geist', sans-serif" }}>
                        North American Heavy Freight &amp; Transit Castings
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#6C757D', margin: '0 0 14px 0', lineHeight: 1.45, fontFamily: "'Manrope', sans-serif" }}>
                        Engineered to AREMA &amp; AAR M-1003 standards for 36-ton heavy axle load endurance.
                      </p>
                      <a 
                        href="#products" 
                        onClick={() => setActiveMegaMenu(null)}
                        style={{ color: '#143D2E', fontSize: '13px', fontWeight: 900, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: "'Geist', sans-serif" }}
                      >
                        <span>Access Specification Catalogue</span>
                        <ArrowRight size={14} color="#C5A059" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}
      </header>

      {/* High-Impact Blur Backdrop Overlay when Mega Menu is Open */}
      {activeMegaMenu && (
        <div 
          className="megamenu-backdrop"
          style={{ top: '100%' }}
          onClick={() => setActiveMegaMenu(null)}
        />
      )}
    </>
  );
};

export default Header;
