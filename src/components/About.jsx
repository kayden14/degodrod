import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Hammer, Compass } from 'lucide-react';

function Counter({ target, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          if (isNaN(end)) return;

          const totalFrames = 60;
          const stepTime = duration / totalFrames;
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeProgress = progress * (2 - progress);
            const currentCount = Math.round(start + easeProgress * (end - start));

            setCount(currentCount);

            if (frame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [target, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Our Legacy</span>
        <h2 className="section-title">About DEGODROD</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            Established in the heart of Lagos, Nigeria, DEGODROD Construction Limited has grown from a visionary engineering consulting practice into a full-service civil engineering powerhouse. We design, build, and secure structures that stand the test of time.
          </p>
          <p>
            Our operational ethos blends rigorous structural analysis with localized geographical expertise. We navigate Lagos' unique marshy and coastal terrains through state-of-the-art piling and drilling foundation systems. Simultaneously, our block manufacturing plant produces high-strength vibrated blocks and interlocking paving stones that serve major infrastructure developers across Nigeria.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <ShieldCheck className="highlight-icon" />
              <h3 className="highlight-title">Structural Safety</h3>
              <p className="highlight-desc">Rigorous engineering calculations matching international safety standards.</p>
            </div>
            <div className="highlight-card">
              <Award className="highlight-icon" />
              <h3 className="highlight-title">Premium Materials</h3>
              <p className="highlight-desc">In-house manufacturing of vibrated blocks and interlocking tiles.</p>
            </div>
            <div className="highlight-card">
              <Hammer className="highlight-icon" />
              <h3 className="highlight-title">Turnkey Contracts</h3>
              <p className="highlight-desc">Full project execution from soil testing to final property documentation.</p>
            </div>
            <div className="highlight-card">
              <Compass className="highlight-icon" />
              <h3 className="highlight-title">Local Knowledge</h3>
              <p className="highlight-desc">Expert navigation of Lagos geotechnical profiles and regulatory requirements.</p>
            </div>
          </div>
        </div>

        <div className="about-profile">
          <h3 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
            Leadership Statement
          </h3>
          <p className="profile-quote">
            "We believe that civil engineering is more than just stacking concrete; it is the physical foundation upon which communities grow and families thrive. At DEGODROD, every pile driven and every block vibrated is a testament to our commitment to Nigeria's structural future."
          </p>

          <div className="profile-info">
            <div className="profile-avatar">
              MD
            </div>
            <div className="profile-name">
              <h4>Engr. Ugwo Godwin David</h4>
              <p>Managing Director & CEO</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">
                <Counter target="20" suffix="+" />
              </div>
              <div className="stat-label">Years Exp</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                <Counter target="300" suffix="+" />
              </div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                <Counter target="100" suffix="%" />
              </div>
              <div className="stat-label">Safety Record</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
