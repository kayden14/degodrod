import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'building',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `DEGODROD Construction Enquiry - ${formData.name}`;
    let body = `Hello DEGODROD Construction,\n\n`;
    body += `My name is ${formData.name}.\n`;
    body += `Email: ${formData.email}\n`;
    body += `Phone: ${formData.phone}\n`;
    body += `Service Selected: ${formData.service.toUpperCase()}\n\n`;
    body += `Message:\n${formData.message}\n\n`;
    body += `Sent via DEGODROD Portfolio Website.`;

    const mailto = `mailto:progodsuccessservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Connect</span>
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info-panel">
          <div>
            <h3 className="contact-info-title">Let's Discuss Your Project</h3>
            <p className="contact-info-desc" style={{ marginTop: '1rem' }}>
              Whether you need to secure a deep foundation with bored piles, source grade-A vibrated concrete blocks, or design a luxury home from scratch, DEGODROD Construction is your trusted partner.
            </p>
          </div>

          <div className="contact-details-list">
            <a href="mailto:progodsuccessservices@gmail.com" className="contact-item-link">
              <div className="contact-item-icon">
                <Mail />
              </div>
              <div className="contact-item-text">
                <span className="contact-item-label">Email Us</span>
                <span className="contact-item-value">progodsuccessservices@gmail.com</span>
              </div>
            </a>

            {/* Lagos Head Office */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>Lagos Head Office</h4>
              
              <a href="tel:+2348163193688" className="contact-item-link">
                <div className="contact-item-icon">
                  <Phone />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Call Direct</span>
                  <span className="contact-item-value">+234 816 319 3688</span>
                </div>
              </a>

              <a href="https://wa.me/2348163193688?text=Hello%20DEGODROD%20Construction%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-item-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25d366' }}>
                  <MessageSquare />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">WhatsApp Chat</span>
                  <span className="contact-item-value">+234 816 319 3688</span>
                </div>
              </a>

              <div className="contact-item-link" style={{ cursor: 'default' }}>
                <div className="contact-item-icon">
                  <MapPin />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Office Location</span>
                  <span className="contact-item-value">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Osun State Office */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '0.25rem', fontWeight: '700' }}>Osun State Office</h4>
              
              <a href="tel:+2348067888011" className="contact-item-link">
                <div className="contact-item-icon">
                  <Phone />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Call Direct</span>
                  <span className="contact-item-value">+234 806 788 8011</span>
                </div>
              </a>

              <a href="https://wa.me/2348067888011?text=Hello%20DEGODROD%20Construction%2C%20I%20would%20like%20to%20inquire%20about%20your%20Osun%20State%20services%20and%20properties." target="_blank" rel="noopener noreferrer" className="contact-item-link">
                <div className="contact-item-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25d366' }}>
                  <MessageSquare />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">WhatsApp Chat</span>
                  <span className="contact-item-value">+234 806 788 8011</span>
                </div>
              </a>

              <div className="contact-item-link" style={{ cursor: 'default' }}>
                <div className="contact-item-icon">
                  <MapPin />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">Office Location</span>
                  <span className="contact-item-value">Adedoyin Way, Old Nitel Area,<br />Parakin-Obalufe, Ile-Ife, Osun State</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Godwin David" 
                className="form-input" 
                required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="john@example.com" 
                  className="form-input" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  placeholder="+234..." 
                  className="form-input" 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Service Required</label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className="form-select"
              >
                <option value="building">Civil & Building Construction</option>
                <option value="consulting">Contracts & Consultations</option>
                <option value="materials">Vibrated Blocks & Interlocks</option>
                <option value="piling">Piling & Drilling Foundations</option>
                <option value="brokerage">Property & Land Brokerage</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Describe your project size, budget, and location in Lagos..." 
                className="form-textarea" 
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
