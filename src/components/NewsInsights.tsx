import React from 'react';
import { ArrowRight } from 'lucide-react';

export const NewsInsights: React.FC = () => {
  const news = [
    {
      category: 'MANUFACTURING',
      date: 'TECHNICAL BULLETIN',
      title: 'Expanding Our Production Capacity in Central Foundry Facility',
      desc: 'ABC Rail completes installation of second electric induction melting furnace and automated sand reclamation line.',
      img: '/images/real_metal_casting_stock.jpg'
    },
    {
      category: 'TECHNOLOGY',
      date: 'MANUFACTURING INSIGHT',
      title: 'Investing in Next-Gen Machining Technology',
      desc: 'Commissioning robotic 5-axis heavy CNC turning centers engineered to meet 0.05mm tolerances for high-speed rail frog crossovers.',
      img: '/images/real_cnc_machining_stock.jpg'
    },
    {
      category: 'INFRASTRUCTURE',
      date: 'PRESS DISPATCH',
      title: 'Delivering Reliable Solutions for a Changing World',
      desc: 'Awarded multi-year contract for Class I freight turnout frog replacements and AAR M-201 Grade E couplers across North America.',
      img: '/images/real_train_wheelset_stock.jpg'
    }
  ];

  return (
    <section id="news" className="section-full-vh" style={{ background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#C5A059' }} />
              <span>CORPORATE UPDATES</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', color: '#143D2E', fontWeight: 900, margin: 0, textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
              NEWS &amp; INSIGHTS
            </h2>
          </div>

          <a 
            href="#news" 
            className="link-hover-arrow"
          >
            <span>VIEW ALL NEWS</span>
            <ArrowRight size={14} color="#C5A059" />
          </a>
        </div>

        {/* Exactly 3 Premium Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {news.map((item, idx) => (
            <div 
              key={idx}
              className="card-hover-industrial img-hover-zoom"
              style={{ 
                background: '#FFFFFF', 
                border: '1px solid #E5E7EB',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                borderRadius: '2px',
                height: '420px'
              }}
            >
              <div>
                {/* Large Photo */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.65rem' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#C5A059', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#E5E7EB' }}>|</span>
                    <span style={{ fontSize: '10.5px', color: '#6C757D', fontWeight: 700, fontFamily: "'Geist', sans-serif !important" }}>
                      {item.date}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#143D2E', lineHeight: 1.35, margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '12px', color: '#4B5563', lineHeight: 1.5, margin: 0, fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                    {item.desc}
                  </p>
                </div>
              </div>

              <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
                  READ TECHNICAL BULLETIN
                </span>
                <ArrowRight size={13} color="#C5A059" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsInsights;
