import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

const BA_VIDEOS = [
  {
    id: 1,
    label: 'Transformation · Vol. 1',
    src: '/assets/before_after_construction.mp4',
  },
  {
    id: 2,
    label: 'Transformation · Vol. 2',
    src: '/assets/before_after_2.mp4',
  }
];

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reset on src change
  useEffect(() => {
    setPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [src]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
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
    videoRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen();
  };

  return (
    <div style={{
      position: 'relative', borderRadius: '14px', overflow: 'hidden',
      background: '#000', maxWidth: '900px', margin: '0 auto',
      boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
      height: 'clamp(300px, 50vw, 520px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      {/* Blurred background fill */}
      <video
        src={src} muted loop playsInline autoPlay aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', filter: 'blur(24px) brightness(0.3) saturate(0.5)',
          transform: 'scale(1.08)', zIndex: 0, pointerEvents: 'none'
        }}
      />

      {/* Main video */}
      <video
        ref={videoRef} src={src}
        style={{
          position: 'relative', zIndex: 1,
          height: '100%', width: 'auto', maxWidth: '100%', objectFit: 'contain', display: 'block'
        }}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        playsInline preload="metadata"
      />

      {/* Bottom gradient */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '130px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2
      }} />

      {/* Centre play button */}
      {!playing && (
        <button onClick={togglePlay} aria-label="Play"
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.5)',
            backdropFilter: 'blur(10px)', borderRadius: '50%',
            width: '80px', height: '80px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', zIndex: 3
          }}
        >
          <Play size={36} fill="currentColor" />
        </button>
      )}

      {/* Controls */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '0.75rem 1.25rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', zIndex: 3
      }}>
        <div onClick={handleSeek} style={{
          width: '100%', height: '4px', borderRadius: '2px',
          background: 'rgba(255,255,255,0.25)', cursor: 'pointer'
        }}>
          <div style={{
            width: `${progress}%`, height: '100%', borderRadius: '2px',
            background: 'var(--accent-gold, #d4a853)', transition: 'width 0.1s linear'
          }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
            {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
          </button>
          <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.78rem', marginLeft: 'auto' }}>
            Before &amp; After Construction Reveal
          </span>
          <button onClick={handleFullscreen} aria-label="Fullscreen"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = BA_VIDEOS[activeIdx];

  const prev = () => setActiveIdx((i) => (i - 1 + BA_VIDEOS.length) % BA_VIDEOS.length);
  const next = () => setActiveIdx((i) => (i + 1) % BA_VIDEOS.length);

  return (
    <section className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Transformation</span>
        <h2 className="section-title">Before &amp; After</h2>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', marginBottom: '2rem'
      }}>
        <button onClick={prev} aria-label="Previous video"
          style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--text-primary, #fff)', borderRadius: '50%',
            width: '38px', height: '38px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
          <ChevronLeft size={18} />
        </button>

        {BA_VIDEOS.map((v, i) => (
          <button key={v.id} onClick={() => setActiveIdx(i)}
            style={{
              padding: '0.5rem 1.4rem', borderRadius: '999px', cursor: 'pointer',
              border: i === activeIdx
                ? '1px solid var(--accent-gold, #d4a853)'
                : '1px solid rgba(255,255,255,0.14)',
              background: i === activeIdx
                ? 'rgba(212,168,83,0.15)'
                : 'rgba(255,255,255,0.04)',
              color: i === activeIdx ? 'var(--accent-gold, #d4a853)' : 'var(--text-muted, #aaa)',
              fontSize: '0.85rem', fontWeight: i === activeIdx ? '600' : '400',
              transition: 'all 0.2s ease'
            }}
          >
            {v.label}
          </button>
        ))}

        <button onClick={next} aria-label="Next video"
          style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            color: 'var(--text-primary, #fff)', borderRadius: '50%',
            width: '38px', height: '38px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {BA_VIDEOS.map((_, i) => (
          <button key={i} onClick={() => setActiveIdx(i)}
            style={{
              width: i === activeIdx ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === activeIdx ? 'var(--accent-gold, #d4a853)' : 'rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease', padding: 0
            }}
          />
        ))}
      </div>

      <VideoPlayer key={active.src} src={active.src} />
    </section>
  );
}
