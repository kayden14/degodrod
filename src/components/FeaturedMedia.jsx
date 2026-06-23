import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function FeaturedMedia() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration) setProgress((currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen();
  };

  return (
    <section className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Flagship Construction</span>
        <h2 className="section-title">Banana Island Smart Villas: Foundation to Finish</h2>
        <p style={{ maxWidth: '680px', margin: '0.75rem auto 0', color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '1rem' }}>
          An exclusive behind-the-scenes walkthrough of our flagship Banana Island Smart Villas project —
          from initial ground-breaking and deep piling works to the final luxury fit-out. Witness every phase
          of DEGODROD's turnkey engineering process: precision formwork, architectural concrete finishes,
          KNX smart-home integration, and the handover of a world-class waterfront residence.
        </p>
      </div>

      {/* Outer cinematic frame — dark widescreen bar on either side of the portrait video */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '960px',
        margin: '0 auto',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#000',
        boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
        /* Use a fixed height so we get letterbox bars */
        height: 'clamp(380px, 56vw, 620px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        {/* Blurred background fill (stretched copy of the video — decorative only) */}
        <video
          src="/assets/banana_island_villas_construction.mp4"
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            filter: 'blur(28px) brightness(0.35) saturate(0.6)',
            transform: 'scale(1.08)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Main video — portrait, centred, full height, natural aspect ratio */}
        <video
          ref={videoRef}
          src="/assets/banana_island_villas_construction.mp4"
          poster="/assets/banana_island_smart_villas.jpg"
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setPlaying(false)}
          playsInline
          preload="metadata"
        />

        {/* Bottom gradient for controls */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '130px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)',
          pointerEvents: 'none', zIndex: 2
        }} />

        {/* Centre play button when paused */}
        {!playing && (
          <button
            onClick={togglePlay}
            aria-label="Play Banana Island Smart Villas Video"
            style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '50%',
              width: '88px', height: '88px',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', zIndex: 3,
              transition: 'background 0.2s ease, transform 0.2s ease'
            }}
          >
            <Play size={40} fill="currentColor" />
          </button>
        )}

        {/* Controls bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0.75rem 1.5rem 1.25rem',
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          zIndex: 3
        }}>
          {/* Progress bar */}
          <div
            onClick={handleSeek}
            style={{
              width: '100%', height: '4px', borderRadius: '2px',
              background: 'rgba(255,255,255,0.25)', cursor: 'pointer'
            }}
          >
            <div style={{
              width: `${progress}%`, height: '100%', borderRadius: '2px',
              background: 'var(--accent-gold, #d4a853)',
              transition: 'width 0.1s linear'
            }} />
          </div>

          {/* Button row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
              {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
            </button>
            <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', marginLeft: 'auto' }}>
              Banana Island Smart Villas — Foundation to Finish
            </span>
            <button onClick={handleFullscreen} aria-label="Fullscreen"
              style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
