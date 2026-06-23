import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, PenLine, X, Send, CheckCircle } from 'lucide-react';

const INITIAL_TESTIMONIALS = [
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

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(INITIAL_TESTIMONIALS);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    author: '',
    role: '',
    company: '',
    quote: '',
    rating: 0
  });

  useEffect(() => {
    if (isFormOpen || submitted) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length, isFormOpen, submitted]);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.rating) return;

    const newTestimonial = {
      quote: formData.quote,
      author: formData.author,
      role: formData.role,
      company: formData.company,
      rating: formData.rating
    };

    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    setCurrentIdx(updated.length - 1);
    setIsFormOpen(false);
    setSubmitted(true);
    setFormData({ author: '', role: '', company: '', quote: '', rating: 0 });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const openForm = () => {
    setIsFormOpen(true);
    setSubmitted(false);
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
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className={`testimonial-card ${idx === currentIdx ? 'active' : ''}`}
                style={{ display: idx === currentIdx ? 'flex' : 'none' }}
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
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentIdx ? 'active' : ''}`}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="review-success-banner">
            <CheckCircle size={20} />
            <span>Thank you! Your review has been added to the carousel.</span>
          </div>
        )}

        {/* Write a Review Button */}
        {!isFormOpen && (
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button className="write-review-btn" onClick={openForm} id="write-review-btn">
              <PenLine size={18} />
              Write a Review
            </button>
          </div>
        )}

        {/* Review Submission Form */}
        {isFormOpen && (
          <div className="review-form-container">
            <div className="review-form-header">
              <div>
                <h3 className="review-form-title">Share Your Experience</h3>
                <p className="review-form-subtitle">Your feedback helps us grow and helps others trust us.</p>
              </div>
              <button
                className="review-form-close"
                onClick={() => setIsFormOpen(false)}
                aria-label="Close form"
              >
                <X size={20} />
              </button>
            </div>

            <form className="review-form" onSubmit={handleSubmit}>
              {/* Star Rating */}
              <div className="review-rating-group">
                <label className="review-label">Your Rating <span style={{ color: 'var(--accent-gold)' }}>*</span></label>
                <div className="star-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-btn ${star <= (hoverRating || formData.rating) ? 'filled' : ''}`}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star size={28} fill={star <= (hoverRating || formData.rating) ? 'var(--accent-gold)' : 'transparent'} color={star <= (hoverRating || formData.rating) ? 'var(--accent-gold)' : 'var(--text-muted)'} />
                    </button>
                  ))}
                  {formData.rating > 0 && (
                    <span className="star-label">
                      {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][formData.rating]}
                    </span>
                  )}
                </div>
              </div>

              <div className="review-form-row">
                <div className="review-form-group">
                  <label className="review-label">Full Name <span style={{ color: 'var(--accent-gold)' }}>*</span></label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="e.g. Engr. Chukwudi Nwosu"
                    className="review-input"
                    required
                  />
                </div>
                <div className="review-form-group">
                  <label className="review-label">Role / Designation</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="e.g. Project Manager"
                    className="review-input"
                  />
                </div>
              </div>

              <div className="review-form-group">
                <label className="review-label">Company / Project Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Lekki Gardens Estate"
                  className="review-input"
                />
              </div>

              <div className="review-form-group">
                <label className="review-label">Your Review <span style={{ color: 'var(--accent-gold)' }}>*</span></label>
                <textarea
                  name="quote"
                  value={formData.quote}
                  onChange={handleChange}
                  placeholder="Tell others about your experience working with DEGODROD Construction…"
                  className="review-textarea"
                  required
                  minLength={30}
                />
              </div>

              <div className="review-form-actions">
                <button type="button" className="review-cancel-btn" onClick={() => setIsFormOpen(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="review-submit-btn"
                  disabled={!formData.rating || !formData.author || !formData.quote}
                >
                  <Send size={16} /> Submit Review
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
