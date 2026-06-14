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
                <a href="#" aria-label="Direct Phone"><Phone size={18} /></a>
                <a href="#" aria-label="Email Contact"><Mail size={18} /></a>
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
