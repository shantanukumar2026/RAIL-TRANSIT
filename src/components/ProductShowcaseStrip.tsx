import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductShowcaseStripProps {
  onOpenProductDetail?: (productTitle: string) => void;
}

export const ProductShowcaseStrip: React.FC<ProductShowcaseStripProps> = ({ onOpenProductDetail }) => {
  const parts = [
    {
      title: 'JACKING PAD',
      fullTitle: 'Jacking Pad for Diesel Locomotives',
      img: '/images/amsted_jacking_pad.jpg',
      specs: 'AAR M-201 Grade E'
    },
    {
      title: 'BRAKE HEAD',
      fullTitle: 'Brake Head for Locomotives',
      img: '/images/amsted_brake_head.jpg',
      specs: 'ASTM A536 Ductile Iron'
    },
    {
      title: 'AXLEBOX HOUSING',
      fullTitle: 'Finish Machined Axlebox Housing',
      img: '/images/amsted_bogie_axlebox.jpg',
      specs: 'Forged Carbon Steel'
    },
    {
      title: 'CENTERING DISC',
      fullTitle: 'Finish Machined Centering Disc',
      img: '/images/amsted_centering_disc.jpg',
      specs: 'Precision CNC Machined'
    },
    {
      title: 'RAILWAY TRACK PLATE',
      fullTitle: 'Railway Track Plates',
      img: '/images/amsted_track_plate.jpg',
      specs: 'AREMA Ch. 4 Manganese'
    },
    {
      title: 'ROTAVATOR GEARBOX',
      fullTitle: 'Rotavator Gearbox Casting 13 X 23',
      img: '/images/amsted_rotavator_gearbox.jpg',
      specs: 'Electric Arc Cast Steel'
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#FAF6EE', borderBottom: '1px solid #E5E7EB', padding: '3.5rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background Blueprint Grid & Radial Glow Accents */}
      <div className="blueprint-grid" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
      <div className="section-shape-gold" style={{ top: '-10%', right: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Title */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
            <span style={{ color: '#4CAF50' }}>PRECISION METAL CASTINGS &amp; FORGINGS</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
            CRITICAL RAIL &amp; INDUSTRIAL COMPONENTS
          </h2>
        </div>

        {/* 6 Isolated Product Cards Grid (100% Component Stock Photos Fitted) */}
        <div className="grid-responsive-6">
          {parts.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onOpenProductDetail && onOpenProductDetail(item.fullTitle || item.title)}
              className="card-hover-industrial img-hover-zoom"
              style={{
                background: '#FFFFFF',
                border: '1px solid #D1D5DB',
                padding: '1.25rem 1rem',
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '260px',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(0,0,0,0.04)'
              }}
            >
              {/* Product Photo - Perfect Cover/Contain Fit */}
              <div style={{ height: '130px', overflow: 'hidden', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid #F1F3F5', padding: '4px' }}>
                <img 
                  src={item.img} 
                  alt={item.fullTitle} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Product Label & Arrow */}
              <div>
                <h3 style={{ fontSize: '11px', fontWeight: 900, color: '#111827', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.title}
                </h3>
                <span style={{ fontSize: '9.5px', color: '#4CAF50', fontWeight: 800, display: 'block', marginBottom: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
                  {item.specs}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <ArrowRight size={14} color="#1B5E20" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductShowcaseStrip;
