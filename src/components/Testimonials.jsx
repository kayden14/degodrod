import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonialsData = [
    {
      quote: "DEGODROD supplied all the vibrated blocks and interlocking tiles for our estate development in Lekki. Their compressive strength is unmatched. Out of 40,000 blocks supplied, we had zero load-bearing structural failures. Highly recommended for any serious developer in Lagos.",
      author: "Engr. Babajide Alao",
      role: "Lead Resident Project Manager",
      company: "Apex Meridian Properties",
      rating: 5
    },
    {
      quote: "Geotechnical foundation work on Victoria Island sands is notorious for causing settlement issues. DEGODROD handled our bored piling installation to a depth of 35 meters with precision. Their team brought in specialized rigs, executed flawless concrete pours, and delivered PIT reports on time.",
      author: "Chief Adeleke Cole",
      role: "Principal Developer",
      company: "Lakeside Waterfront Towers",
      rating: 5
    },
    {
      quote: "Building a home while living abroad is extremely stressful, but Engr. Success and the team at DEGODROD were fantastic. They handled my design drafts, physical construction, and secured the Lagos state building approvals (LASBCA) and C of O documents without any hassle. A truly transparent turnkey partner.",
      author: "Mrs. Ngozi Okoye",
      role: "Home Owner",
      company: "Banana Island Villa Client",
      rating: 5
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 6000); // Rotate every 6s

    return () => clearInterval(timer);
  }, [testimonialsData.length]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Client Stories</span>
        <h2 className="section-title">Testimonials</h2>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-carousel">
          <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="testimonial-card-wrapper">
            {testimonialsData.map((item, idx) => (
              <div 
                key={idx} 
                className={`testimonial-card ${idx === currentIdx ? 'active' : ''}`}
                style={{ 
                  display: idx === currentIdx ? 'flex' : 'none' 
                }}
              >
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
                  ))}
                </div>

                <Quote className="quote-icon" size={48} />
                <p className="testimonial-text">"{item.quote}"</p>
                
                <div className="testimonial-author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <p className="author-details">{item.role} &bull; <span style={{ color: 'var(--accent-gold)' }}>{item.company}</span></p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={handleNext} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {testimonialsData.map((_, idx) => (
            <button 
              key={idx} 
              className={`indicator-dot ${idx === currentIdx ? 'active' : ''}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
