import React, { useRef, useState } from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Maximize2, Home, Landmark, Play, Pause, Volume2, VolumeX } from 'lucide-react';

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
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '260px', maxHeight: '320px' }}
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
              background: 'rgba(10,10,20,0.6)', borderRadius: '50%', width: '64px', height: '64px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '2px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)'
            }}>
              <Play size={28} fill="#ffffff" color="#ffffff" />
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

export default function PropertiesForSale() {
  const propertiesData = [
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

  return (
    <section id="properties" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Invest</span>
        <h2 className="section-title">Properties for Sale</h2>
      </div>

      <div className="properties-grid">
        {propertiesData.map((prop) =>
          prop.isVideo ? (
            <PropertyVideoCard key={prop.id} prop={prop} />
          ) : (
            <article key={prop.id} className="property-card">
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
          )
        )}
      </div>
    </section>
  );
}
