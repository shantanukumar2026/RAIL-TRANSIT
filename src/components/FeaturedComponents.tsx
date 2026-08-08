import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Check, FileText, Filter } from 'lucide-react';
import EngineeringDrawingModal from './EngineeringDrawingModal';

export const FeaturedComponents: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
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

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'wagons', label: 'Freight Wagons' },
    { id: 'bogies', label: 'Bogies & Suspension' },
    { id: 'couplers', label: 'Couplers & Draft Gears' },
    { id: 'trackwork', label: 'Turnouts & CMS Frogs' },
    { id: 'castings', label: 'Foundry & Industrial Castings' },
  ];

  const components = [
    // Freight Wagons (4 Items)
    {
      id: 'wag-01',
      category: 'wagons',
      title: 'BCNHL (Bogie Covered High Capacity) Wagon',
      series: 'SERIES 2010',
      specs: 'RDSO (Research Designs & Standards Org.) Spec WD-06012',
      desc: 'Full Form: Bogie Covered Number High-Capacity Length Wagon. Designed for bagged cement, food grains & weather-sensitive cargo.',
      img: '/images/istockphoto-1271210664-1024x1024.jpg',
      drawingImg: '/images/istockphoto-1271210664-1024x1024.jpg'
    },
    {
      id: 'wag-02',
      category: 'wagons',
      title: 'BOXNHL (Bogie Open Stainless Steel) Wagon',
      series: 'SERIES 2020',
      specs: '25-Ton Axle Load (AAR M-201 / IRS T-12 Spec)',
      desc: 'Full Form: Bogie Open Extra High Speed Stainless Steel Wagon. Engineered for coal, iron ore, and heavy bulk minerals.',
      img: '/images/istockphoto-179573427-1024x1024.jpg',
      drawingImg: '/images/istockphoto-179573427-1024x1024.jpg'
    },
    {
      id: 'wag-03',
      category: 'wagons',
      title: 'BOBRN (Bogie Open Bottom Rapid Discharge) Hopper',
      series: 'SERIES 2030',
      specs: 'Air-Braked Pneumatic Rapid Door System (RDSO Spec)',
      desc: 'Full Form: Bogie Open Bottom Rapid Discharge Nitrogen Air-Braked Hopper Wagon for automated rapid unloading at thermal power stations.',
      img: '/images/istockphoto-1967717882-1024x1024.jpg',
      drawingImg: '/images/istockphoto-1967717882-1024x1024.jpg'
    },
    {
      id: 'wag-04',
      category: 'wagons',
      title: 'BTPN (Bogie Tank Wagon for Liquid Cargo)',
      series: 'SERIES 2040',
      specs: 'RDSO Approved Pneumatic Tank Wagon (IS 2062 E250)',
      desc: 'Full Form: Bogie Tank Wagon for Petroleum & Liquid Products. Heavy-duty cylindrical shell with top loading & bottom discharge valves.',
      img: '/images/istockphoto-1271210664-1024x1024.jpg',
      drawingImg: '/images/istockphoto-1271210664-1024x1024.jpg'
    },

    // Bogies & Suspension (4 Items)
    {
      id: 'bog-01',
      category: 'bogies',
      title: 'CASNUB 22HS (Cast Steel Freight Car) Bogie',
      series: 'SERIES 1000',
      specs: 'RDSO Approved 22.9 Ton Axle Load (AAR M-201 Grade B+)',
      desc: 'Full Form: Cast Steel Freight Wagon Bogie Assembly. Features cast steel side frames, bolster, and elastomeric suspension pads.',
      img: '/images/locomotive_wheelset_stock.jpg',
      drawingImg: '/images/locomotive_wheelset_stock.jpg'
    },
    {
      id: 'bog-02',
      category: 'bogies',
      title: 'Barber S2 Design High-Capacity 32.5T Bogie',
      series: 'SERIES 1005',
      specs: 'Amsted SCT (Standard Car Truck Co. USA) Licensed Barber S2',
      desc: 'Full Form: Amsted SCT (Standard Car Truck Company USA) Barber S2 Bogie for high-speed 32.5t axle load operations.',
      img: '/images/real_train_wheelset_stock.jpg',
      drawingImg: '/images/real_train_wheelset_stock.jpg'
    },
    {
      id: 'bog-03',
      category: 'bogies',
      title: '5-Axis CNC Machined Axlebox Housing',
      series: 'SERIES 1020',
      specs: 'Forged Carbon Steel ASTM (Amer. Soc. for Testing & Mat.) A668',
      desc: 'Full Form: 5-Axis CNC (Computer Numerical Control) Machined Axlebox Housing for high axle load freight & passenger bogies.',
      img: '/images/amsted_bogie_axlebox.jpg',
      drawingImg: '/images/amsted_bogie_axlebox.jpg'
    },
    {
      id: 'bog-04',
      category: 'bogies',
      title: 'CASNUB 22NLR (Low Ride Height Freight Car) Bogie',
      series: 'SERIES 1025',
      specs: 'RDSO Spec WD-21012 Low Platform Container Bogie',
      desc: 'Full Form: Cast Steel Low Ride Freight Bogie for double-stack container flat wagons and low platform logistics cars.',
      img: '/images/locomotive_wheelset_stock.jpg',
      drawingImg: '/images/locomotive_wheelset_stock.jpg'
    },

    // Couplers & Draft Gears (4 Items)
    {
      id: 'cpl-01',
      category: 'couplers',
      title: 'AAR Type H Tightlock Automatic Coupler',
      series: 'SERIES 3010',
      specs: 'AAR (Association of American Railroads) M-201 Grade E Steel',
      desc: 'Full Form: AAR (Association of American Railroads) Type H Tightlock Automatic Centre Buffer Coupler.',
      img: '/images/prod_pin_bracket.jpg',
      drawingImg: '/images/prod_pin_bracket.jpg'
    },
    {
      id: 'cpl-02',
      category: 'couplers',
      title: 'High-Capacity Friction Draft Gear (RDSO 56-K)',
      series: 'SERIES 3020',
      specs: 'Cardwell Westinghouse Tech / RDSO (Research Designs & Standards Org.) 56-K',
      desc: 'Full Form: RDSO (Research Designs & Standards Org.) 56-K High Energy Shock Buffering Friction Draft Gear.',
      img: '/images/amsted_centering_disc.jpg',
      drawingImg: '/images/amsted_centering_disc.jpg'
    },
    {
      id: 'cpl-03',
      category: 'couplers',
      title: 'AAR Type E Centre Buffer Freight Coupler',
      series: 'SERIES 3030',
      specs: 'AAR M-201 Grade E Heavy Freight Specification',
      desc: 'Standard AAR Type E automatic centre buffer coupler for heavy haul freight wagons and locomotive trainlines.',
      img: '/images/prod_pin_bracket.jpg',
      drawingImg: '/images/prod_pin_bracket.jpg'
    },
    {
      id: 'cpl-04',
      category: 'couplers',
      title: 'Rubber Cushioning Draft Unit & Springs',
      series: 'SERIES 3040',
      specs: 'Elastomeric Cushioning Pad Unit (RDSO Spec)',
      desc: 'High-capacity elastomeric rubber cushion draft package for smooth train acceleration and impact shock isolation.',
      img: '/images/amsted_centering_disc.jpg',
      drawingImg: '/images/amsted_centering_disc.jpg'
    },

    // Trackwork & Turnouts (4 Items)
    {
      id: 'trk-01',
      category: 'trackwork',
      title: '1 in 12 Cast Manganese Steel (CMS) Frog',
      series: 'SERIES 4010',
      specs: '12-14% Austenitic Hadfield Mn Steel (IRS T-29 / AREMA Ch. 4)',
      desc: 'Full Form: CMS = Cast Manganese Steel (12-14% Austenitic Hadfield Steel) Crossing Frog for heavy haul turnouts.',
      img: '/images/turnout_frog_manganese_stock.jpg',
      drawingImg: '/images/turnout_frog_manganese_stock.jpg'
    },
    {
      id: 'trk-02',
      category: 'trackwork',
      title: 'Asymmetrical Thick Web Switch (TWS) Turnout',
      series: 'SERIES 4020',
      specs: '60kg UIC / AREMA (Amer. Railway Engineering & Maint. Assoc.) High Speed Switch',
      desc: 'Full Form: TWS = Thick Web Switch Point Tongue Rail for 160km/h high-speed turnout switching.',
      img: '/images/trackside_turnout_castings_2.jpg',
      drawingImg: '/images/trackside_turnout_castings_2.jpg'
    },
    {
      id: 'trk-03',
      category: 'trackwork',
      title: '1 in 8.5 Cast Manganese Steel Crossing Frog',
      series: 'SERIES 4030',
      specs: '12-14% Austenitic Hadfield Manganese Steel (IRS T-29)',
      desc: 'Heavy duty 1 in 8.5 cast manganese steel crossing frog for industrial freight siding turnouts and yard crossovers.',
      img: '/images/turnout_frog_manganese_stock.jpg',
      drawingImg: '/images/turnout_frog_manganese_stock.jpg'
    },
    {
      id: 'trk-04',
      category: 'trackwork',
      title: 'Heavy Duty Railway Track Tie Plates & Fasteners',
      series: 'SERIES 4040',
      specs: 'IS 2062 / ASTM A148 Cast Steel Track Plate',
      desc: 'Precision cast steel track tie plates, canted rail seats, and heavy elastic clip fastening shoulder brackets.',
      img: '/images/trackside_turnout_castings_2.jpg',
      drawingImg: '/images/trackside_turnout_castings_2.jpg'
    },

    // Foundry & Industrial Castings (4 Items)
    {
      id: 'cst-01',
      category: 'castings',
      title: 'Jacking Pad for Diesel-Electric Locomotives',
      series: 'SERIES 1010',
      specs: 'AAR M-201 Grade E Cast Steel (FRA 229 Qualified)',
      desc: 'Full Form: FRA = Federal Railroad Administration (USA). Heavy-duty locomotive lifting pad for maintenance.',
      img: '/images/amsted_jacking_pad.jpg',
      drawingImg: '/images/amsted_jacking_pad.jpg'
    },
    {
      id: 'cst-02',
      category: 'castings',
      title: 'Ductile Iron Locomotive Brake Head Assembly',
      series: 'SERIES 1015',
      specs: 'ASTM (Amer. Soc. for Testing & Mat.) A536 Ductile Iron / AAR M-926',
      desc: 'Full Form: ASTM = American Society for Testing and Materials. Precision cast locomotive brake head assembly.',
      img: '/images/amsted_brake_head.jpg',
      drawingImg: '/images/amsted_brake_head.jpg'
    },
    {
      id: 'cst-03',
      category: 'castings',
      title: 'Machined Rotavator Gearbox 13x23',
      series: 'SERIES 1090',
      specs: 'SG (Spheroidal Graphite) Iron & Forged Alloy Steel',
      desc: 'Full Form: SG Iron = Spheroidal Graphite (Ductile) Cast Iron Heavy Casing & Gear Train.',
      img: '/images/prod_rotavator_gearbox_13x23.jpg',
      drawingImg: '/images/prod_rotavator_gearbox_13x23.jpg'
    },
    {
      id: 'cst-04',
      category: 'castings',
      title: '500kg Heavy Cast Steel Drum',
      series: 'SERIES 1060',
      specs: 'ASTM (Amer. Soc. for Testing & Mat.) A27 Steel Alloy',
      desc: 'Full Form: ASTM = American Society for Testing and Materials. High-density 500kg cast steel winch drum.',
      img: '/images/istockphoto-1030443074-1024x1024.jpg',
      drawingImg: '/images/istockphoto-1030443074-1024x1024.jpg'
    }
  ];

  const filteredComponents = activeCategory === 'all' 
    ? components 
    : components.filter(c => c.category === activeCategory);

  return (
    <>
      <section id="products" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB', position: 'relative' }}>
        <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* Section Header with Navigation Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="eyebrow">
                <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
                <span>RDSO, AREMA &amp; AAR M-1003 CERTIFIED CATALOG</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: '#1B5E20', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', fontFamily: "'Geist', sans-serif !important" }}>
                FEATURED WAGONS, BOGIES &amp; STEEL CASTINGS
              </h2>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              {/* Carousel Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => scroll('left')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; }}
                >
                  <ChevronLeft size={22} color="#4CAF50" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  style={{
                    background: '#1B5E20',
                    border: '1.5px solid #4CAF50',
                    borderRadius: '2px',
                    width: '38px',
                    height: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(27,94,32,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; }}
                >
                  <ChevronRight size={22} color="#4CAF50" />
                </button>
              </div>

              <a 
                href="#contact" 
                className="link-hover-arrow"
              >
                <span>REQUEST COMPLETE TECHNICAL CATALOG</span>
                <ArrowRight size={14} color="#4CAF50" />
              </a>
            </div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginRight: '8px', color: '#1B5E20', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Geist', sans-serif !important" }}>
              <Filter size={14} color="#4CAF50" />
              <span>CATEGORY FILTER:</span>
            </div>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: isActive ? '#1B5E20' : '#FFFFFF',
                    color: isActive ? '#FAF6EE' : '#374151',
                    border: isActive ? '1px solid #4CAF50' : '1px solid #D1D5DB',
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '6px 14px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.04em',
                    fontFamily: "'Geist', sans-serif !important"
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Full Card Horizontal Slider (4 visible across 100% container width) */}
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
            {filteredComponents.map((item, idx) => (
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
                  height: '490px'
                }}
              >
                {/* Product Photo */}
                <div style={{ height: '210px', overflow: 'hidden', background: '#FFFFFF', position: 'relative', flexShrink: 0, borderBottom: '1px solid #E5E7EB', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
                  />
                  <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#1B5E20', color: '#FFFFFF', fontSize: '9.5px', fontWeight: 900, padding: '4px 8px', letterSpacing: '0.08em', border: '1px solid #4CAF50', fontFamily: "'Geist', sans-serif !important" }}>
                    {item.series}
                  </span>
                </div>

                {/* Full Card Body & Footer */}
                <div style={{ padding: '1.25rem 1.15rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    <h3 style={{ fontSize: '13px', fontWeight: 900, color: '#1B5E20', letterSpacing: '0.04em', margin: '0 0 6px 0', textTransform: 'uppercase', lineHeight: 1.3, fontFamily: "'Geist', sans-serif !important" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#4CAF50', display: 'block', marginBottom: '8px', letterSpacing: '0.05em', fontFamily: "'Geist', sans-serif !important" }}>
                      {item.specs}
                    </span>
                    <p style={{ fontSize: '11.5px', color: '#4B5563', lineHeight: 1.45, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div style={{ paddingTop: '0.85rem', marginTop: '0.85rem', borderTop: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Check size={13} color="#4CAF50" />
                        <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#1B5E20', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>RDSO / AREMA COMPLIANT</span>
                      </div>

                      <button
                        onClick={() => setSelectedProduct({
                          title: item.title,
                          series: item.series,
                          specs: item.specs,
                          img: item.drawingImg
                        })}
                        style={{
                          background: '#1B5E20',
                          border: '1px solid #4CAF50',
                          color: '#FFFFFF',
                          fontSize: '10px',
                          fontWeight: 900,
                          padding: '4px 8px',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.2s',
                          fontFamily: "'Geist', sans-serif !important"
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.color = '#FFFFFF'; }}
                      >
                        <FileText size={11} color="#4CAF50" />
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

