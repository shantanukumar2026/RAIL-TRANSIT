import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface CompanyIntroProps {
  lang: Language;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="company-overview" style={{ background: '#FFFFFF', padding: '48px 5vw', borderBottom: '1px solid #E2E8F0', scrollMarginTop: '100px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '6px 14px', borderRadius: '0px', marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '0px', background: '#10B981' }} />
              <span style={{ color: '#047857', fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                {t.whoWeAre}
              </span>
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0F291E', letterSpacing: '-0.02em', lineHeight: 1.25, marginBottom: '16px' }}>
              {t.introTitle}
            </h2>
            <p style={{ fontSize: '16px', color: '#15803D', fontWeight: 600, lineHeight: 1.5, marginBottom: '16px' }}>
              {t.introSub}
            </p>
            <p style={{ fontSize: '15px', color: '#15803D', lineHeight: 1.7, marginBottom: '16px' }}>
              {t.introP1}
            </p>
            <p style={{ fontSize: '15px', color: '#15803D', lineHeight: 1.7, marginBottom: '32px' }}>
              {t.introP2}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '2px solid #064E3B', paddingTop: '24px' }}>
              <div>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', display: 'block', lineHeight: 1 }}>18+</span>
                <span style={{ fontSize: '13px', color: '#15803D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.statPlants}</span>
              </div>
              <div>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#195B34', display: 'block', lineHeight: 1 }}>250+</span>
                <span style={{ fontSize: '13px', color: '#15803D', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.statMixers}</span>
              </div>
              <div>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#064E3B', display: 'block', lineHeight: 1 }}>5M+</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.statVolume}</span>
              </div>
              <div>
                <span style={{ fontSize: '32px', fontWeight: 900, color: '#059669', display: 'block', lineHeight: 1 }}>-50%</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t.statReduction}</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '0px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)', border: '2px solid #059669', background: '#042F2E', position: 'relative', height: '480px' }}>
              <video
                src="https://www.megafraud.club/video/282244_small.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', top: '16px', right: '16px', background: 'rgba(6, 78, 59, 0.9)', color: '#34D399', border: '1px solid #34D399', padding: '6px 12px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', pointerEvents: 'none' }}>
                LIVE FOUNDRY VIDEO
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-24px',
              left: '-24px',
              background: '#064E3B',
              color: '#FFFFFF',
              padding: '24px',
              borderRadius: '0px',
              maxWidth: '320px',
              borderLeft: '4px solid #10B981',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
              zIndex: 10
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A7F3D0', marginBottom: '4px' }}>
                ABC FOUNDRIES & MEGA FORGE OPERATIONS
              </div>
              <p style={{ fontSize: '13px', margin: 0, opacity: 0.9, lineHeight: 1.4 }}>
                Computerized electric induction melting with 3D solidification modeling & AAR M-1003 metallurgical quality control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
