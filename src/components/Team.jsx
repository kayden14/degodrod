import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Engr. Ugwo Godwin David",
      role: "Managing Director / CEO",
      credentials: "B.Eng, MNSE, COREN",
      image: "/assets/ceo_portrait.png",
      bio: "Founding visionary with 20+ years driving structural innovation across Nigeria."
    }
  ];

  return (
    <section id="team" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Leadership</span>
        <h2 className="section-title">Meet Our Experts</h2>
      </div>

      <div className="team-grid">
        {teamMembers.map(member => (
          <div className="team-card" key={member.id}>
            <div className="team-img-wrapper">
              <img src={member.image} alt={member.name} className="team-img" />
              <div className="team-socials">
                <a href="tel:+2348167888011" aria-label="Direct Phone"><Phone size={18} /></a>
                <a href="mailto:progodsuccessservices@gmail.com" aria-label="Email Contact"><Mail size={18} /></a>
                <a href="https://x.com/UgwoGodwinDavid" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.836L1.875 2.25h7.102l4.264 5.637L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                </a>
              </div>
            </div>
            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <span className="team-creds">{member.credentials}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
