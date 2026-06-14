import React, { useState } from 'react';
import { Play } from 'lucide-react';

export default function FeaturedMedia() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Flagship Construction</span>
        <h2 className="section-title">Banana Island Smart Villas: Foundation to Finish</h2>
      </div>

      <div className="video-container" style={{ position: 'relative' }}>
        {!isPlaying ? (
          <>
            <img 
              src="/assets/3d_construction_render_1781474785627.png" 
              alt="Banana Island Smart Villas Construction" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
            <div className="video-overlay"></div>
            <button className="video-play-big" onClick={() => setIsPlaying(true)} aria-label="Play video">
              <Play fill="currentColor" size={48} />
            </button>
            <div className="video-controls">
              <div className="video-title-bar">
                <span>Time-lapse engineering showcase of our construction process</span>
              </div>
            </div>
          </>
        ) : (
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/-KDNFBgHdBc?autoplay=1&rel=0" 
            title="Banana Island Smart Villas Construction Tour" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
          ></iframe>
        )}
      </div>
    </section>
  );
}
