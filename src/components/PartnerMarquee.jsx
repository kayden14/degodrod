import React from 'react';

export default function PartnerMarquee() {
  const partners = [
    "Dangote Cement",
    "Lafarge Africa",
    "LASBCA",
    "LSDPC",
    "Julius Berger (Equip)",
    "Bua Cement",
    "COREN",
    "NSE"
  ];

  return (
    <div className="partner-marquee-container" aria-label="Accredited & Compliant With">
      <div className="marquee-content">
        {/* First copy — visible to screen readers */}
        {partners.map((partner, idx) => (
          <div className="marquee-item" key={`a-${idx}`}>
            <span className="marquee-dot" aria-hidden="true"></span>
            <span className="marquee-text">{partner}</span>
          </div>
        ))}
        {/* Second copy — purely decorative, hidden from screen readers */}
        {partners.map((partner, idx) => (
          <div className="marquee-item" key={`b-${idx}`} aria-hidden="true">
            <span className="marquee-dot"></span>
            <span className="marquee-text">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
