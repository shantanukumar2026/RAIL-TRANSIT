import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface CtaBannerProps {
  onRequestQuoteClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestQuoteClick }) => {
  return (
    <section style={{ position: 'relative', background: '#143D2E', color: '#F5F2EB', padding: '5rem 0', overflow: 'hidden', borderBottom: '2px solid #C5A059' }}>
      {/* Background Photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <img 
          src="/images/istockphoto-1196704251-2048x2048.jpg" 
          alt="Factory Assembly Facility" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(12, 36, 27, 0.96) 0%, rgba(20, 61, 46, 0.88) 100%)' }} />
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          
          <div style={{ maxWidth: '680px' }}>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#C5A059' }} />
              <span>ENGINEERING CONSULTATION &amp; QUOTATIONS</span>
            </div>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#F5F2EB', fontWeight: 900, lineHeight: 1.15, margin: '0 0 1rem 0', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
              READY TO DISCUSS YOUR COMPONENT SPECIFICATIONS?
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#A3B5AC', lineHeight: 1.6, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Our metallurgical engineering team provides technical consultations, custom CAD reviews, AAR M-1003 compliance verification, and project quotation estimates within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <button
              onClick={onRequestQuoteClick}
              className="btn-animated"
              style={{
                background: '#1C4735',
                color: '#FFFFFF',
                border: '1.5px solid #C5A059',
                padding: '16px 32px',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '2px',
                boxShadow: '0 10px 25px rgba(12, 36, 27, 0.5)',
                fontFamily: "'Geist', sans-serif !important"
              }}
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight size={15} color="#C5A059" />
            </button>

            <a
              href="mailto:dispatch@abcfoundries.com"
              className="btn-animated"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(245, 242, 235, 0.3)',
                color: '#F5F2EB',
                padding: '15px 28px',
                fontSize: '13px',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '2px',
                fontFamily: "'Geist', sans-serif !important"
              }}
            >
              <Mail size={15} color="#C5A059" />
              <span>CONTACT SALES</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
