import React from 'react';
import { Leaf, Recycle, Zap } from 'lucide-react';

export const SustainabilitySection: React.FC = () => {
  return (
    <section id="sustainability" style={{ background: '#FFFFFF', padding: '5.5rem 0', borderBottom: '1px solid #E2DDD5' }}>
      <div className="container-custom">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Side: Factual Metrics */}
          <div style={{ gridColumn: 'span 7' }}>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#B78A4C' }} />
              <span>DECARBONIZED FOUNDRY OPERATIONS</span>
            </div>

            <h2 style={{ fontSize: '2.25rem', color: '#143D2E', fontWeight: 800, margin: '0 0 1.25rem 0', lineHeight: 1.2, textTransform: 'uppercase' }}>
              SUSTAINABLE METALLURGICAL PRODUCTION
            </h2>

            <p style={{ fontSize: '1rem', color: '#4A5550', lineHeight: 1.7, marginBottom: '2rem', fontWeight: 400, maxWidth: '640px' }}>
              ABC Rail operates electric arc and induction melting furnaces powered by 100% recycled structural scrap steel. Combined with closed-loop thermal sand reclamation, our foundries minimize environmental impact without compromising fatigue endurance or AREMA standards.
            </p>

            {/* 3 Factual Sustainability Pillar Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
              <div style={{ background: '#F5F2EB', border: '1px solid #E2DDD5', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#143D2E' }}>
                  <Recycle size={18} color="#B78A4C" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900 }}>98%</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  SAND RECOVERY
                </span>
                <span style={{ fontSize: '11px', color: '#7E8783', marginTop: '2px', display: 'block' }}>
                  Closed-loop thermal silica reclamation
                </span>
              </div>

              <div style={{ background: '#F5F2EB', border: '1px solid #E2DDD5', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#143D2E' }}>
                  <Zap size={18} color="#B78A4C" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900 }}>100%</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  RECYCLED SCRAP
                </span>
                <span style={{ fontSize: '11px', color: '#7E8783', marginTop: '2px', display: 'block' }}>
                  Electric induction furnace feedstock
                </span>
              </div>

              <div style={{ background: '#F5F2EB', border: '1px solid #E2DDD5', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#143D2E' }}>
                  <Leaf size={18} color="#B78A4C" />
                  <strong style={{ fontSize: '1.25rem', fontWeight: 900 }}>ISO 14001</strong>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', display: 'block', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  ENVIRONMENTAL QA
                </span>
                <span style={{ fontSize: '11px', color: '#7E8783', marginTop: '2px', display: 'block' }}>
                  Zero-discharge plant management
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Clean Heavy Rail Trackwork Facility Photo */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="img-hover-zoom" style={{ border: '1px solid #E2DDD5', background: '#F5F2EB' }}>
              <img 
                src="/images/rail_trackwork_mfg.png" 
                alt="ABC Environmental Heavy Rail Metallurgical Foundry" 
                style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
