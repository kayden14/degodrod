import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Maximize2, Home, Landmark } from 'lucide-react';

export default function PropertiesForSale() {
  const propertiesData = [
    {
      id: 1,
      image: '/assets/luxury_property.png',
      badge: 'Hot Listing',
      type: 'Luxury Villa',
      title: 'Banana Island Waterfront Smart Mansion',
      location: 'Banana Island, Lekki, Lagos',
      price: 'Contact for Price',
      specs: [
        { icon: <Home size={16} />, label: '5 Bed | 6 Bath' },
        { icon: <Maximize2 size={16} />, label: '1,200 SQM' },
        { icon: <ShieldCheck size={16} />, label: 'Lagos C of O' }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in the Banana Island Waterfront Smart Mansion for sale.'
    },
    {
      id: 2,
      image: '/assets/osun_estate_land.png',
      badge: 'New Launch',
      type: 'Prime Land',
      title: 'Parakin Obalufe Prime Estate Land',
      location: 'Parakin Obalufe, Ile-Ife, Osun State',
      price: '₦45,000,000 / Plot',
      specs: [
        { icon: <Landmark size={16} />, label: 'Gated Estate' },
        { icon: <Maximize2 size={16} />, label: '600 SQM' },
        { icon: <ShieldCheck size={16} />, label: 'C of O Registered' }
      ],
      whatsappNumber: '2348067888011',
      message: 'Hello DEGODROD Construction, I am interested in the Parakin Obalufe Prime Estate Land in Osun State.'
    },
    {
      id: 3,
      image: '/assets/blocks_interlock.png',
      badge: 'Premium Plot',
      type: 'Commercial Land',
      title: 'Victoria Island Commercial Plot',
      location: 'Victoria Island, Lagos',
      price: 'Contact for Price',
      specs: [
        { icon: <Landmark size={16} />, label: 'Waterfront Access' },
        { icon: <Maximize2 size={16} />, label: '1,200 SQM' },
        { icon: <ShieldCheck size={16} />, label: 'Governor\'s Consent' }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in the Victoria Island Commercial Plot for sale.'
    }
  ];

  return (
    <section id="properties" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Invest</span>
        <h2 className="section-title">Properties for Sale</h2>
      </div>

      <div className="properties-grid">
        {propertiesData.map((prop) => (
          <article key={prop.id} className="property-card">
            <div className="property-img-wrapper">
              <img 
                src={prop.image} 
                alt={prop.title} 
                className="property-img" 
                loading="lazy" 
              />
              <div className="property-overlay"></div>
              <span className="property-badge">{prop.badge}</span>
              <span className="property-type-tag">{prop.type}</span>
            </div>

            <div className="property-info">
              <h3 className="property-card-title">{prop.title}</h3>
              
              <div className="property-location">
                <MapPin size={16} />
                <span>{prop.location}</span>
              </div>

              <div className="property-specs">
                {prop.specs.map((spec, idx) => (
                  <div key={idx} className="property-spec-item">
                    {spec.icon}
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              <div className="property-card-footer">
                <div className="property-price-tag">
                  <span className="price-label">Price</span>
                  <span className="price-value">{prop.price}</span>
                </div>

                <div className="property-actions">
                  <a 
                    href={`https://wa.me/${prop.whatsappNumber}?text=${encodeURIComponent(prop.message)}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary property-btn"
                  >
                    <MessageSquare size={16} /> Inquire
                  </a>
                  
                  <a 
                    href={`tel:+${prop.whatsappNumber}`} 
                    className="property-phone-btn" 
                    aria-label="Call Office"
                  >
                    <Phone size={16} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
