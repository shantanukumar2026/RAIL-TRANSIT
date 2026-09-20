import React, { useState } from 'react';
import { ShieldCheck, Lock, Eye, Building2, TrainTrack, Award, CheckCircle2, Train, Download } from 'lucide-react';

interface CertificationItem {
  id: string;
  code: string;
  title: string;
  authority: string;
  certNumber: string;
  validUntil: string;
  scope: string;
  details: string;
  iconBg: string;
  pdfSize: string;
}

const certificationsList: CertificationItem[] = [
  {
    id: 'aar-m1003',
    code: 'AAR M-1003 QA',
    title: 'Association of American Railroads Quality Assurance',
    authority: 'AAR Quality Assurance Committee',
    certNumber: 'QA-CERT-8849-2026',
    validUntil: 'December 2028',
    scope: 'Manufacture of Cast Steel Bogies, Forged Axles, Axleboxes & Brake Head Hardware for Freight Cars.',
    details: 'Complete quality system audit compliance covering non-destructive testing (NDT), traceability, material heat lot logging, and dimensional CMM verification.',
    iconBg: '#1B5E20',
    pdfSize: '2.4 MB'
  },
  {
    id: 'arema-ch4',
    code: 'AREMA CH. 4',
    title: 'Trackwork & Switch Frog Manufacturing Compliance',
    authority: 'American Railway Engineering & M/W Association',
    certNumber: 'AREMA-TRK-9042',
    validUntil: 'Annual Audit Completed 2026',
    scope: 'Austenitic Manganese Turnout Frogs, Crossing Diamonds, Tie Plates, Guard Rail Clamps & Switch Components.',
    details: 'Strict adherence to AREMA Chapter 4 trackwork geometry, explosive depth hardening parameters, and 36-ton HAL impact fatigue standards.',
    iconBg: '#2E7D32',
    pdfSize: '1.8 MB'
  },
  {
    id: 'fra-rule213',
    code: 'FRA RULE 213',
    title: 'Federal Railroad Administration Safety Compliance',
    authority: 'U.S. Department of Transportation (DOT / FRA)',
    certNumber: 'FRA-213-CLASS1-OK',
    validUntil: 'Active Compliance 2026',
    scope: 'Safety Standard Compliance for Track Classes 1 through 9 including High-Speed Rail Corridors up to 220 mph.',
    details: 'Verifies structural sound state of cast manganese frogs and turnout trackage under heavy axle load impacts without fatigue failure.',
    iconBg: '#15803D',
    pdfSize: '3.1 MB'
  },
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: 'International Quality Management System',
    authority: 'Bureau Veritas Quality Certification',
    certNumber: 'ISO-9001-US-4921',
    validUntil: 'March 2029',
    scope: 'Design, Melting, Casting, Forging, Machining, and Assembly of Heavy Freight and Passenger Railway Components.',
    details: 'Rigorous 9001:2015 process controls from scrap steel procurement to induction furnace chemistry and final CMM release auditing.',
    iconBg: '#166534',
    pdfSize: '1.2 MB'
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    title: 'Environmental Management & Zero Slag Target',
    authority: 'DNV GL Environmental Systems',
    certNumber: 'ISO-14001-ENV-309',
    validUntil: 'October 2027',
    scope: '100% Recycled Electric Induction Foundry Operations, Thermal Silica Sand Reclamation & Zero Foundry Slag Landfill Target.',
    details: 'Verified environmental management system achieving 98.4% sand recycling, closed-loop industrial water, and 100% renewable power melting.',
    iconBg: '#1B5E20',
    pdfSize: '2.1 MB'
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety Foundry Management',
    authority: 'TÜV SÜD America',
    certNumber: 'OHS-45001-USA-77',
    validUntil: 'June 2028',
    scope: 'Foundry Safety Protocols, Robotic Automated Pouring Cells, Electric Induction Furnace Shielding & Heavy Crane Operations.',
    details: 'Zero-harm workplace framework protecting 650+ foundry engineers, pour operators, and 5-axis CNC machining technicians.',
    iconBg: '#2E7D32',
    pdfSize: '1.5 MB'
  }
];

const authorityApprovals = [
  { 
    name: 'Amtrak Passenger Rail', 
    network: 'National Passenger Rail System',
    status: 'Approved Master Vendor', 
    supplies: 'High-speed passenger bogie castings, suspension arms, and forged wheelsets.',
    icon: Train,
    accent: '#0284C7',
    tag: 'PASSENGER CORRIDOR'
  },
  { 
    name: 'BNSF Railway Company', 
    network: 'North American Freight Network',
    status: 'Class 1 Certified Manufacturer', 
    supplies: '36-ton heavy haul axles, freight bogie bolsters, and cast couplers.',
    icon: Building2,
    accent: '#EA580C',
    tag: 'CLASS I FREIGHT'
  },
  { 
    name: 'Union Pacific Railroad', 
    network: 'Transcontinental Class 1 System',
    status: 'Qualified Trackwork Supplier', 
    supplies: 'High-impact manganese turnout switch frogs, crossovers, and trackwork.',
    icon: ShieldCheck,
    accent: '#DC2626',
    tag: 'TRACKWORK & TURNOUTS'
  },
  { 
    name: 'CSX Transportation', 
    network: 'Eastern U.S. Freight Network',
    status: 'Approved Component Provider', 
    supplies: 'Locomotive wheel assemblies, wear plates, and structural steel castings.',
    icon: TrainTrack,
    accent: '#2563EB',
    tag: 'LOCOMOTIVE SYSTEMS'
  },
  { 
    name: 'Norfolk Southern Rail', 
    network: 'Heavy Haul Freight Network',
    status: 'Approved Heavy Haul Vendor', 
    supplies: 'Ductile iron brake heads, forged axles, and side frame bolster parts.',
    icon: Award,
    accent: '#334155',
    tag: 'FOUNDRY CASTINGS'
  },
  { 
    name: 'Metra / MBTA / MTA', 
    network: 'Commuter & Subway Transit',
    status: 'Verified Transit Supplier', 
    supplies: 'Commuter and subway coach bogies, disc brake rotors, and truck frames.',
    icon: CheckCircle2,
    accent: '#059669',
    tag: 'COMMUTER & METRO'
  }
];

export const TrustCertificationSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section 
      id="trust-certifications" 
      style={{ 
        background: '#FFFFFF', 
        padding: '5.5rem 0', 
        borderBottom: '2px solid #E5E7EB',
        position: 'relative' 
      }}
    >
      <div className="container-custom">
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#4CAF50' }} />
              <span style={{ color: '#1B5E20', fontWeight: 900 }}>COMPANY TRUST &amp; COMPLIANCE DIVISION</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#111827', fontWeight: 900, margin: 0, textTransform: 'uppercase', lineHeight: 1.1, fontFamily: "'Manrope', sans-serif !important" }}>
              TRUST &amp; OFFICIAL CERTIFICATIONS
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#2E7D32', margin: '0.75rem 0 0 0', maxWidth: '680px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Our manufacturing facilities operate under strict AAR M-1003, AREMA Chapter 4, and FRA Rule 213 quality management frameworks, audited annually by top international rail standards committees.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FAF6EE', border: '1.5px solid #1B5E20', padding: '12px 20px', borderRadius: '2px' }}>
            <Lock size={18} color="#1B5E20" />
            <div>
              <span style={{ fontSize: '10.5px', color: '#1B5E20', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>AUDITED QUALITY SYSTEM</span>
              <strong style={{ fontSize: '13px', color: '#1B5E20', fontWeight: 900, fontFamily: "'Manrope', sans-serif !important" }}>AAR M-1003 &amp; ISO CERTIFIED</strong>
            </div>
          </div>
        </div>

        {/* 6 Grid Certification Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem', marginBottom: '4rem' }}>
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: '#FFFFFF',
                border: '1.5px solid #E5E7EB',
                borderRadius: '2px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="card-hover-industrial"
            >
              <div>
                {/* Header Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '6px 12px', fontSize: '11px', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', borderRadius: '2px', fontFamily: "'Manrope', sans-serif !important" }}>
                    {cert.code}
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#166534', background: '#F0FDF4', padding: '4px 10px', borderRadius: '2px', border: '1px solid #BBF7D0' }}>
                    Active Cert
                  </span>
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: 900, color: '#111827', margin: '0 0 8px 0', lineHeight: 1.35, fontFamily: "'Manrope', sans-serif !important" }}>
                  {cert.title}
                </h3>

                <p style={{ fontSize: '12px', color: '#2E7D32', margin: '0 0 1rem 0', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Manrope', sans-serif !important" }}>
                  <Building2 size={13} color="#4CAF50" />
                  <span>{cert.authority}</span>
                </p>

                <p style={{ fontSize: '12.5px', color: '#2E7D32', lineHeight: 1.55, margin: '0 0 1.25rem 0', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                  {cert.scope}
                </p>
              </div>

              <div>
                <div style={{ background: '#F9FAFB', border: '1px solid #F3F4F6', padding: '10px 12px', borderRadius: '2px', marginBottom: '1.25rem', fontSize: '11.5px', color: '#2E7D32' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontWeight: 600 }}>Cert No:</span>
                    <strong style={{ color: '#1B5E20', fontWeight: 800 }}>{cert.certNumber}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 600 }}>Audit Validity:</span>
                    <span style={{ color: '#166534', fontWeight: 700 }}>{cert.validUntil}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => setSelectedCert(cert)}
                    style={{
                      flex: 1,
                      background: '#1B5E20',
                      color: '#FFFFFF',
                      border: '1.5px solid #1B5E20',
                      padding: '10px 14px',
                      fontSize: '11.5px',
                      fontWeight: 900,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      borderRadius: '2px',
                      transition: 'all 0.2s',
                      fontFamily: "'Manrope', sans-serif !important"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#1B5E20'; e.currentTarget.style.color = '#FFFFFF'; }}
                  >
                    <Eye size={14} />
                    <span>INSPECT CERT</span>
                  </button>

                  <a
                    href={`#download-${cert.id}`}
                    onClick={(e) => { e.preventDefault(); alert(`Downloading official ${cert.code} audit documentation (${cert.pdfSize})...`); }}
                    title="Download Official PDF Certificate"
                    style={{
                      width: '38px',
                      height: '38px',
                      background: '#FAF6EE',
                      border: '1.5px solid #1B5E20',
                      color: '#1B5E20',
                      borderRadius: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#4CAF50'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }}
                  >
                    <Download size={15} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Rail Authorities Approval Directory */}
        <div style={{ background: '#1B5E20', color: '#FFFFFF', padding: '3.5rem 3rem', borderRadius: '4px', position: 'relative', overflow: 'hidden', borderTop: '4px solid #4CAF50' }}>
          <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 900, color: '#A5D6A7', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '8px', fontFamily: "'Manrope', sans-serif !important" }}>
              CLASS I FREIGHT &amp; PASSENGER RAIL AUTHORITY APPROVALS
            </span>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', margin: '0 0 10px 0', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
              APPROVED RAIL NETWORK VENDOR STATUS
            </h3>
            <p style={{ fontSize: '14.5px', color: '#E8F5E9', margin: 0, lineHeight: 1.5, fontFamily: "'Manrope', sans-serif !important" }}>
              Westpoint is a qualified direct manufacturer for leading North American Class I freight railroads and passenger transit corridors.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {authorityApprovals.map((auth, i) => {
              const IconComp = auth.icon;
              return (
                <div 
                  key={i}
                  style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '4px', 
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
                    border: '1px solid #E5E7EB',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  <div>
                    {/* Top Row: Railroad Identity & Status Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '4px', background: auth.accent + '15', color: auth.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid ' + auth.accent + '30' }}>
                          <IconComp size={22} color={auth.accent} />
                        </div>
                        <div>
                          <span style={{ fontSize: '10px', fontWeight: 800, color: auth.accent, letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                            {auth.tag}
                          </span>
                          <span style={{ fontSize: '11.5px', color: '#6B7280', fontWeight: 600, display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                            {auth.network}
                          </span>
                        </div>
                      </div>

                      <span style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', padding: '3px 8px', borderRadius: '3px', fontSize: '10.5px', fontWeight: 800, whiteSpace: 'nowrap', fontFamily: "'Manrope', sans-serif !important" }}>
                        VERIFIED
                      </span>
                    </div>

                    {/* Railroad Name */}
                    <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 6px 0', fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.name}
                    </h4>

                    {/* What Westpoint Manufactures For Them */}
                    <p style={{ fontSize: '13.5px', color: '#374151', lineHeight: 1.5, margin: '8px 0 0 0', borderTop: '1px solid #F3F4F6', paddingTop: '10px', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.supplies}
                    </p>
                  </div>

                  {/* Footer Status */}
                  <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11.5px', color: '#1B5E20', fontWeight: 700, fontFamily: "'Manrope', sans-serif !important" }}>
                      {auth.status}
                    </span>
                    <span style={{ fontSize: '11px', color: '#9CA3AF', fontWeight: 600, fontFamily: "'Manrope', sans-serif !important" }}>
                      AAR / AREMA Spec
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Interactive Certificate Inspection Modal */}
      {selectedCert && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 41, 30, 0.75)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div 
            style={{
              background: '#FFFFFF',
              maxWidth: '640px',
              width: '100%',
              borderRadius: '2px',
              border: '2px solid #1B5E20',
              padding: '2.5rem',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '2px solid #E5E7EB', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="#1B5E20" />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#111827', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                    {selectedCert.code} - OFFICIAL SPECIFICATION
                  </h3>
                  <span style={{ fontSize: '11px', color: '#2E7D32', fontWeight: 600 }}>{selectedCert.authority}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                style={{ background: 'none', border: 'none', fontSize: '24px', color: '#1B5E20', cursor: 'pointer', fontWeight: 900 }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '1rem', borderRadius: '2px' }}>
                <strong style={{ fontSize: '11px', color: '#1B5E20', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>CERTIFICATE TITLE</strong>
                <p style={{ fontSize: '14px', fontWeight: 800, color: '#1B5E20', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>{selectedCert.title}</p>
              </div>

              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', padding: '1rem', borderRadius: '2px' }}>
                <strong style={{ fontSize: '11px', color: '#1B5E20', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>MANUFACTURING SCOPE</strong>
                <p style={{ fontSize: '13px', color: '#2E7D32', margin: 0, lineHeight: 1.5, fontFamily: "'Manrope', sans-serif !important" }}>{selectedCert.scope}</p>
              </div>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '1rem', borderRadius: '2px' }}>
                <strong style={{ fontSize: '11px', color: '#166534', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '4px', fontFamily: "'Manrope', sans-serif !important" }}>AUDIT &amp; QUALITY DETAILS</strong>
                <p style={{ fontSize: '12.5px', color: '#14532D', margin: 0, lineHeight: 1.5, fontFamily: "'Manrope', sans-serif !important" }}>{selectedCert.details}</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button
                onClick={() => { alert(`Downloading official PDF audit package (${selectedCert.pdfSize})...`); setSelectedCert(null); }}
                className="btn-animated"
                style={{
                  flex: 1,
                  padding: '12px 20px',
                  fontSize: '12px',
                  fontWeight: 900,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '2px',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                <Download size={15} color="#FFFFFF" />
                <span>DOWNLOAD AUDIT PDF ({selectedCert.pdfSize})</span>
              </button>

              <button
                onClick={() => setSelectedCert(null)}
                style={{
                  background: '#F3F4F6',
                  color: '#2E7D32',
                  border: '1px solid #D1D5DB',
                  padding: '12px 20px',
                  fontSize: '12px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  borderRadius: '2px',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                CLOSE
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default TrustCertificationSection;
