import React from 'react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact">
      <div className="footer-bg-overlay" />

      {/* Upper Grid */}
      <div className="footer-top-row">
        {/* Column 1: Brand Info */}
        <div className="footer-brand">
          <div className="footer-brand-logo-container">
            <a href="#" style={{ display: 'inline-block' }}>
              <Logo className="app-logo footer-logo-img" variant="dark" />
            </a>
            <div className="footer-logo-divider" />
            <span className="footer-brand-subtitle">Rail & Transit Castings & Forgings</span>
          </div>
          <p className="footer-brand-desc">
            ABC FOUNDRIES & ABC Forge deliver precision-engineered rail trackwork castings, drop-forged axles, bogies, turnout components, and catenary hardware for global heavy haul and transit networks.
          </p>
          <div className="footer-contact-info">
            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
              <div>
                ABC FOUNDRIES & Forge Global Network<br />
                Austin & Chicago Headquarters, USA
              </div>
            </div>
            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <span>+1 (512) 782-8880</span>
            </div>
            <div className="footer-contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /></svg>
              <span>sales@abcfoundries.com</span>
            </div>
          </div>
        </div>

        {/* Column 2: Core Sections */}
        <div>
          <h4 className="footer-column-title">Core Topics</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#about" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Overview &amp; Objectives
              </a>
            </li>
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Scope &amp; Market
              </a>
            </li>
            <li>
              <a href="#manufacturing" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Standards (AREMA / AAR)
              </a>
            </li>
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Authorities &amp; Transit Agencies
              </a>
            </li>
            <li>
              <a href="#sustainability" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Testings &amp; Metallurgical NDT
              </a>
            </li>
            <li>
              <a href="#knowledge" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Approvals &amp; Certifications
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Product Series */}
        <div>
          <h4 className="footer-column-title">Product Series</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                1000-3000 Trackside Castings
              </a>
            </li>
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                4000-6000 Rolling Stock Forgings
              </a>
            </li>
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                7000-8000 Couplers &amp; Yokes
              </a>
            </li>
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                9000-10000 Catenary Arms
              </a>
            </li>
            <li>
              <a href="#products" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                11000-12000 Trench &amp; Pull Boxes
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Rail Markets */}
        <div>
          <h4 className="footer-column-title">Rail Markets</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Class I Freight Railroads
              </a>
            </li>
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                High-Speed Rail Corridors
              </a>
            </li>
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Urban Metro &amp; Rapid Transit
              </a>
            </li>
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Commuter Passenger Rail
              </a>
            </li>
            <li>
              <a href="#markets" className="footer-link-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                Rail Locomotive OEMs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Connect */}
        <div>
          <h4 className="footer-column-title">Connect With Us</h4>
          <p className="footer-connect-desc">
            Subscribe for technical bulletins, AAR M-1003 updates, and metallurgical engineering insights.
          </p>
          <div className="footer-subscribe-box">
            <input type="email" placeholder="Engineering email address" className="footer-subscribe-input" />
            <button className="footer-subscribe-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          <div className="footer-social-section">
            <span className="footer-social-label">Follow ABC FOUNDRIES</span>
            <div className="footer-social-icons">
              <a href="#facebook" className="footer-social-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#linkedin" className="footer-social-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#youtube" className="footer-social-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
              <a href="#instagram" className="footer-social-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Footer: Trust Badges Strip */}
      <div className="footer-badges-strip">
        <div className="footer-badges-grid">
          <div className="footer-badge-item">
            <div className="footer-badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 11 11 13 15 9" /></svg>
            </div>
            <div className="footer-badge-text-group">
              <span className="footer-badge-title">AAR M-1003 Certified</span>
              <span className="footer-badge-desc">Strict quality assurance compliance.</span>
            </div>
          </div>
          <div className="footer-badge-item">
            <div className="footer-badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 2 2 4a7 7 0 0 1-10 14z" /><path d="M19 2c-2.26 4.33-5.27 7.14-8 10" /></svg>
            </div>
            <div className="footer-badge-text-group">
              <span className="footer-badge-title">Zero Defect NDT</span>
              <span className="footer-badge-desc">100% ultrasonic & magnetic flaw scanning.</span>
            </div>
          </div>
          <div className="footer-badge-item">
            <div className="footer-badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
            </div>
            <div className="footer-badge-text-group">
              <span className="footer-badge-title">AREMA Chapter 4</span>
              <span className="footer-badge-desc">Trackwork manual compliance guarantee.</span>
            </div>
          </div>
          <div className="footer-badge-item">
            <div className="footer-badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div className="footer-badge-text-group">
              <span className="footer-badge-title">Heavy Axle Capacity</span>
              <span className="footer-badge-desc">Engineered for 36-ton freight wheelsets.</span>
            </div>
          </div>
          <div className="footer-badge-item">
            <div className="footer-badge-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div className="footer-badge-text-group">
              <span className="footer-badge-title">Global Foundry Network</span>
              <span className="footer-badge-desc">USA & Global forging complexes.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-content">
          <div className="footer-bottom-left">
            <span>&copy; 2026 ABC FOUNDRIES &amp; ABC Forge. All rights reserved.</span>
            <span>|</span>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Use</a>
          </div>
          <div className="footer-bottom-right">
            Global Leader in Rail &amp; Transit Castings &amp; Forgings.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
