import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { ArrowRight, Search, ChevronDown, Building2, Layers, ShieldCheck, Compass } from 'lucide-react';

interface HeaderProps {
  onRequestQuoteClick?: () => void;
  onOpenExplorer?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestQuoteClick, onOpenExplorer }) => {
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
      id: 'rail_coach',
      label: 'LHB & BOGIE COMPONENTS',
      icon: Layers,
      columns: [
        {
          title: 'LHB / FIAT GERMAN COACH BOGIE PARTS',
          links: [
            'Control Arm Upper, Lower Right/Left (SG 400/18)',
            'Centering Disc Assembly (DIN 17182 GS-20Mn5V)',
            'Brake Support (GS-20Mn5V)',
            'Set Of Console, Pin & Bump Stop Brackets',
            'Articulation Piece & Axlebox Housing (IS 1030)'
          ]
        },
        {
          title: 'LOCOMOTIVE & FREIGHT CASTINGS',
          links: [
            'Front & Rear Draft Lugs (Grade B & C)',
            'Locomotive Jacking Pad & Coupler Carrier',
            'Bearing Adaptor Plate & Equaliser Spring Seat',
            'Brake Head for Brake Rigging Kit & Fuel Pump Support',
            'Railway Track Plates & Buffer Castings'
          ]
        }
      ]
    },
    {
      id: 'agri_oem',
      label: 'AGRI, OEM & MINING',
      icon: Building2,
      columns: [
        {
          title: 'AGRI INDUSTRY COMPONENTS',
          links: [
            'Rotavator Gearbox 13x23 & 13x25 Casing',
            'Reduction Gear Housing & Combine Harvester Parts',
            'Shackle, Brake Drums, Flywheels & Rotor Housing',
            'Front Linkage Assembly (Top & Bottom)',
            'Other Castings for Rotavators & Farm Equipment'
          ]
        },
        {
          title: 'OEM & MINING INDUSTRY CASTINGS',
          links: [
            '10 Ton Stub Axle & 8 Ton Steering Knuckle',
            'Rotor, Elliptical Pin & Undercarriage Sprockets',
            'Mining Haulages, Winches & Aerial Ropeway Pulleys',
            'Heavy Flanges, Mining Gearboxes & Roof Bolter Parts',
            'Commercial Trailer Suspension Components'
          ]
        }
      ]
    },
    {
      id: 'en_alloys',
      label: 'SPECIALTY EN ALLOYS',
      icon: ShieldCheck,
      columns: [
        {
          title: 'EN-SERIES & ALLOY CASTINGS',
          links: [
            'EN8 & EN9 Carbon Steel Castings',
            'EN15 & EN18 Alloy Steel Castings',
            'EN19 & EN24 High-Tensile Quenched Steel',
            'IS 2708 Standard Steel Castings',
            'High Chrome Castings (27% Cr White Iron)'
          ]
        },
        {
          title: 'SPECIALTY HEAVY INDUSTRY',
          links: [
            'Castings for Stone Crushers (Jaw Plates & Mantles)',
            'Heat Resistant Castings for Industrial Boilers',
            'Architectural & Ornamental Steel Castings',
            '100% Volumetric Ultrasonic NDT & CMM QA',
            'Custom Pattern Design & Induction Melting'
          ]
        }
      ]
    },
    {
      id: 'governance',
      label: 'GRIEVANCE & QA',
      icon: ShieldCheck,
      columns: [
        {
          title: 'WAGON TRACKING & QUALITY',
          links: ['Wagon Search & Status', 'Register Complaint / Grievance', 'Check Grievance Resolution', 'RDSO Quality Feedback']
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
            <div>
              <Logo variant="light" />
            </div>

            {/* Technical Search Bar */}
            <div style={{ flex: 1, maxWidth: '440px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search AREMA specs, CAD models, products..."
                onClick={() => { if (onOpenExplorer) onOpenExplorer(); }}
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
                  fontFamily: "'Manrope', sans-serif",
                  cursor: 'pointer'
                }}
              />
              <Search size={16} color="#6C757D" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

            {/* Action Buttons: Product Explorer + Request Quote CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Product Explorer Nav CTA */}
              <button
                onClick={() => {
                  if (onOpenExplorer) {
                    onOpenExplorer();
                  } else {
                    const el = document.getElementById('explorer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '10px 18px',
                  fontSize: '12.5px',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '6px',
                  background: '#E8F5E9',
                  color: '#1B5E20',
                  border: '1.5px solid #4CAF50',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.color = '#FFF'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#E8F5E9'; e.currentTarget.style.color = '#1B5E20'; }}
              >
                <Compass size={16} />
                <span>PRODUCT EXPLORER</span>
              </button>

              <button
                onClick={onRequestQuoteClick}
                className="btn-animated"
                style={{
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
                  fontFamily: "'Geist', sans-serif"
                }}
              >
                <span>REQUEST QUOTE</span>
                <ArrowRight size={15} color="#FFFFFF" />
              </button>
            </div>

          </div>
        </div>

        {/* Tier 2: Fortune 500 Corporate Industrial Navigation Bar */}
        <div style={{ background: '#4CAF50', borderBottom: '3px solid #388E3C', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}>
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
                        background: isActive ? '#FAF6EE' : 'transparent',
                        border: 'none',
                        color: isActive ? '#1B5E20' : '#FFFFFF',
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
                        borderBottom: isActive ? '3px solid #1B5E20' : '3px solid transparent',
                        fontFamily: "'Geist', sans-serif"
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = '#FAF6EE';
                          e.currentTarget.style.color = '#1B5E20';
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#FFFFFF';
                        }
                      }}
                      onClick={() => setActiveMegaMenu(isActive ? null : cat.id)}
                    >
                      <span>{cat.label}</span>
                      <ChevronDown size={13} style={{ transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: isActive ? '#1B5E20' : '#FFFFFF' }} />
                    </button>
                  </div>
                );
              })}

              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <button
                  onClick={() => {
                    if (onOpenExplorer) {
                      onOpenExplorer();
                    } else {
                      const el = document.getElementById('explorer');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{
                    color: '#FFFFFF',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    padding: '16px 20px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Geist', sans-serif",
                    borderRadius: '2px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
                >
                  <Compass size={14} />
                  <span>SPEC EXPLORER</span>
                </button>

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
                    transition: 'all 0.2s',
                    flexShrink: 0,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'Geist', sans-serif",
                    borderRadius: '2px'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#1B5E20'; e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.background = 'transparent'; }}
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
              borderTop: '3px solid #4CAF50',
              borderBottom: '3px solid #1B5E20',
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
                      <div style={{ fontSize: '13px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.85rem', borderBottom: '1.5px solid #E5E7EB', paddingBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Geist', sans-serif" }}>
                        <span style={{ width: '4px', height: '14px', background: '#4CAF50', display: 'inline-block' }} />
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
                                padding: '2px 6px',
                                borderRadius: '2px',
                                fontFamily: "'Manrope', sans-serif"
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.color = '#1B5E20';
                                e.currentTarget.style.background = '#FAF6EE';
                                e.currentTarget.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.color = '#374151';
                                e.currentTarget.style.background = 'transparent';
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
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27, 94, 32, 0.88), transparent)' }} />
                      <span style={{ position: 'absolute', bottom: '12px', left: '14px', color: '#FFFFFF', fontSize: '11px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: "'Geist', sans-serif" }}>
                        AAR M-1003 CERTIFIED FOUNDRY
                      </span>
                    </div>
                    <div style={{ padding: '1.25rem' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#1B5E20', margin: '0 0 6px 0', fontFamily: "'Geist', sans-serif" }}>
                        North American Heavy Freight &amp; Transit Castings
                      </h4>
                      <p style={{ fontSize: '12.5px', color: '#6C757D', margin: '0 0 14px 0', lineHeight: 1.45, fontFamily: "'Manrope', sans-serif" }}>
                        Engineered to AREMA &amp; AAR M-1003 standards for 36-ton heavy axle load endurance.
                      </p>
                      <a
                        href="#products"
                        onClick={() => setActiveMegaMenu(null)}
                        style={{ color: '#1B5E20', fontSize: '13px', fontWeight: 900, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '2px', transition: 'all 0.2s', fontFamily: "'Geist', sans-serif" }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                      >
                        <span>Access Specification Catalogue</span>
                        <ArrowRight size={14} color="#4CAF50" />
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
