import React from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';

interface EngineeringDrawingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
  productSeries?: string;
  productSpecs?: string;
  productImg?: string;
}

export const EngineeringDrawingModal: React.FC<EngineeringDrawingModalProps> = ({
  isOpen,
  onClose,
  productTitle = 'Jacking Pad for Diesel Locomotives',
  productSeries = 'SERIES 1000',
  productSpecs = 'AAR M-201 Grade E Cast Steel',
  productImg = '/images/bogie_callouts_diagram.png'
}) => {
  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(12, 36, 27, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        fontFamily: "'Geist', sans-serif !important"
      }}
      onClick={onClose}
    >
      <div 
        style={{
          background: '#FFFFFF',
          color: '#1F2937',
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '2px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          borderTop: '4px solid #C5A059',
          position: 'relative'
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{ background: '#143D2E', color: '#F5F2EB', padding: '1.25rem 1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(197, 160, 89, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: '#C5A059', color: '#143D2E', padding: '4px 8px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
              {productSeries}
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 900, margin: 0, textTransform: 'uppercase', color: '#F5F2EB' }}>
              TECHNICAL BLUEPRINT &amp; CAD DRAWING: {productTitle}
            </h3>
          </div>

          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{ background: 'transparent', border: 'none', color: '#A3B5AC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={22} color="#F5F2EB" />
          </button>
        </div>

        {/* Modal Content Grid */}
        <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem' }}>
          
          {/* Left Side: Authentic Engineering Callout Diagram / Drawing */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ background: '#F8F9FA', border: '1.5px solid #D1D5DB', borderRadius: '2px', padding: '1rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: '#143D2E', color: '#C5A059', fontSize: '9px', fontWeight: 900, padding: '3px 8px', letterSpacing: '0.08em' }}>
                APPROVED AREMA CAD DRAWING
              </div>

              <img 
                src={productImg || '/images/bogie_callouts_diagram.png'} 
                alt="Technical CAD Engineering Drawing Blueprint" 
                style={{ width: '100%', height: '360px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
              />

              <div style={{ marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '11px', color: '#4B5563' }}>
                <span>Scale: 1:1 True-to-Cast CAD</span>
                <span style={{ fontWeight: 800, color: '#143D2E' }}>Tolerance: ±0.05mm CMM Verified</span>
              </div>
            </div>
          </div>

          {/* Right Side: Engineering Specs & Drawing Download */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#C5A059', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  SPECIFICATION METALLURGY
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#143D2E', margin: '0 0 6px 0', textTransform: 'uppercase' }}>
                  {productSpecs}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#4B5563', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                  Manufactured via computerized electric induction melting with 100% volumetric ultrasonic NDT flaw scanning per AAR M-1003 rules.
                </p>
              </div>

              {/* Technical Inspection Checkpoints */}
              <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1rem', marginBottom: '1.5rem', borderRadius: '2px' }}>
                <strong style={{ fontSize: '11px', fontWeight: 900, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                  CAD COMPONENT CHECKPOINTS
                </strong>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#1F2937', fontWeight: 600 }}>
                    <CheckCircle2 size={14} color="#10B981" />
                    <span>Sub-Zero Charpy V-Notch Impact: 120 J @ -40°C</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#1F2937', fontWeight: 600 }}>
                    <CheckCircle2 size={14} color="#10B981" />
                    <span>Yield Strength: 680 - 750 MPa (Work-Hardened)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#1F2937', fontWeight: 600 }}>
                    <CheckCircle2 size={14} color="#10B981" />
                    <span>36-Ton Heavy Axle Load (HAL) Certified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href={productImg || '/images/bogie_callouts_diagram.png'} 
                download
                style={{
                  background: '#143D2E',
                  color: '#FFFFFF',
                  padding: '12px 20px',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '2px',
                  boxShadow: '0 4px 14px rgba(20,61,46,0.2)'
                }}
              >
                <Download size={15} color="#C5A059" />
                <span>DOWNLOAD CAD SPEC SHEET (.PDF)</span>
              </a>

              <button
                onClick={onClose}
                style={{
                  background: '#F8F9FA',
                  border: '1px solid #D1D5DB',
                  color: '#1F2937',
                  padding: '10px 20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px'
                }}
              >
                CLOSE DRAWING VIEWER
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default EngineeringDrawingModal;
