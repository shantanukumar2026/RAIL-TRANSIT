import React from 'react';

export const MarketsSection: React.FC = () => {
  const markets = [
    {
      title: 'Class I Freight Railroads',
      desc: 'Heavy-duty manganese turnout frogs, forged steel axles, and tie plates engineered to withstand 36-ton heavy axle freight loads.',
      img: '/images/istockphoto-179969577-1024x1024.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" /><line x1="4" x2="4" y1="22" y2="15" /></svg>
      )
    },
    {
      title: 'High-Speed Rail Networks',
      desc: 'Precision machined frog crossovers, insulated block joints, and high-frequency pantograph catenary arms for 300+ km/h corridors.',
      img: '/images/istockphoto-824316990-1024x1024.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><path d="M9 16V8h6v8" /><path d="M9 8h6" /></svg>
      )
    },
    {
      title: 'Urban Rapid Transit & Metro',
      desc: 'Ductile iron third-rail insulator shoe brackets, bogie side frames, monobloc wheels, and trackbed drainage trench covers.',
      img: '/images/istockphoto-96684135-1024x1024.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 21H2M10.1 2.8a2 2 0 0 1 2.8 0L22 12h-3v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8H2l7.1-9.2z" /></svg>
      )
    },
    {
      title: 'Commuter & Passenger Rail',
      desc: 'Passenger car coupler knuckles, draft gear housings, brake discs, and trackside junction pull boxes complying with FTA & FRA rules.',
      img: '/images/istockphoto-2263288606-1024x1024.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 20H2M5 17h2v3H5zm4 0h2v3H9zm4 0h2v3h-2zm4 0h2v3h-2zM4 11V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3H4zm8-7V2" /></svg>
      )
    },
    {
      title: 'Industrial & Mining Rail Sidings',
      desc: 'High-impact turnout frogs, rail anchors, and heavy iron base plates for mining haul tracks and industrial switching railyards.',
      img: '/images/istockphoto-1313022678-1024x1024.jpg',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      )
    },
    {
      title: 'OEM Car & Locomotive Builders',
      desc: 'Certified drop forged axles, cast steel bolsters, draft gear yokes, and brake assembly castings for global rail car manufacturers.',
      img: '/images/rail_forging_press.png',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      )
    }
  ];

  return (
    <section id="markets" style={{ background: '#FFFFFF', padding: '48px 5vw', position: 'relative' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ color: '#195B34', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>CORE SEGMENTS</span>
          <h2 className="font-display" style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', letterSpacing: '-0.02em', textTransform: 'uppercase', margin: 0 }}>Markets We Serve</h2>
          <div style={{ width: '36px', height: '3px', background: '#195B34', margin: '10px auto 0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {markets.map((market, idx) => (
            <div
              key={idx}
              className="hover-card-trigger"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: '0px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ overflow: 'hidden', height: '170px', position: 'relative' }}>
                <img
                  src={market.img}
                  alt={market.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="hover-zoom-img"
                />
                <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: '#195B34', color: '#FFFFFF', padding: '8px', borderRadius: '0px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>
                  {market.icon}
                </div>
              </div>
              <div style={{ padding: '16px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#195B34', margin: '0 0 6px 0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{market.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>{market.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px', color: '#195B34', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', cursor: 'pointer' }}>
                  <span>Explore Solutions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsSection;
