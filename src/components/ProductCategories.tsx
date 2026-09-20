import React from 'react';
import { ArrowRight, ShieldCheck, Train, Layers, Anchor, Flame } from 'lucide-react';

export const ProductCategories: React.FC = () => {
  const categories = [
    {
      id: 'lhb',
      icon: Train,
      title: 'GERMAN LHB / FIAT COACH BOGIE COMPONENTS',
      desc: 'Control Arm Upper/Lower (SG 400/18), Centering Disc (DIN 17182 GS-20Mn5V), Brake Support, Consoles, Articulation Pieces & Axlebox Housings (IS 1030).',
      img: '/images/locomotive_wheelset_stock.jpg',
      specs: 'DIN / EN / ISO STANDARDS',
      tag: 'GERMAN HIGH-SPEED COACH'
    },
    {
      id: 'agri',
      icon: Layers,
      title: 'AGRICULTURAL INDUSTRY & ROTAVATOR CASTINGS',
      desc: 'Rotavator Gearbox 13x23 & 13x25, Combine Harvester Castings, Reduction Gear Housings, Shackles, Brake Drums, Flywheels & 3-Point Front Linkages.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
      specs: 'SG 500/7 & FG 260 CASTINGS',
      tag: 'AGRI MACHINERY OEM'
    },
    {
      id: 'oem_mining',
      icon: Anchor,
      title: 'OEM STUB AXLES & MINING HAULAGES',
      desc: '10 Ton Stub Axles, 8 Ton Steering Knuckles, Undercarriage Sprockets, Mining Haulage Drums, Heavy Winches, Flanged Ropeway Pulleys & Roof Bolters.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
      specs: 'ASTM A27 / AISI 4140 FORGED',
      tag: 'OEM & MINING SYSTEMS'
    },
    {
      id: 'en_alloys',
      icon: Flame,
      title: 'EN-SERIES ALLOYS & HIGH CHROME CASTINGS',
      desc: 'EN8, EN9, EN15, EN18, EN19, EN24 & IS 2708 Steel Castings. 27% High Chrome Crusher Jaw Plates, Mantles & Heat Resistant Boiler Grate Castings.',
      img: '/images/real_metal_casting_stock.jpg',
      specs: 'BS EN 10083 & ASTM A532',
      tag: 'SPECIALTY STEEL ALLOYS'
    }
  ];

  return (
    <section className="section-full-vh" style={{ background: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#4CAF50' }}>RDSO, AREMA &amp; AAR M-1003 APPROVED DIVISIONS</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              ENTERPRISE PRODUCT DIVISIONS &amp; WAGON SYSTEMS
            </h2>
          </div>

          <a 
            href="#products" 
            className="link-hover-arrow"
          >
            <span>EXPLORE ALL DIVISIONS &amp; PRODUCTS</span>
            <ArrowRight size={14} color="#4CAF50" />
          </a>
        </div>

        {/* 4 Enterprise Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
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
                {/* Product Photo & Badge */}
                <div style={{ height: '200px', overflow: 'hidden', background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                  <img 
                    src={cat.img} 
                    alt={cat.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#1B5E20', color: '#FAF6EE', fontSize: '9px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #4CAF50', fontFamily: "'Manrope', sans-serif !important" }}>
                    {cat.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                      <Icon size={16} color="#4CAF50" />
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#4CAF50', letterSpacing: '0.06em', fontFamily: "'Manrope', sans-serif !important" }}>
                        {cat.specs}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#111827', letterSpacing: '0.04em', margin: '0 0 8px 0', textTransform: 'uppercase', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                      {cat.title}
                    </h3>
                    <p style={{ fontSize: '11.5px', color: '#2E7D32', lineHeight: 1.45, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {cat.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ShieldCheck size={13} color="#4CAF50" />
                      <span style={{ fontSize: '9.5px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>CERTIFIED SPEC</span>
                    </div>
                    
                    <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#F8F9FA', border: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowRight size={12} color="#1B5E20" />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductCategories;

