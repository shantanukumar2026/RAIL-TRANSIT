import React from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, TrainTrack } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onRequestQuoteClick?: () => void;
  onWatchVideoClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onRequestQuoteClick }) => {
  return (
    <section 
      style={{ 
        background: '#143D2E', 
        color: '#F5F2EB', 
        padding: '4rem 0 0 0',
        borderBottom: '2px solid #C5A059',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Blueprint Grid & Industrial Shape Overlay */}
      <div className="blueprint-grid-dark" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div className="section-shape-accent" style={{ top: '-50px', left: '-50px' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column (6 Cols): Content */}
          <div style={{ gridColumn: 'span 6' }}>
            
            {/* Eyebrow Label */}
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem', letterSpacing: '0.2em' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#C5A059' }} />
              <span>U.S. RAIL &amp; TRANSIT MANUFACTURING</span>
            </div>

            {/* Swiss Headline in Geist Font */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', 
                fontWeight: 900, 
                lineHeight: 1.05, 
                color: '#F5F2EB', 
                letterSpacing: '-0.025em', 
                margin: '0 0 1.25rem 0',
                textTransform: 'uppercase',
                fontFamily: "'Geist', sans-serif !important"
              }}
            >
              BUILT TO MOVE<br />
              <span style={{ color: '#F5F2EB', position: 'relative', display: 'inline-block' }}>
                THE WORLD
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '3.5px', background: '#C5A059' }} />
              </span>
            </h1>

            {/* Subheadline in Manrope Font */}
            <p 
              style={{ 
                fontSize: '1.05rem', 
                color: '#A3B5AC', 
                lineHeight: 1.6, 
                margin: '0 0 2rem 0',
                fontWeight: 500,
                maxWidth: '560px',
                fontFamily: "'Manrope', sans-serif !important"
              }}
            >
              Precision-engineered castings and forgings for rail and transit applications. Turnout frogs, forged axles, bogies, and catenary hardware built for strength and made to last.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              <a
                href="#capabilities"
                onClick={onExploreClick}
                className="btn-animated"
                style={{
                  background: '#1C4735',
                  color: '#FFFFFF',
                  border: '1.5px solid #C5A059',
                  padding: '14px 30px',
                  fontSize: '12.5px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '2px',
                  boxShadow: '0 10px 25px rgba(12, 36, 27, 0.5)',
                  fontFamily: "'Geist', sans-serif !important"
                }}
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowRight size={15} color="#C5A059" />
              </a>

              <button
                onClick={onRequestQuoteClick}
                className="btn-animated"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(245, 242, 235, 0.3)',
                  color: '#F5F2EB',
                  padding: '14px 26px',
                  fontSize: '12.5px',
                  fontWeight: 900,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '2px',
                  fontFamily: "'Geist', sans-serif !important"
                }}
              >
                <span>REQUEST QUOTE</span>
              </button>
            </div>

            {/* Quality Compliance Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} color="#C5A059" />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#F5F2EB', letterSpacing: '0.05em', fontFamily: "'Geist', sans-serif !important" }}>AREMA CHAPTER 4</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} color="#C5A059" />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#F5F2EB', letterSpacing: '0.05em', fontFamily: "'Geist', sans-serif !important" }}>AAR M-1003 QA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={14} color="#C5A059" />
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#F5F2EB', letterSpacing: '0.05em', fontFamily: "'Geist', sans-serif !important" }}>FRA RULE 213</span>
              </div>
            </div>

          </div>

          {/* Right Column (6 Cols): Framed Video Player */}
          <div style={{ gridColumn: 'span 6' }}>
            <div 
              style={{ 
                position: 'relative', 
                borderRadius: '2px', 
                overflow: 'hidden', 
                border: '1px solid #C5A059',
                background: '#0C241B',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.45)',
                height: '370px'
              }}
            >
              <video 
                src="/videos/foundry_live.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem', background: 'rgba(12, 36, 27, 0.92)', padding: '10px 16px', borderLeft: '3px solid #C5A059', backdropFilter: 'blur(8px)' }}>
                <strong style={{ fontSize: '11.5px', fontWeight: 800, color: '#F5F2EB', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>
                  FOUNDRY &amp; FORGING OPERATIONS
                </strong>
                <span style={{ fontSize: '10.5px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>
                  Electric induction melting &amp; 5-axis CNC machining
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Embedded 4-Metric Technical Bar */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          background: '#0C241B', 
          borderTop: '1px solid rgba(197, 160, 89, 0.3)', 
          padding: '1.25rem 0',
          marginTop: '3rem'
        }}
      >
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <TrainTrack size={20} color="#C5A059" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 800, color: '#F5F2EB', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>NORTH AMERICAN FOUNDRY</strong>
                <span style={{ fontSize: '11px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>Heavy rail manufacturing leader</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.5rem' }}>
              <ShieldCheck size={20} color="#C5A059" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 800, color: '#F5F2EB', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>36-TON HAL RATING</strong>
                <span style={{ fontSize: '11px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>Heavy freight axle load endurance</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.5rem' }}>
              <Zap size={20} color="#C5A059" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 800, color: '#F5F2EB', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>±0.05MM CNC TOLERANCE</strong>
                <span style={{ fontSize: '11px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>Robotic 5-axis heavy machining</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.1)', paddingLeft: '1.5rem' }}>
              <ShieldCheck size={20} color="#C5A059" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 800, color: '#F5F2EB', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>100% VOLUMETRIC NDT</strong>
                <span style={{ fontSize: '11px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>Ultrasonic &amp; magnetic flaw scan</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
