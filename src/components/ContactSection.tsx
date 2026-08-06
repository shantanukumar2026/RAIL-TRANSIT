import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    specification: 'AREMA Turnout Trackwork',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', specification: 'AREMA Turnout Trackwork', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-full-vh" style={{ background: '#143D2E', color: '#F5F2EB', borderBottom: '2px solid #C5A059', position: 'relative' }}>
      <div className="blueprint-grid-dark" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }}>
          
          {/* Left Column: Contact Information */}
          <div style={{ gridColumn: 'span 5' }}>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: '1.25rem' }}>
              <span style={{ display: 'inline-block', width: '28px', height: '2.5px', background: '#C5A059' }} />
              <span>COMMERCIAL &amp; TECHNICAL DISPATCH</span>
            </div>

            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#F5F2EB', margin: '0 0 1.25rem 0', textTransform: 'uppercase', lineHeight: 1.15, fontFamily: "'Geist', sans-serif !important" }}>
              REQUEST A TECHNICAL QUOTE
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#A3B5AC', lineHeight: 1.65, marginBottom: '2.5rem', fontWeight: 500, fontFamily: "'Manrope', sans-serif !important" }}>
              Submit your engineering drawings, AREMA Chapter 4 requirements, or AAR M-1003 volume inquiries. Our foundry sales engineers respond within 24 business hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059' }}>
                  <Phone size={18} color="#C5A059" />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#A3B5AC', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>FOUNDRY DISPATCH HOTLINE</span>
                  <strong style={{ fontSize: '15px', color: '#F5F2EB', fontWeight: 800, fontFamily: "'Geist', sans-serif !important" }}>+1 (800) 555-0199</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059' }}>
                  <Mail size={18} color="#C5A059" />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#A3B5AC', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>ENGINEERING ESTIMATING EMAIL</span>
                  <strong style={{ fontSize: '15px', color: '#F5F2EB', fontWeight: 800, fontFamily: "'Geist', sans-serif !important" }}>dispatch@abcfoundries.com</strong>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '2px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(197, 160, 89, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C5A059' }}>
                  <MapPin size={18} color="#C5A059" />
                </div>
                <div>
                  <span style={{ fontSize: '11px', color: '#A3B5AC', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', fontFamily: "'Geist', sans-serif !important" }}>FOUNDRY &amp; FORGE COMPLEX</span>
                  <strong style={{ fontSize: '15px', color: '#F5F2EB', fontWeight: 800, fontFamily: "'Geist', sans-serif !important" }}>100 Industrial Parkway, Suite 500</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quote Request Form */}
          <div style={{ gridColumn: 'span 7' }}>
            <div style={{ background: '#FFFFFF', color: '#1F2937', padding: '2.5rem', borderRadius: '2px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', borderTop: '4px solid #C5A059' }}>
              
              {formSubmitted ? (
                <div style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                  <CheckCircle2 size={48} color="#143D2E" style={{ margin: '0 auto 1rem auto' }} />
                  <h3 style={{ fontSize: '1.5rem', color: '#143D2E', margin: '0 0 0.5rem 0', fontFamily: "'Geist', sans-serif !important" }}>SPECIFICATION SUBMITTED</h3>
                  <p style={{ color: '#4B5563', fontSize: '14px', margin: 0, fontFamily: "'Manrope', sans-serif !important" }}>
                    Thank you. Our heavy rail metallurgical engineering team will review your parameters and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>FULL NAME *</label>
                      <input 
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', fontFamily: "'Manrope', sans-serif !important" }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>CORPORATE EMAIL *</label>
                      <input 
                        type="email"
                        required
                        placeholder="jdoe@railway.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', fontFamily: "'Manrope', sans-serif !important" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>PHONE NUMBER</label>
                      <input 
                        type="tel"
                        placeholder="+1 (800) 555-0199"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', fontFamily: "'Manrope', sans-serif !important" }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>COMPANY / AGENCY</label>
                      <input 
                        type="text"
                        placeholder="Class I Rail / Transit Agency"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', fontFamily: "'Manrope', sans-serif !important" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>PRODUCT CATEGORY *</label>
                    <select 
                      value={formData.specification}
                      onChange={e => setFormData({ ...formData, specification: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', fontFamily: "'Manrope', sans-serif !important" }}
                    >
                      <option value="AREMA Turnout Trackwork">AREMA Turnout Trackwork &amp; Manganese Frogs</option>
                      <option value="Forged Locomotive Axles">Forged Locomotive Axles &amp; Wheelsets</option>
                      <option value="Bogie Side Frames">Bogie Side Frames &amp; Axlebox Housings</option>
                      <option value="Catenary Hardware">Overhead Catenary Wire Hardware</option>
                      <option value="Custom Casting & Forging">Custom Metallurgy &amp; Contract Manufacturing</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '11px', fontWeight: 800, color: '#143D2E', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px', fontFamily: "'Geist', sans-serif !important" }}>PROJECT SPECIFICATION &amp; VOLUME DETAILS</label>
                    <textarea 
                      rows={3}
                      placeholder="Specify material grade (e.g., ASTM A27, manganese steel), volume units, and delivery timeline..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{ width: '100%', padding: '10px 14px', fontSize: '13px', background: '#F8F9FA', border: '1px solid #E5E7EB', outline: 'none', resize: 'vertical', fontFamily: "'Manrope', sans-serif !important" }}
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-animated"
                    style={{ 
                      background: '#143D2E', 
                      color: '#FFFFFF', 
                      border: 'none', 
                      padding: '14px 28px', 
                      fontSize: '13px', 
                      fontWeight: 900, 
                      letterSpacing: '0.08em', 
                      textTransform: 'uppercase', 
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      borderRadius: '2px',
                      boxShadow: '0 6px 16px rgba(20, 61, 46, 0.2)',
                      fontFamily: "'Geist', sans-serif !important"
                    }}
                  >
                    <span>SUBMIT REQUEST FOR QUOTE</span>
                    <Send size={15} color="#C5A059" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
