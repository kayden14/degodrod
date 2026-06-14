import React, { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMove = (e) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    // Get mouse or touch x position relative to container
    let clientX = 0;
    if (e.type.includes('mouse')) {
      if (e.buttons !== 1) return; // Only process if mouse button is pressed down
      clientX = e.clientX;
    } else if (e.type.includes('touch')) {
      clientX = e.touches[0].clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const beforeImg = "/assets/before_construction_site_1781474804711.png";
  const afterImg = "/assets/after_construction_site_1781474825472.png";

  return (
    <section className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Transformation</span>
        <h2 className="section-title">Before & After</h2>
      </div>

      <div 
        className="ba-slider-container" 
        ref={sliderRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={handleMove} // allow clicking to jump
      >
        {/* Underneath image (After) */}
        <div className="ba-img ba-after">
          <img src={afterImg} alt="Finished Luxury Property" />
          <div className="ba-label ba-label-after">AFTER</div>
        </div>

        {/* Top image (Before) */}
        <div 
          className="ba-img ba-before" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImg} alt="Raw Construction Site" />
          <div className="ba-label ba-label-before">BEFORE</div>
        </div>

        {/* Slider Handle */}
        <div 
          className="ba-handle" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="ba-handle-line"></div>
          <div className="ba-handle-btn">
            <ArrowLeftRight size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
