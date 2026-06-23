import React, { useRef, useState } from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Maximize2, Home, Landmark, Play, Pause, Volume2, VolumeX, Send, ClipboardList } from 'lucide-react';

function PropertyVideoCard({ prop }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  return (
    <article className="property-card">
      <div className="property-img-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        <video
          ref={videoRef}
          src={prop.video}
          muted={muted}
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '240px', maxHeight: '300px' }}
          poster={prop.poster}
        />
        <div className="property-overlay" />
        <span className="property-badge">{prop.badge}</span>
        <span className="property-type-tag">{prop.type}</span>

        {/* Video controls */}
        <div style={{
          position: 'absolute', bottom: '0.75rem', left: '0.75rem', display: 'flex', gap: '0.5rem', zIndex: 10
        }}>
          <button
            onClick={togglePlay}
            aria-label={playing ? 'Pause' : 'Play'}
            style={{
              background: 'rgba(10,10,20,0.75)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)'
            }}
          >
            {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            style={{
              background: 'rgba(10,10,20,0.75)', border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff', borderRadius: '50%', width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)'
            }}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>

        {/* Play hint overlay when not playing */}
        {!playing && (
          <div
            onClick={togglePlay}
            style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 5
            }}
          >
            <div style={{
              background: 'rgba(10,10,20,0.6)', borderRadius: '50%', width: '60px', height: '60px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)'
            }}>
              <Play size={24} fill="#ffffff" color="#ffffff" />
            </div>
          </div>
        )}
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
  );
}

function PropertyImageCard({ prop }) {
  return (
    <article className="property-card">
      <div className="property-img-wrapper">
        <img
          src={prop.image}
          alt={prop.title}
          className="property-img"
          loading="lazy"
        />
        <div className="property-overlay" />
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
  );
}

export default function PropertiesForSale() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'sale', 'rent', 'request'
  const [requestForm, setRequestForm] = useState({
    name: '',
    phone: '',
    location: '',
    type: 'Luxury Villa',
    budget: '',
    specs: ''
  });

  const propertiesSale = [
    {
      id: 1,
      video: '/assets/banana_island_mansion.mp4',
      poster: '/assets/banana_island_smart_villas.jpg',
      isVideo: true,
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
      image: '/assets/Parakin Obalufe Prime Estate Land.jpg',
      isVideo: false,
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
      image: '/assets/Victoria Island Commercial Plot.jpg',
      isVideo: false,
      badge: 'Premium Plot',
      type: 'Commercial Land',
      title: 'Victoria Island Commercial Plot',
      location: 'Victoria Island, Lagos',
      price: 'Contact for Price',
      specs: [
        { icon: <Landmark size={16} />, label: 'Waterfront Access' },
        { icon: <Maximize2 size={16} />, label: '1,200 SQM' },
        { icon: <ShieldCheck size={16} />, label: "Governor's Consent" }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in the Victoria Island Commercial Plot for sale.'
    }
  ];

  const propertiesRent = [
    {
      id: 101,
      image: '/assets/lekki_commercial_building.jpg',
      isVideo: false,
      badge: 'For Rent',
      type: 'Serviced Apartment',
      title: 'Premium 3-Bedroom Luxury Apartment',
      location: 'Lekki Phase 1, Lagos',
      price: '₦5,500,000 / Year',
      specs: [
        { icon: <Home size={16} />, label: '3 Bed | 4 Bath' },
        { icon: <Maximize2 size={16} />, label: '250 SQM' },
        { icon: <ShieldCheck size={16} />, label: '24/7 Power' }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in renting the Premium 3-Bedroom Luxury Apartment in Lekki Phase 1.'
    },
    {
      id: 102,
      video: '/assets/office.mp4',
      poster: '/assets/structural_renovation.jpg',
      isVideo: true,
      badge: 'Hot Deal',
      type: 'Commercial Space',
      title: 'Executive Open-Plan Office Suite',
      location: 'Victoria Island, Lagos',
      price: '₦45,000 / sqm / Yr',
      specs: [
        { icon: <Landmark size={16} />, label: 'Fiber Internet' },
        { icon: <Maximize2 size={16} />, label: '400 SQM' },
        { icon: <ShieldCheck size={16} />, label: 'Central AC' }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in renting the Executive Open-Plan Office Suite in Victoria Island.'
    },
    {
      id: 103,
      image: '/assets/banana_island_smart_villas.jpg',
      isVideo: false,
      badge: 'Penthouse',
      type: 'Waterfront Penthouse',
      title: 'Waterfront 4-Bedroom Serviced Penthouse',
      location: 'Ikoyi, Lagos',
      price: '₦9,500,000 / Year',
      specs: [
        { icon: <Home size={16} />, label: '4 Bed | 5 Bath' },
        { icon: <Maximize2 size={16} />, label: '480 SQM' },
        { icon: <ShieldCheck size={16} />, label: 'Infinity Pool' }
      ],
      whatsappNumber: '2348163193688',
      message: 'Hello DEGODROD Construction, I am interested in renting the Waterfront 4-Bedroom Serviced Penthouse in Ikoyi.'
    }
  ];

  const handleRequestChange = (e) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    const message = `Hello DEGODROD Construction,\n\nI want to make a special property request:\n` +
      `- Client Name: ${requestForm.name}\n` +
      `- Phone: ${requestForm.phone}\n` +
      `- Preferred Location: ${requestForm.location}\n` +
      `- Property Type: ${requestForm.type}\n` +
      `- Budget Limit: ${requestForm.budget}\n` +
      `- Specifications/Requirements: ${requestForm.specs}\n\n` +
      `Please let me know if you have anything available matching this description.`;

    const whatsappUrl = `https://wa.me/2348163193688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="properties" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Real Estate Portfolio</span>
        <h2 className="section-title">Premium Property Menu</h2>
        <p className="section-desc-center" style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.95rem' }}>
          Explore our verified properties for acquisition and leasing, or request a custom property tailored specifically to your needs.
        </p>
      </div>

      {/* Tabs Switcher for distinct navigation */}
      <div className="portfolio-filters" style={{ marginTop: '2rem', marginBottom: '3rem', justifyContent: 'center' }}>
        <button
          className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Listings
        </button>
        <button
          className={`filter-btn ${activeTab === 'sale' ? 'active' : ''}`}
          onClick={() => setActiveTab('sale')}
        >
          1. For Sale
        </button>
        <button
          className={`filter-btn ${activeTab === 'rent' ? 'active' : ''}`}
          onClick={() => setActiveTab('rent')}
        >
          2. For Rent
        </button>
        <button
          className={`filter-btn ${activeTab === 'request' ? 'active' : ''}`}
          onClick={() => setActiveTab('request')}
        >
          3. Custom Property Request
        </button>
      </div>

      {/* RENDER SECTIONS DISTINCTLY BASED ON ACTIVE TAB */}
      
      {/* SECTION 1: FOR SALE */}
      {(activeTab === 'all' || activeTab === 'sale') && (
        <div className="property-section-block" style={{ marginBottom: '4rem' }}>
          {activeTab === 'all' && (
            <div className="property-subheader-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '4px', height: '24px', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>
              <h3 className="property-section-subtitle" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>1. Properties For Sale</h3>
            </div>
          )}
          
          <div className="properties-grid">
            {propertiesSale.map((prop) =>
              prop.isVideo ? (
                <PropertyVideoCard key={prop.id} prop={prop} />
              ) : (
                <PropertyImageCard key={prop.id} prop={prop} />
              )
            )}
          </div>
        </div>
      )}

      {/* SECTION 2: FOR RENT */}
      {(activeTab === 'all' || activeTab === 'rent') && (
        <div className="property-section-block" style={{ marginBottom: '4rem' }}>
          {activeTab === 'all' && (
            <div className="property-subheader-container" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '4px', height: '24px', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>
              <h3 className="property-section-subtitle" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)' }}>2. Properties For Rent</h3>
            </div>
          )}
          
          <div className="properties-grid">
            {propertiesRent.map((prop) =>
              prop.isVideo ? (
                <PropertyVideoCard key={prop.id} prop={prop} />
              ) : (
                <PropertyImageCard key={prop.id} prop={prop} />
              )
            )}
          </div>
        </div>
      )}

      {/* SECTION 3: MAKE A CUSTOM REQUEST */}
      {(activeTab === 'all' || activeTab === 'request') && (
        <div className="property-request-container" style={{ marginTop: '2rem' }}>
          <div className="request-card-banner">
            <div className="request-card-info">
              <div className="request-card-icon-title">
                <div className="request-icon-badge">
                  <ClipboardList size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)' }}>Can't Find Your Ideal Property?</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem', lineHeight: '1.5' }}>
                    Since all property locations and sizes cannot be listed on our platform, our professional brokerage team is ready to source exactly what you need. Provide your specifications below to send a request directly to our desk.
                  </p>
                </div>
              </div>
            </div>

            <div className="request-form-wrapper">
              <form onSubmit={handleRequestSubmit} className="request-inline-form">
                <div className="request-form-row">
                  <div className="request-form-group">
                    <label className="request-form-label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={requestForm.name}
                      onChange={handleRequestChange}
                      placeholder="e.g. John Doe"
                      className="request-form-input"
                      required
                    />
                  </div>
                  <div className="request-form-group">
                    <label className="request-form-label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={requestForm.phone}
                      onChange={handleRequestChange}
                      placeholder="e.g. +234 816 319 3688"
                      className="request-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="request-form-row">
                  <div className="request-form-group">
                    <label className="request-form-label">Preferred Location / Area</label>
                    <input
                      type="text"
                      name="location"
                      value={requestForm.location}
                      onChange={handleRequestChange}
                      placeholder="e.g. Lekki Phase 1, Ikoyi, Ikeja"
                      className="request-form-input"
                      required
                    />
                  </div>
                  <div className="request-form-group">
                    <label className="request-form-label">Property Type</label>
                    <select
                      name="type"
                      value={requestForm.type}
                      onChange={handleRequestChange}
                      className="request-form-select"
                    >
                      <option value="Luxury Villa">Luxury Villa / Duplex</option>
                      <option value="Serviced Apartment">Serviced Apartment</option>
                      <option value="Commercial Office Space">Commercial Office Space</option>
                      <option value="Prime Estate Land">Prime Estate Land</option>
                      <option value="Penthouse">Penthouse</option>
                      <option value="Warehouse / Industrial">Warehouse / Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="request-form-row">
                  <div className="request-form-group">
                    <label className="request-form-label">Budget Range</label>
                    <input
                      type="text"
                      name="budget"
                      value={requestForm.budget}
                      onChange={handleRequestChange}
                      placeholder="e.g. ₦15,000,000/yr or ₦300M purchase limit"
                      className="request-form-input"
                      required
                    />
                  </div>
                </div>

                <div className="request-form-group" style={{ flex: '1 1 100%' }}>
                  <label className="request-form-label">Specific Specifications / Requirements</label>
                  <textarea
                    name="specs"
                    value={requestForm.specs}
                    onChange={handleRequestChange}
                    placeholder="Describe specific features: e.g. waterfront access, 24/7 automated gate, high ceiling, number of bedrooms..."
                    className="request-form-textarea"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary request-submit-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  <Send size={18} /> Submit Special Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
