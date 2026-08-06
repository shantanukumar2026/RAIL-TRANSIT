import React, { useState } from 'react';
import { Gauge, Radio, ShieldCheck, Activity } from 'lucide-react';

export const RailwayTelemetryWidget: React.FC = () => {
  const [speed, setSpeed] = useState<number>(180);
  const [signalStatus, setSignalStatus] = useState<'CLEAR' | 'CAUTION' | 'STOP'>('CLEAR');
  const [axleTemp, setAxleTemp] = useState<number>(68);

  const getSignalColor = () => {
    switch (signalStatus) {
      case 'CLEAR': return '#10B981';
      case 'CAUTION': return '#F59E0B';
      case 'STOP': return '#DC2626';
    }
  };

  return (
    <section className="section-full-vh" style={{ background: '#0C241B', color: '#F5F2EB', borderBottom: '3px solid #C5A059', position: 'relative' }}>
      <div className="blueprint-grid-dark" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow eyebrow-dark">
              <span style={{ display: 'inline-block', width: '32px', height: '3px', background: '#C5A059' }} />
              <span>LIVE CORRIDOR TELEMETRY</span>
            </div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: '#F5F2EB', margin: 0, textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
              HIGH-SPEED LOCOMOTIVE SIGNAL &amp; AXLE MONITOR
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(197,160,89,0.4)', padding: '8px 16px', borderRadius: '2px' }}>
            <Radio size={16} color={getSignalColor()} />
            <span style={{ fontSize: '11px', fontWeight: 900, color: getSignalColor(), letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
              CORRIDOR SIGNAL: {signalStatus}
            </span>
          </div>
        </div>

        {/* Interactive Controls & Real-Time Telemetry Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2rem', alignItems: 'stretch' }}>

          {/* Left Panel: Speed & Signal Interactive JS Controls */}
          <div style={{ gridColumn: 'span 5', background: 'rgba(20, 61, 46, 0.95)', border: '1px solid rgba(197, 160, 89, 0.4)', padding: '2rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#C5A059', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Geist', sans-serif !important" }}>
                <Gauge size={18} color="#C5A059" />
                <span>LOCOMOTIVE SPEED CONTROL</span>
              </h3>

              {/* Speed Slider */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#A3B5AC', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Geist', sans-serif !important" }}>OPERATIONAL SPEED (KM/H)</label>
                  <span style={{ fontSize: '18px', fontWeight: 900, color: '#C5A059', fontFamily: "'Geist', sans-serif !important" }}>{speed} KM/H</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="350"
                  step="5"
                  value={speed}
                  onChange={e => setSpeed(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#C5A059', cursor: 'pointer', height: '6px' }}
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#6C757D', marginTop: '6px', fontWeight: 700 }}>
                  <span>0 (Freight Siding)</span>
                  <span>160 (Class 1 Haul)</span>
                  <span>350 (Express HSR)</span>
                </div>
              </div>

              {/* Signal Switcher Buttons */}
              <div>
                <label style={{ fontSize: '11.5px', fontWeight: 800, color: '#A3B5AC', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '10px', fontFamily: "'Geist', sans-serif !important" }}>SIMULATE SIGNAL STATE</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  <button
                    onClick={() => { setSignalStatus('CLEAR'); setAxleTemp(68); }}
                    style={{
                      background: signalStatus === 'CLEAR' ? '#10B981' : 'rgba(255,255,255,0.06)',
                      color: signalStatus === 'CLEAR' ? '#FFFFFF' : '#A3B5AC',
                      border: 'none',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontFamily: "'Geist', sans-serif !important"
                    }}
                  >
                    GREEN CLEAR
                  </button>

                  <button
                    onClick={() => { setSignalStatus('CAUTION'); setAxleTemp(92); }}
                    style={{
                      background: signalStatus === 'CAUTION' ? '#F59E0B' : 'rgba(255,255,255,0.06)',
                      color: signalStatus === 'CAUTION' ? '#FFFFFF' : '#A3B5AC',
                      border: 'none',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontFamily: "'Geist', sans-serif !important"
                    }}
                  >
                    YELLOW CAUTION
                  </button>

                  <button
                    onClick={() => { setSignalStatus('STOP'); setAxleTemp(135); }}
                    style={{
                      background: signalStatus === 'STOP' ? '#DC2626' : 'rgba(255,255,255,0.06)',
                      color: signalStatus === 'STOP' ? '#FFFFFF' : '#A3B5AC',
                      border: 'none',
                      padding: '10px',
                      fontSize: '11px',
                      fontWeight: 900,
                      cursor: 'pointer',
                      borderRadius: '2px',
                      fontFamily: "'Geist', sans-serif !important"
                    }}
                  >
                    RED STOP
                  </button>
                </div>
              </div>

            </div>

            <div style={{ paddingTop: '1.25rem', marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#C5A059" />
              <span style={{ fontSize: '11px', color: '#A3B5AC', fontFamily: "'Manrope', sans-serif !important" }}>
                AAR M-1003 continuous telemetry protocol simulation.
              </span>
            </div>
          </div>

          {/* Right Panel: Simulated Live Telemetry Telematics */}
          <div style={{ gridColumn: 'span 7', background: '#FFFFFF', color: '#1F2937', padding: '2.25rem', borderRadius: '2px', boxShadow: '0 20px 45px rgba(0,0,0,0.3)', borderTop: '4px solid #C5A059', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem' }}>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#143D2E', margin: 0, textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
                  BOGIE &amp; AXLEBOX THERMAL TELEMETRY
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className={signalStatus === 'STOP' ? 'signal-dot-red' : 'signal-dot-green'} />
                  <span style={{ fontSize: '10.5px', fontWeight: 900, color: '#143D2E', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Geist', sans-serif !important" }}>
                    {signalStatus === 'STOP' ? 'THERMAL ALERT' : 'NOMINAL RANGE'}
                  </span>
                </div>
              </div>

              {/* Telemetry Gauge Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: `4px solid ${getSignalColor()}` }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#6C757D', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Geist', sans-serif !important" }}>AXLEBOX BEARING TEMP</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: axleTemp > 100 ? '#DC2626' : '#143D2E', fontFamily: "'Geist', sans-serif !important" }}>{axleTemp} °C</strong>
                  <span style={{ fontSize: '10px', color: '#6C757D', display: 'block', marginTop: '2px', fontWeight: 600 }}>Max threshold: 120°C</span>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: '4px solid #C5A059' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#6C757D', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Geist', sans-serif !important" }}>HAL LOAD FORCE</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: '#143D2E', fontFamily: "'Geist', sans-serif !important" }}>{Math.round(36 * (speed / 180))} TONS</strong>
                  <span style={{ fontSize: '10px', color: '#6C757D', display: 'block', marginTop: '2px', fontWeight: 600 }}>36-Ton Axle Spec</span>
                </div>

                <div style={{ background: '#F8F9FA', border: '1px solid #E5E7EB', padding: '1.15rem', borderLeft: '4px solid #143D2E' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#6C757D', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontFamily: "'Geist', sans-serif !important" }}>TRACK BRAKE SHOE FORCE</span>
                  <strong style={{ fontSize: '20px', fontWeight: 900, color: '#143D2E', fontFamily: "'Geist', sans-serif !important" }}>{signalStatus === 'STOP' ? '12.4 kN' : '0.0 kN'}</strong>
                  <span style={{ fontSize: '10px', color: '#6C757D', display: 'block', marginTop: '2px', fontWeight: 600 }}>Ductile Iron Shoe</span>
                </div>

              </div>

              {/* Telemetry Visual Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 800, color: '#143D2E', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>
                  <span>DYNAMIC STRUCTURAL ENDURANCE SPECTRUM</span>
                  <span>{Math.round((speed / 350) * 100)}% LOAD</span>
                </div>
                <div style={{ height: '10px', background: '#E5E7EB', borderRadius: '2px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: `${(speed / 350) * 100}%`, background: getSignalColor(), transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#143D2E', color: '#F5F2EB', padding: '1rem 1.25rem', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} color="#C5A059" />
                <span style={{ fontSize: '12px', fontWeight: 800, fontFamily: "'Geist', sans-serif !important" }}>
                  FRA RULE 213 CLASS 9 HIGH-SPEED TRACK COMPLIANT
                </span>
              </div>
              <a href="#contact" className="link-hover-arrow" style={{ color: '#C5A059' }}>
                <span>REQUEST SPECS</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RailwayTelemetryWidget;
