import React from 'react';
import { HardHat, Heart } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={() => handleScrollTo('home')}>
            <HardHat className="logo-icon" />
            <div className="logo-text">
              DEGODROD
              <span>CONSTRUCTION LIMITED</span>
            </div>
          </div>
          <p>
            Lagos' trusted civil engineering partner. We build and reinforce standard foundations, supply structural concrete materials, and broker premium properties with verified documentation.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">Quick Navigation</h4>
          <ul className="footer-menu">
            <li>
              <a href="#home" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('about'); }}>
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('services'); }}>
                Our Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('portfolio'); }}>
                Our Projects
              </a>
            </li>
            <li>
              <a href="#estimator" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('estimator'); }}>
                Project Estimator
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-menu-link" onClick={(e) => { e.preventDefault(); handleScrollTo('contact'); }}>
                Contact Details
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">Contact Office</h4>
          <ul className="footer-menu" style={{ pointerEvents: 'none' }}>
            <li className="footer-menu-link">Lagos, Nigeria</li>
            <li className="footer-menu-link">progodsuccessservices@gmail.com</li>
            <li className="footer-menu-link">+234 816 319 3688</li>
            <li className="footer-menu-link">Mon - Sat: 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} DEGODROD Construction Limited. All Rights Reserved.
        </div>
        
        {/* Special Birthday Dedication */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-gold)' }}>
          <span>Happy Birthday, Dad!</span>
          <Heart size={14} fill="var(--accent-gold)" />
          <span>Built with love.</span>
        </div>

        <ul className="footer-legal">
          <li><a href="#" className="footer-legal-link">Privacy Policy</a></li>
          <li><a href="#" className="footer-legal-link">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
}
