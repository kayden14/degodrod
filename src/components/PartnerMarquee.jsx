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
    <div className="partner-marquee-container">
      <div className="marquee-content">
        {/* Double the list to create a seamless loop */}
        {[...partners, ...partners].map((partner, idx) => (
          <div className="marquee-item" key={idx}>
            <span className="marquee-dot"></span>
            <span className="marquee-text">{partner}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
