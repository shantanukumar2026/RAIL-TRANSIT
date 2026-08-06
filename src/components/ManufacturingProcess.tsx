import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ManufacturingProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'RAW MATERIAL SELECTION',
      desc: '100% certified structural scrap steel and high-purity argon-shielded spectro-dosed ferroalloys.'
    },
    {
      num: '02',
      title: 'ELECTRIC CASTING & FORGING',
      desc: 'Computerized induction furnace melting with 3D solidification modeling and heavy drop forging presses.'
    },
    {
      num: '03',
      title: 'HEAT TREATMENT',
      desc: 'Controlled water-quench austenitizing heat treatment for work-hardening manganese and forged carbon steel.'
    },
    {
      num: '04',
      title: 'PRECISION CNC MACHINING',
      desc: 'Robotic 5-axis heavy CNC milling and turning machines turnout frogs and axles to 0.05mm tolerances.'
    },
    {
      num: '05',
      title: 'VOLUMETRIC NDT INSPECTION',
      desc: '100% ultrasonic flaw scanning, magnetic particle testing, and spectrometric chemistry validation.'
    },
    {
      num: '06',
      title: 'FINISHED PRODUCT DELIVERY',
      desc: 'Final dimensional audit, protective coating, and direct Class I rail siding dispatch.'
    }
  ];

  return (
    <section id="process" style={{ background: '#F5F2EB', padding: '5.5rem 0', borderBottom: '1px solid #E2DDD5' }}>
      <div className="container-custom">

        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="eyebrow">
            <span style={{ display: 'inline-block', width: '24px', height: '1.5px', background: '#B78A4C' }} />
            <span>QUALITY ASSURANCE WORKFLOW</span>
          </div>
          <h2 style={{ fontSize: '2.25rem', color: '#143D2E', fontWeight: 800, margin: 0, textTransform: 'uppercase' }}>
            MANUFACTURING PROCESS TIMELINE
          </h2>
        </div>

        {/* 6-Step Timeline Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid #E2DDD5',
                padding: '1.75rem 1.25rem',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '250px'
              }}
            >
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#B78A4C', marginBottom: '0.75rem', lineHeight: 1 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '12px', fontWeight: 800, color: '#143D2E', letterSpacing: '0.04em', lineHeight: 1.35, marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '11.5px', color: '#5C6662', lineHeight: 1.5, margin: 0 }}>
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid #F5F2EB' }}>
                  <ArrowRight size={14} color="#B78A4C" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ManufacturingProcess;
