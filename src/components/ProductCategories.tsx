import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  const categories = [
    {
      title: 'LOCOMOTIVE BOGIE & AXLEBOX ASSEMBLIES',
      desc: 'Finish Machined Axlebox Housings, Bearing Adaptors, Backing Rings & Side Bearing Cages.',
      img: '/images/bogie_assembly_cad.png',
      specs: 'AAR M-201 & ASTM A668'
    },
    {
      title: 'BRAKE BEAM HEAD & STRUT SYSTEMS',
      desc: 'Precision Brake Heads for Locomotives, Brake Struts, Friction Wedges & Brake Beam Assemblies.',
      img: '/images/smart_freight_bogie.png',
      specs: 'AREMA Ch. 4 Heavy Duty'
    },
    {
      title: 'HEAVY FREIGHT TRACK & ROTAVATOR CASTINGS',
      desc: 'Jacking Pads, Cast Steel Flanges, 500kg Drums, Pin Brackets & Machined Rotavator Gearboxes.',
      img: '/images/bogie_callouts_diagram.png',
      specs: '36-Ton HAL Endurance'
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#C5A059' }} />
              <span>AREMA &amp; AAR M-1003 CERTIFIED DIVISIONS</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#143D2E', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
              OUR PRODUCT CATEGORIES &amp; CAD ASSEMBLIES
            </h2>
          </div>

          <a 
            href="#products" 
            className="link-hover-arrow"
          >
            <span>VIEW ALL 15 COMPONENTS</span>
            <ArrowRight size={14} color="#C5A059" />
          </a>
        </div>

        {/* 3 High-Impact Real CAD Showcase Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E5E7EB', 
                borderRadius: '2px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                overflow: 'hidden'
              }}
            >
              {/* Product CAD Photo */}
              <div style={{ height: '240px', overflow: 'hidden', background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                <img 
                  src={cat.img} 
                  alt={cat.title} 
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                />
                <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#143D2E', color: '#C5A059', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #C5A059', fontFamily: "'Geist', sans-serif !important" }}>
                  {cat.specs}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#143D2E', letterSpacing: '0.04em', margin: '0 0 8px 0', textTransform: 'uppercase', lineHeight: 1.35, fontFamily: "'Geist', sans-serif !important" }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                    {cat.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <ShieldCheck size={14} color="#C5A059" />
                    <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#143D2E', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>PRECISION FORGED</span>
                  </div>
                  
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#F8F9FA', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ArrowRight size={13} color="#143D2E" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;
