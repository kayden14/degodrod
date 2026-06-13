import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url('/assets/hero_bg.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          Lagos, Nigeria
        </div>
        <h1 className="hero-title">
          Building the Future of <span>Lagos Infrastructure</span>
        </h1>
        <p className="hero-desc">
          DEGODROD Construction Limited delivers elite civil engineering, piling foundation work, high-durability vibrated blocks, interlocks, and premium real estate development. Guided by precision, integrity, and safety.
        </p>
        <div className="hero-ctas">
          <button 
            className="btn btn-primary"
            onClick={() => handleScrollTo('portfolio')}
          >
            Explore Projects <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
}
