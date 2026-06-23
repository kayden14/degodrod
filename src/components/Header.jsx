import React, { useState, useEffect } from 'react';
import { HardHat, Menu, X, PhoneCall } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'services', 'portfolio', 'properties', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}>
            <HardHat className="logo-icon" />
            <div className="logo-text">
              DEGODROD
              <span>CONSTRUCTION LIMITED</span>
            </div>
          </a>

          <nav className="nav-links">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
            >
              About
            </a>
            <a 
              href="#services" 
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('portfolio'); }}
            >
              Projects
            </a>
            <a 
              href="#properties" 
              className={`nav-link ${activeSection === 'properties' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('properties'); }}
            >
              Properties
            </a>
            <a 
              href="#estimator" 
              className={`nav-link ${activeSection === 'estimator' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('estimator'); }}
            >
              Estimator
            </a>
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
            >
              Contact
            </a>
          </nav>

          <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button 
              className="nav-cta"
              onClick={() => handleLinkClick('estimator')}
            >
              Get an Estimate
            </button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={toggleMobileMenu} aria-label="Close Menu">
          <X />
        </button>
        
        <div className="mobile-nav-links">
          <a 
            href="#home" 
            className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('services'); }}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            className={`mobile-nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('portfolio'); }}
          >
            Projects
          </a>
          <a 
            href="#properties" 
            className={`mobile-nav-link ${activeSection === 'properties' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('properties'); }}
          >
            Properties
          </a>
          <a 
            href="#estimator" 
            className={`mobile-nav-link ${activeSection === 'estimator' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('estimator'); }}
          >
            Estimator
          </a>
          <a 
            href="#contact" 
            className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }}
          >
            Contact
          </a>
        </div>

        <a 
          href="#estimator" 
          className="mobile-nav-cta"
          onClick={(e) => { e.preventDefault(); handleLinkClick('estimator'); }}
        >
          Get an Estimate
        </a>
      </div>
    </>
  );
}
