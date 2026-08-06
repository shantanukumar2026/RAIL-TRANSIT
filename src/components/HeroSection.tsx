import React from 'react';

interface HeroSectionProps {
  lang?: 'en' | 'es';
  t?: any;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <>
      {/* Split Hero Section */}
      <section className="hero-section" id="about" style={{ background: '#FFFFFF', padding: 0, borderBottom: '1px solid #E5E7EB', margin: 0, width: '100%', scrollMarginTop: '100px' }}>
        <div style={{ width: '100%', margin: 0, display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 0, alignItems: 'stretch' }}>
          
          {/* Left Hero Column */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '36px 48px' }}>
            <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#15803D', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
              | USA FOUNDATIONS. GENERATIONAL STRENGTH.
            </div>

            <h1 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', fontWeight: 900, color: '#195B34', lineHeight: 1.08, textTransform: 'uppercase', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              ENGINEERING<br />
              HIGH-RELIABILITY<br />
              <span style={{ color: '#195B34' }}>RAIL &amp; TRANSIT</span><br />
              CASTINGS &amp; FORGINGS
            </h1>

            <p style={{ color: '#334155', fontSize: '14.5px', lineHeight: 1.5, marginBottom: '20px', maxWidth: '540px' }}>
              Global manufacturing excellence in heavy rail castings, precision drop forgings, turnout trackwork components, and rolling stock wheelsets. Engineered to AREMA, AAR, and FRA heavy axle load standards.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <a
                href="#products"
                style={{
                  background: '#195B34',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '0px',
                  fontWeight: 800,
                  fontSize: '12.5px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 12px rgba(25, 91, 52, 0.25)',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>
                <span>EXPLORE RAIL PRODUCT SCOPE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a
                href="#about"
                style={{
                  background: '#FFFFFF',
                  border: '1.5px solid #195B34',
                  color: '#195B34',
                  padding: '12px 20px',
                  borderRadius: '0px',
                  fontWeight: 800,
                  fontSize: '12.5px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ background: '#195B34', color: '#FFFFFF', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <span>WATCH FOUNDRY OPERATIONS</span>
              </a>
            </div>

            {/* Badges Strip */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: '#195B34', letterSpacing: '0.05em' }}>AREMA</span>
                <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#15803D', letterSpacing: '0.1em' }}>MEMBER</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: '#195B34', letterSpacing: '0.05em' }}>AAR</span>
                <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#15803D', letterSpacing: '0.1em' }}>ASSOCIATE MEMBER</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: '#195B34', letterSpacing: '0.05em' }}>FRA</span>
                <span style={{ fontSize: '8.5px', fontWeight: 800, color: '#15803D', letterSpacing: '0.1em' }}>COMPLIANT</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid #A7F3D0', padding: '4px 10px', background: '#ECFDF5' }}>
                <span style={{ fontSize: '13px' }}>🇺🇸</span>
                <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#195B34', letterSpacing: '0.08em' }}>MADE IN USA</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Large Featured Component & Overlay */}
          <div style={{ position: 'relative', minHeight: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
            <video
              src="/videos/foundry_live.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />

            {/* Dark Feature Overlay Bar at Bottom */}
            <div style={{
              position: 'relative',
              zIndex: 10,
              background: 'rgba(15, 41, 30, 0.94)',
              backdropFilter: 'blur(8px)',
              borderTop: '3px solid #195B34',
              padding: '20px 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              color: '#FFFFFF'
            }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 11 13 15 9"/></svg>
                <div>
                  <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', color: '#FFFFFF' }}>BUILT FOR HEAVY AXLE LOADS</strong>
                  <span style={{ fontSize: '10.5px', color: '#A7F3D0' }}>36-Ton Heavy Axle Rating</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                <div>
                  <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', color: '#FFFFFF' }}>AUSTENITIC MANGANESE STEEL</strong>
                  <span style={{ fontSize: '10.5px', color: '#A7F3D0' }}>11-14% Work-Hardening Alloy</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                <div>
                  <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', color: '#FFFFFF' }}>FATIGUE RESISTANT FORGINGS</strong>
                  <span style={{ fontSize: '10.5px', color: '#A7F3D0' }}>Sub-Zero Impact Endurance</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2.5"><path d="M14.7 6.3a1 1 0 0 1 0 1.4l1.6 1.6a1 1 0 0 1 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                <div>
                  <strong style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', color: '#FFFFFF' }}>5-AXIS CNC PRECISION</strong>
                  <span style={{ fontSize: '10.5px', color: '#A7F3D0' }}>0.05mm Machining Tolerances</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Responsive Feature Columns Strip Below Hero */}
      <section style={{ background: '#F8FAFC', borderBottom: '2px solid #195B34', padding: '28px 4vw', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>HEAVY DUTY FORGINGS</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>Engineered for Class I freight tracks</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>FATIGUE RESISTANT ALLOYS</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>Ductile iron, forged carbon &amp; alloy steel</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="0"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>AREMA TRACKWORK SPECS</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>Turnout frogs, switch points &amp; tie plates</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>AAR M-1003 QA CERTIFIED</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>100% Volumetric Ultrasonic NDT scanning</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><line x1="12" y1="12" x2="12" y2="8"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>EXTENDED SERVICE LIFE</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>High-density grain structure for long life</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderLeft: '1px solid #E2E8F0', paddingLeft: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <div>
              <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', color: '#195B34' }}>TRANSIT &amp; FREIGHT APPLICATIONS</strong>
              <span style={{ fontSize: '11px', color: '#15803D', lineHeight: 1.4, display: 'block', marginTop: '2px' }}>Class I freight, high-speed &amp; metro rail</span>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCT RANGE Section */}
      <section style={{ background: '#FFFFFF', padding: '54px 4vw', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ color: '#195B34', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              OUR PRODUCT RANGE
            </span>
            <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#0F291E', letterSpacing: '-0.02em', margin: '0 0 8px 0' }}>
              Built for Performance. Designed for Reliability.
            </h2>
            <p style={{ color: '#15803D', fontSize: '14.5px', margin: 0, maxWidth: '640px' }}>
              Complete rail trackwork castings, drop forgings, and catenary hardware designed to support heavy freight axle loads and protect critical rail transit infrastructure.
            </p>
          </div>

          {/* 4 Product Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              {
                title: 'Trackside & Turnout Castings',
                series: '1000-3000 Series',
                desc: 'Heavy-duty manganese turnout frogs, tie plates, and insulated rail joints.',
                img: '/images/rail_infrastructure_casting.png'
              },
              {
                title: 'Rolling Stock Forgings',
                series: '4000-6000 Series',
                desc: 'Forged carbon & alloy steel axles, monobloc wheels, and bogie side frames.',
                img: '/images/rail_forged_axles_2.png'
              },
              {
                title: 'Couplers & Draft Gear',
                series: '7000-8000 Series',
                desc: 'AAR M-201 Grade E cast steel knuckles, Yoke assemblies, and striker castings.',
                img: '/images/rail_forging_press.png'
              },
              {
                title: 'Catenary & Sub-Track Hardware',
                series: '9000-12000 Series',
                desc: 'Copper-bronze cantilever catenary hardware, trench grates, and pull boxes.',
                img: '/images/rail_catenary_hardware.png'
              }
            ].map((card, idx) => (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '0px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={card.img}
                    alt={card.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#195B34', color: '#A7F3D0', padding: '4px 8px', fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {card.series}
                  </div>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0F291E', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '12.5px', color: '#15803D', lineHeight: 1.4, margin: '0 0 16px 0' }}>
                      {card.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#195B34', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      EXPLORE SERIES
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#195B34" strokeWidth="2.5">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
