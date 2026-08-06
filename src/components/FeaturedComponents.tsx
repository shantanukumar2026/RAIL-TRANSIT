import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check, FileText } from 'lucide-react';
import EngineeringDrawingModal from './EngineeringDrawingModal';

export const FeaturedComponents: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProduct, setSelectedProduct] = useState<{
    title: string;
    series: string;
    specs: string;
    img: string;
  } | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const components = [
    {
      title: 'Jacking Pad for Diesel Locomotives',
      series: 'SERIES 1000',
      specs: 'AAR M-201 Grade E Cast Steel',
      desc: 'Heavy-duty locomotive jacking pad designed for Class I diesel-electric locomotive maintenance.',
      img: '/images/amsted_jacking_pad.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: 'Brake Head for Locomotives',
      series: 'SERIES 1010',
      specs: 'ASTM A536 Ductile Iron',
      desc: 'Precision cast locomotive brake head assembly engineered for extreme braking thermal endurance.',
      img: '/images/amsted_brake_head.jpg',
      drawingImg: '/images/smart_freight_bogie.png'
    },
    {
      title: 'Finish Machined Axlebox Housing',
      series: 'SERIES 1020',
      specs: 'Forged Carbon Steel ASTM A668',
      desc: '5-axis CNC finished axlebox housing for high axle load freight bogie assemblies.',
      img: '/images/amsted_bogie_axlebox.jpg',
      drawingImg: '/images/bogie_assembly_cad.png'
    },
    {
      title: 'Finish Machined Centering Disc',
      series: 'SERIES 1030',
      specs: 'Precision CNC Machined Alloy',
      desc: 'High-precision centering disc assembly for locomotive center pivot bearing support.',
      img: '/images/amsted_centering_disc.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: 'Cast Steel Flange',
      series: 'SERIES 1040',
      specs: 'High Tensile Cast Steel',
      desc: 'Pressure-tested industrial cast steel flange engineered to withstand extreme torsional stress.',
      img: '/images/real_metal_casting_stock.jpg',
      drawingImg: '/images/bogie_assembly_cad.png'
    },
    {
      title: 'Finish Machined Pin Bracket for Bogie Bolster',
      series: 'SERIES 1050',
      specs: 'Heavy Forged Carbon Steel',
      desc: 'Robotic CNC machined pin bracket for heavy haul bogie bolster connection.',
      img: '/images/prod_pin_bracket.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: '500kg Cast Steel Drum',
      series: 'SERIES 1060',
      specs: 'ASTM A27 Steel Alloy',
      desc: 'High-density 500kg cast steel drum for heavy industrial winches and rail track equipment.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
      drawingImg: '/images/smart_freight_bogie.png'
    },
    {
      title: 'Centering Disc Assembly',
      series: 'SERIES 1070',
      specs: 'CNC Machined Ductile Iron',
      desc: 'Complete centering disc sub-assembly for heavy freight car bolster alignment.',
      img: '/images/istockphoto-1157483885-1024x1024.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: 'Precision Industrial Sprockets',
      series: 'SERIES 1080',
      specs: 'Drop Forged High Alloy Steel',
      desc: 'Induction hardened drive sprockets for heavy conveyor and trackwork machinery.',
      img: '/images/real_steel_gears_stock.jpg',
      drawingImg: '/images/bogie_assembly_cad.png'
    },
    {
      title: 'Machined Rotavator Gearbox 13x23',
      series: 'SERIES 1090',
      specs: 'SG Iron & Forged Alloy',
      desc: 'Heavy industrial machined 13x23 rotavator gearbox housing and gear train assembly.',
      img: '/images/real_cnc_machining_stock.jpg',
      drawingImg: '/images/smart_freight_bogie.png'
    },
    {
      title: 'SG Iron Body Cover',
      series: 'SERIES 1100',
      specs: 'Spheroidal Graphite Iron (SG)',
      desc: 'High-impact resistant SG iron body cover for heavy transmission and hydraulic pumps.',
      img: '/images/real_metal_casting_stock.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: 'Sonalika Rotavator 13x25',
      series: 'SERIES 1110',
      specs: 'Forged High Yield Carbon Steel',
      desc: 'High-capacity 13x25 rotavator transmission casting built for severe industrial applications.',
      img: '/images/Trackside & Turnout Castings-2.jpg',
      drawingImg: '/images/bogie_assembly_cad.png'
    },
    {
      title: 'Railway Track Plates',
      series: 'SERIES 1120',
      specs: 'AREMA Ch. 4 Manganese Steel',
      desc: 'Austenitic manganese track tie plates and turnout frog mounting base plates.',
      img: '/images/prod_railway_track_plates.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    },
    {
      title: 'Rotavator Gearbox Casting 13 X 23',
      series: 'SERIES 1130',
      specs: 'Electric Arc Cast Steel',
      desc: '3D solidification modeled 13x23 gearbox casting engineered for zero internal porosity.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
      drawingImg: '/images/smart_freight_bogie.png'
    },
    {
      title: 'Castings for Overspeed Trip Assembly',
      series: 'SERIES 1140',
      specs: 'Precision Investment Cast Alloy',
      desc: 'High-precision safety critical castings for locomotive overspeed trip mechanism.',
      img: '/images/prod_overspeed_trip_casting.jpg',
      drawingImg: '/images/bogie_callouts_diagram.png'
    }
  ];

  return (
    <>
      <section id="products" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Section Header with Navigation Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#C5A059' }} />
                <span>HIGH-PRECISION CASTINGS &amp; CAD BLUEPRINTS</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: '#143D2E', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Geist', sans-serif !important" }}>
                FEATURED RAIL COMPONENTS &amp; DRAWINGS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Slider Arrow Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button 
                  onClick={() => scroll('left')}
                  aria-label="Scroll left"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '2px',
                    background: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    transition: 'border-color 0.2s'
                  }}
                >
                  <ChevronLeft size={22} color="#143D2E" />
                </button>

                <button 
                  onClick={() => scroll('right')}
                  aria-label="Scroll right"
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '2px',
                    background: '#143D2E',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(20,61,46,0.25)',
                    transition: 'transform 0.2s'
                  }}
                >
                  <ChevronRight size={22} color="#C5A059" />
                </button>
              </div>

              <a 
                href="#contact" 
                className="link-hover-arrow"
              >
                <span>VIEW FULL CATALOG</span>
                <ArrowRight size={14} color="#C5A059" />
              </a>
            </div>
          </div>

          {/* Full Card Horizontal Slider (Exactly 4 visible across 100% container width) */}
          <div 
            ref={scrollRef}
            style={{ 
              display: 'flex', 
              gap: '1.25rem', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '0.5rem',
              width: '100%'
            }}
          >
            {components.map((item, idx) => (
              <div 
                key={idx}
                className="card-hover-industrial img-hover-zoom"
                style={{ 
                  width: 'calc(25% - 0.95rem)',
                  minWidth: 'calc(25% - 0.95rem)', 
                  maxWidth: 'calc(25% - 0.95rem)', 
                  flexShrink: 0,
                  scrollSnapAlign: 'start',
                  background: '#FFFFFF', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '2px',
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  height: '480px'
                }}
              >
                {/* Product Photo */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#FFFFFF', position: 'relative', flexShrink: 0, borderBottom: '1px solid #E5E7EB', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#143D2E', color: '#C5A059', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #C5A059', fontFamily: "'Geist', sans-serif !important" }}>
                    {item.series}
                  </span>
                </div>

                {/* Full Card Body & Footer */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#143D2E', letterSpacing: '0.04em', margin: '0 0 6px 0', textTransform: 'uppercase', lineHeight: 1.3, fontFamily: "'Geist', sans-serif !important" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#C5A059', display: 'block', marginBottom: '8px', letterSpacing: '0.05em', fontFamily: "'Geist', sans-serif !important" }}>
                      {item.specs}
                    </span>
                    <p style={{ fontSize: '11.5px', color: '#4B5563', lineHeight: 1.45, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={13} color="#C5A059" />
                        <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#143D2E', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>AREMA COMPLIANT</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct({
                          title: item.title,
                          series: item.series,
                          specs: item.specs,
                          img: item.drawingImg
                        })}
                        style={{
                          background: 'rgba(20, 61, 46, 0.08)',
                          border: '1px solid #143D2E',
                          color: '#143D2E',
                          fontSize: '10px',
                          fontWeight: 900,
                          padding: '4px 8px',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontFamily: "'Geist', sans-serif !important"
                        }}
                      >
                        <FileText size={11} color="#C5A059" />
                        <span>CAD DRAWING</span>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Blueprint CAD Drawing Modal */}
      {selectedProduct && (
        <EngineeringDrawingModal 
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          productTitle={selectedProduct.title}
          productSeries={selectedProduct.series}
          productSpecs={selectedProduct.specs}
          productImg={selectedProduct.img}
        />
      )}
    </>
  );
};

export default FeaturedComponents;
