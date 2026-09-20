import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Zap, TrainTrack, ChevronLeft, ChevronRight, Play, Pause, Layers } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onRequestQuoteClick?: () => void;
  onWatchVideoClick?: () => void;
}

const slidesData = [
  {
    id: 1,
    tag: '01 ROLLING STOCK',
    eyebrow: 'WESTPOINT GROUP RAIL & TRANSIT MANUFACTURING',
    headline: 'BUILT TO MOVE THE WORLD',
    desc: 'Westpoint Group Companies is a global leader in precision-engineered castings and forgings for rail and transit applications. Turnout frogs, forged axles, bogies, and catenary hardware built for strength and made to last.',
    mediaType: 'image',
    mediaSrc: '/images/istockphoto-1196704251-2048x2048.jpg',
    badgeTitle: 'WESTPOINT FOUNDRY & FORGING OPERATIONS',
    badgeSub: 'Electric induction melting & 5-axis CNC machining',
    cadSpec: 'AAR M-201 GRADE E STEEL'
  },
  {
    id: 2,
    tag: '02 TURNOUT FROGS',
    eyebrow: 'AREMA CHAPTER 4 CERTIFIED TRACKWORK',
    headline: 'PRECISION TURNOUT & SWITCH FROGS',
    desc: 'Austenitic manganese turnout frogs, heavy tie plates, and guard rail assemblies tested for extreme 36-ton axle load endurance across transcontinental freight lines.',
    mediaType: 'image',
    mediaSrc: '/images/turnout_frog_manganese_stock.jpg',
    badgeTitle: 'HEAVY HAUL TURNOUT MANUFACTURING',
    badgeSub: '100% volumetric NDT & 3D solidification modeling',
    cadSpec: 'IRS T-29 AUSTENITIC MN'
  },
  {
    id: 3,
    tag: '03 LOCOMOTIVE BOGIES',
    eyebrow: 'AAR M-1003 QUALITY ASSURANCE',
    headline: 'LOCOMOTIVE BOGIES & AXLE HOUSINGS',
    desc: 'Finish-machined locomotive axleboxes, friction wedges, and brake beam head assemblies forged and machined to tight ±0.05mm tolerances.',
    mediaType: 'image',
    mediaSrc: '/images/locomotive_wheelset_stock.jpg',
    badgeTitle: 'LOCOMOTIVE WHEELSET & BOGIE ASSEMBLIES',
    badgeSub: 'AAR M-201 & ASTM A668 certified metallurgical engineering',
    cadSpec: 'CASNUB 22HS / 25T ENDURANCE'
  },
  {
    id: 4,
    tag: '04 5-AXIS CNC',
    eyebrow: 'ROBOTIC 5-AXIS CNC MACHINING',
    headline: 'PRECISION MACHINED RAIL COMPONENTS',
    desc: 'State-of-the-art 5-axis CNC heavy milling and turning complexes delivering flawless AREMA and AAR compliance across North American rail networks.',
    mediaType: 'image',
    mediaSrc: '/images/real_cnc_machining_stock.jpg',
    badgeTitle: '5-AXIS CNC MACHINING COMPLEX',
    badgeSub: 'Sub-millimeter dimensional inspection & CMM auditing',
    cadSpec: '±0.05MM TOLERANCE CMM'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onRequestQuoteClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  // GSAP Animation Trigger on Slide Change
  useEffect(() => {
    if (textRef.current && mediaRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' }
      );
      gsap.fromTo(
        mediaRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [currentSlide]);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const slide = slidesData[currentSlide];

  return (
    <section 
      className="hero-gradient-bg"
      style={{ 
        color: '#FFFFFF', 
        padding: '3.5rem 0 0 0',
        borderBottom: '2px solid #4CAF50',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'center' }}>
          
          {/* Left Column (6 Cols): Animated Content Slide */}
          <div style={{ gridColumn: 'span 6' }}>
            <div ref={textRef}>
              
              {/* Eyebrow Label */}
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem', letterSpacing: '0.2em' }}>
                <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#4CAF50' }} />
                <span style={{ color: '#A5D6A7', fontWeight: 900 }}>{slide.eyebrow}</span>
              </div>

              {/* Headline in Geist Font */}
              <h1 
                style={{ 
                  fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', 
                  fontWeight: 900, 
                  lineHeight: 1.05, 
                  color: '#FFFFFF', 
                  letterSpacing: '-0.025em', 
                  margin: '0 0 1.25rem 0',
                  textTransform: 'uppercase',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                {slide.headline}
              </h1>

              {/* Subheadline in Manrope Font */}
              <p 
                style={{ 
                  fontSize: '1.05rem', 
                  color: '#FFFFFF', 
                  lineHeight: 1.6, 
                  margin: '0 0 2rem 0',
                  fontWeight: 600,
                  maxWidth: '560px',
                  fontFamily: "'Manrope', sans-serif !important"
                }}
              >
                {slide.desc}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <button
                  onClick={onExploreClick}
                  className="btn-animated"
                  style={{
                    padding: '14px 28px',
                    fontSize: '12.5px',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    borderRadius: '4px',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                >
                  <Layers size={16} />
                  <span>EXPLORE PRODUCT SPECIFICATIONS</span>
                  <ArrowRight size={15} color="currentColor" />
                </button>

                <button
                  onClick={onRequestQuoteClick}
                  style={{
                    padding: '14px 24px',
                    fontSize: '12.5px',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    borderRadius: '4px',
                    background: 'rgba(255, 255, 255, 0.12)',
                    color: '#FFFFFF',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(4px)',
                    transition: 'all 0.2s',
                    fontFamily: "'Manrope', sans-serif !important"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#1B5E20'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)'; e.currentTarget.style.color = '#FFFFFF'; }}
                >
                  <span>REQUEST QUOTE</span>
                </button>
              </div>

              {/* Quality Compliance Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.25)', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={15} color="#81C784" />
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>AREMA CHAPTER 4</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={15} color="#81C784" />
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>AAR M-1003 QA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle size={15} color="#81C784" />
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.05em', fontFamily: "'Manrope', sans-serif !important" }}>FRA RULE 213</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (6 Cols): Main Media Viewport & Interactive Thumbnail Selector */}
          <div style={{ gridColumn: 'span 6', position: 'relative' }}>
            
            {/* Main Image Frame with Floating Tech Chip */}
            <div 
              ref={mediaRef}
              style={{ 
                position: 'relative', 
                borderRadius: '2px', 
                overflow: 'hidden', 
                border: '2px solid #4CAF50',
                background: '#144818',
                height: '340px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.35)'
              }}
            >
              {slide.mediaType === 'video' ? (
                <video 
                  key={slide.mediaSrc}
                  src={slide.mediaSrc} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <img 
                  key={slide.mediaSrc}
                  src={slide.mediaSrc} 
                  alt={slide.headline} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              )}

              {/* Floating Top CAD Spec Chip */}
              <div 
                style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  right: '12px', 
                  background: 'rgba(15, 41, 30, 0.88)', 
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #4CAF50',
                  borderRadius: '2px',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2
                }}
              >
                <Layers size={13} color="#81C784" />
                <span style={{ fontSize: '10px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.08em', fontFamily: "'Manrope', sans-serif !important" }}>
                  {slide.cadSpec}
                </span>
              </div>

              {/* Clean Media Tag Overlay */}
              <div style={{ position: 'absolute', bottom: '0.85rem', left: '0.85rem', right: '0.85rem', background: 'rgba(27, 94, 32, 0.92)', backdropFilter: 'blur(6px)', padding: '10px 14px', borderLeft: '4px solid #4CAF50' }}>
                <strong style={{ fontSize: '11.5px', fontWeight: 900, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>
                  {slide.badgeTitle}
                </strong>
                <span style={{ fontSize: '10.5px', color: '#FAF6EE', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>
                  {slide.badgeSub}
                </span>
              </div>
            </div>

            {/* CREATIVE INTERACTIVE THUMBNAIL SELECTOR STRIP */}
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#A5D6A7', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif !important" }}>
                  SELECT SHOWCASE SLIDE THUMBNAIL ({currentSlide + 1}/4)
                </span>

                {/* Play / Pause & Manual Arrow Controls */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? 'Pause Auto Play' : 'Play Auto Play'}
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '2px',
                      background: isPlaying ? '#144818' : '#FAF6EE',
                      border: '1px solid #4CAF50',
                      color: isPlaying ? '#FFFFFF' : '#1B5E20',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  </button>

                  <button
                    onClick={goToPrevSlide}
                    aria-label="Previous slide"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '2px',
                      background: '#144818',
                      border: '1px solid #4CAF50',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#144818'; e.currentTarget.style.color = '#FFFFFF'; }}
                  >
                    <ChevronLeft size={15} />
                  </button>

                  <button
                    onClick={goToNextSlide}
                    aria-label="Next slide"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '2px',
                      background: '#144818',
                      border: '1px solid #4CAF50',
                      color: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#FAF6EE'; e.currentTarget.style.color = '#1B5E20'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#144818'; e.currentTarget.style.color = '#FFFFFF'; }}
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* 4 Interactive Thumbnail Cards Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                {slidesData.map((item, idx) => {
                  const isActive = currentSlide === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        background: isActive ? '#144818' : 'rgba(20, 72, 24, 0.45)',
                        border: isActive ? '2px solid #81C784' : '1px solid rgba(76, 175, 80, 0.3)',
                        borderRadius: '2px',
                        padding: '5px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: isActive ? '0 0 14px rgba(129, 199, 132, 0.4)' : 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px'
                      }}
                      onMouseEnter={e => {
                        if (!isActive) e.currentTarget.style.border = '1px solid #81C784';
                      }}
                      onMouseLeave={e => {
                        if (!isActive) e.currentTarget.style.border = '1px solid rgba(76, 175, 80, 0.3)';
                      }}
                    >
                      {/* Mini Thumbnail Image Frame */}
                      <div style={{ height: '48px', width: '100%', overflow: 'hidden', position: 'relative', borderRadius: '1px', background: '#1B5E20' }}>
                        <img 
                          src={item.mediaSrc} 
                          alt={item.tag}
                          style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover', 
                            opacity: isActive ? 1 : 0.65,
                            transition: 'all 0.25s ease',
                            transform: isActive ? 'scale(1.05)' : 'scale(1)'
                          }} 
                        />
                        {isActive && (
                          <div style={{ position: 'absolute', top: '4px', right: '4px', background: '#81C784', color: '#1B5E20', fontSize: '7.5px', fontWeight: 900, padding: '1px 4px', borderRadius: '1px', fontFamily: "'Manrope', sans-serif !important" }}>
                            ACTIVE
                          </div>
                        )}
                      </div>

                      {/* Thumbnail Title */}
                      <span 
                        style={{ 
                          fontSize: '9px', 
                          fontWeight: 900, 
                          color: isActive ? '#FFFFFF' : '#A5D6A7', 
                          letterSpacing: '0.04em', 
                          textTransform: 'uppercase',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: 'block',
                          fontFamily: "'Manrope', sans-serif !important"
                        }}
                      >
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Embedded 4-Metric Technical Bar */}
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          background: '#144818', 
          borderTop: '1.5px solid #4CAF50', 
          padding: '1.25rem 0',
          marginTop: '2.5rem'
        }}
      >
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <TrainTrack size={20} color="#81C784" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>NORTH AMERICAN FOUNDRY</strong>
                <span style={{ fontSize: '11px', color: '#FAF6EE', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Heavy rail manufacturing leader</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.5rem' }}>
              <ShieldCheck size={20} color="#81C784" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>36-TON HAL RATING</strong>
                <span style={{ fontSize: '11px', color: '#FAF6EE', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Heavy freight axle load endurance</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.5rem' }}>
              <Zap size={20} color="#81C784" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>±0.05MM CNC TOLERANCE</strong>
                <span style={{ fontSize: '11px', color: '#FAF6EE', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Robotic 5-axis heavy machining</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid rgba(255, 255, 255, 0.2)', paddingLeft: '1.5rem' }}>
              <ShieldCheck size={20} color="#81C784" />
              <div>
                <strong style={{ fontSize: '13px', fontWeight: 900, color: '#FFFFFF', display: 'block', fontFamily: "'Manrope', sans-serif !important" }}>100% VOLUMETRIC NDT</strong>
                <span style={{ fontSize: '11px', color: '#FAF6EE', fontFamily: "'Manrope', sans-serif !important", fontWeight: 600 }}>Ultrasonic &amp; magnetic flaw scan</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

