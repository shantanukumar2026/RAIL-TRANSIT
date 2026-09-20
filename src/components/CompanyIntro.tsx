import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const CompanyIntro: React.FC = () => {
  return (
    <section id="company-overview" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', overflow: 'hidden' }}>
      {/* Blueprint Grid Pattern Overlay */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
      <div className="section-shape-accent" style={{ top: '10%', right: '5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Side: Storytelling & Why Choose Us */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="eyebrow" style={{ letterSpacing: '0.2em', marginBottom: '1rem', fontFamily: "'Geist', sans-serif !important" }}>
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>THE MANUFACTURING HERITAGE</span>
            </div>

            {/* High-Impact Uppercase Swiss Industrial Heading */}
            <h2 
              style={{ 
                fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)', 
                color: '#1B5E20', 
                fontWeight: 900, 
                lineHeight: 1.06, 
                marginBottom: '1.5rem', 
                letterSpacing: '-0.025em', 
                textTransform: 'uppercase',
                fontFamily: "'Geist', sans-serif !important" 
              }}
            >
              HEAVY RAIL &amp; METALLURGICAL<br />
              <span style={{ color: '#1B5E20', position: 'relative', display: 'inline-block' }}>
                ENGINEERING EXCELLENCE
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '4px', background: '#4CAF50' }} />
              </span>
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#4B5563', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '640px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Westpoint Group Companies specializes in electric induction cast manganese turnout trackwork, heavy drop forged locomotive axles, and precision bogie components. Serving Class I freight railroads, high-speed corridors, and urban transit authorities globally with uncompromised quality assurance.
            </p>

            {/* Why Choose Westpoint Group Companies - 4 Story Pillars */}
            <div style={{ marginBottom: '2.25rem', padding: '1.25rem', background: '#FFFFFF', border: '1px solid #E5E7EB', borderLeft: '4px solid #4CAF50', borderRadius: '2px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <strong style={{ fontSize: '12.5px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem', fontFamily: "'Geist', sans-serif !important" }}>
                WHY CLASS I RAILROADS PARTNER WITH WESTPOINT
              </strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Geist', sans-serif !important" }}>RDSO Approved Class A Foundry</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Geist', sans-serif !important" }}>100% Volumetric Ultrasonic NDT</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Geist', sans-serif !important" }}>36-Ton Axle Load Rating</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={15} color="#4CAF50" />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B5E20', fontFamily: "'Geist', sans-serif !important" }}>AREMA Ch. 4 &amp; AAR M-1003</span>
                </div>
              </div>
            </div>

            <a 
              href="#capabilities" 
              className="link-hover-arrow"
            >
              <span>DISCOVER OUR MANUFACTURING FOOTPRINT</span>
              <ArrowRight size={15} color="#4CAF50" />
            </a>
          </div>

          {/* Right Side: Heavy Machined Axlebox Housing Photo */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="img-hover-zoom" style={{ border: '1px solid #E5E7EB', background: '#FFFFFF', boxShadow: '0 20px 45px rgba(27, 94, 32, 0.12)', borderRadius: '2px', position: 'relative' }}>
              
              {/* Badge overlay */}
              <div style={{ position: 'absolute', top: '14px', right: '14px', zIndex: 20, background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 10px', border: '1px solid #4CAF50', letterSpacing: '0.1em', fontFamily: "'Geist', sans-serif !important" }}>
                AAR M-1003 QA
              </div>

              {/* Dynamic Image */}
              <div style={{ height: '440px', overflow: 'hidden', position: 'relative', background: '#F8F9FA' }}>
                <img 
                  src="/images/istockphoto-1196704251-2048x2048.jpg" 
                  alt="FINISH MACHINED AXLEBOX HOUSING" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Image Footer Details */}
              <div style={{ padding: '1.25rem', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <strong style={{ fontSize: '12px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>
                    FINISH MACHINED AXLEBOX HOUSING
                  </strong>
                  <span style={{ fontSize: '11px', color: '#6C757D', fontFamily: "'Manrope', sans-serif !important" }}>
                    Forged Carbon Steel ASTM A668 • 5-Axis CNC Finished
                  </span>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={16} color="#4CAF50" />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#4CAF50', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>PASSED NDT</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
