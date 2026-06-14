import React, { useState } from 'react';
import { MapPin, Calendar, HardHat, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  const projectsData = [
    {
      id: 1,
      image: '/assets/hero_bg.png',
      gallery: ['/assets/hero_bg.png', '/assets/piling_drilling.png', '/assets/luxury_property.png'],
      title: "Lekki Commercial Skyscraper",
      category: "engineering",
      badge: "Civil Engineering",
      desc: "Full structural framework construction of a 15-story modern office plaza in Lekki. Handled reinforced concrete works, engineering consults, and structural verification.",
      location: "Lekki Phase 1, Lagos",
      year: "2025",
      challenge: "The close proximity to the Lagos shoreline presented weak coastal sandy soils with high liquefaction risk under wind and gravity loads for a 15-story frame.",
      solution: "Engineered a deep bored piling foundation featuring 120 concrete piles anchored into a competent sand layer at 32 meters depth, capped with a 2.5m thick reinforced raft slab.",
      specs: {
        "Foundation Type": "Bored Concrete Piles (800mm diameter)",
        "Concrete Grade": "C35/45 Strength",
        "Steel Tonnage": "580 Tons",
        "Structural Frame": "Cast-in-situ concrete frames & shear walls",
        "Project Scope": "Soil Testing, Piling, and Superstructure Framing"
      }
    },
    {
      id: 2,
      image: '/assets/blocks_interlock.png',
      gallery: ['/assets/blocks_interlock.png', '/assets/luxury_property.png', '/assets/hero_bg.png'],
      title: "Victoria Island Estate Paving",
      category: "manufacturing",
      badge: "Blocks & Interlocks",
      desc: "Supplied and installed over 45,000 square meters of high-density geometric interlocking paving blocks for an exclusive residential gated community.",
      location: "Victoria Island, Lagos",
      year: "2026",
      challenge: "High-volume vehicle traffic and seasonal flash floods in Victoria Island required paving stones with exceptional compression resistance and superior drainage profiles.",
      solution: "Manufactured custom 80mm double-T interlocking paving stones at our yard using 45MPa concrete, laid on a geo-textile separated, graded aggregate sub-base.",
      specs: {
        "Paving Stone Type": "Double-T Geometric Interlocks (80mm)",
        "Compressive Strength": "45 MPa",
        "Total Area": "45,000 sqm",
        "Sub-base Compaction": "98% West African Standard",
        "Scope of Supply": "In-house Manufacturing & Machine Paving"
      }
    },
    {
      id: 3,
      image: '/assets/piling_drilling.png',
      gallery: ['/assets/piling_drilling.png', '/assets/hero_bg.png', '/assets/luxury_property.png'],
      title: "Ikoyi Luxury Towers Foundation",
      category: "engineering",
      badge: "Piling & Drilling",
      desc: "Executed deep geotechnical investigations and installed 120 bored piles to support massive multi-story waterfront structures on loose coastal soils.",
      location: "Ikoyi, Lagos",
      year: "2024",
      challenge: "Very soft organic clay layers extending to 18 meters depth, coupled with high artesian pressure, threatened the stability of high-rise structural foundations.",
      solution: "Utilized heavy-duty hydraulic rotary drilling rigs to install bored piles extending to 42 meters depth, using bentonite slurry stabilization to prevent hole collapse.",
      specs: {
        "Drilling Method": "Rotary Bored Piling with Bentonite Slurry",
        "Pile Depth": "42 meters",
        "Pile Count": "120 Bored Piles",
        "Testing Performed": "Pile Integrity Test (PIT) & Static Load Test",
        "Duration": "4 Months"
      }
    },
    {
      id: 4,
      image: '/assets/luxury_property.png',
      gallery: ['/assets/luxury_property.png', '/assets/blocks_interlock.png', '/assets/hero_bg.png'],
      title: "Banana Island Smart Villas",
      category: "properties",
      badge: "Property Sales",
      desc: "Turnkey design, documentation, and brokerage of a luxury waterfront smart mansion featuring state-of-the-art concrete finishes and smart home automation.",
      location: "Banana Island, Lagos",
      year: "2025",
      challenge: "Achieving flawless structural aesthetics with exposed architectural concrete finishes while integrating complex, hidden smart-home mechanical/electrical routes.",
      solution: "Utilized premium plywood formwork with epoxy coating for glass-smooth concrete surfaces, and cast high-precision PVC conduits embedded inside structural slabs.",
      specs: {
        "Villa Classification": "Waterfront Smart Mansion",
        "Home Automation": "KNX Control System",
        "Finish Grade": "Exposed Architectural Off-form Concrete",
        "Land Titling": "Lagos C of O (Verified)",
        "Duration": "14 Months (Turnkey)"
      }
    },
    {
      id: 5,
      image: '/assets/piling_drilling.png',
      gallery: ['/assets/piling_drilling.png', '/assets/blocks_interlock.png', '/assets/hero_bg.png'],
      title: "Ajah Road Drainage & Culvert Works",
      category: "engineering",
      badge: "Civil Engineering",
      desc: "Designed and constructed 3.2 km of reinforced concrete box culverts and drainage channels along the Ajah expressway corridor to mitigate recurring flash flooding.",
      location: "Ajah, Lagos",
      year: "2024",
      challenge: "Severe annual flooding along the Ajah-Epe corridor was destroying road subgrades and causing expensive emergency repairs every rainy season, with zero formal drainage design.",
      solution: "Executed a phased hydraulic study, designed grade-controlled box culvert sections and outfall structures directing stormwater into the Badagry creek system safely.",
      specs: {
        "Drainage Type": "Box Culverts + Open Channels",
        "Channel Length": "3.2 km",
        "Culvert Dimensions": "1.5m × 1.5m reinforced concrete",
        "Concrete Volume": "~2,400 m³",
        "Design Standard": "Lagos Stormwater Management Code"
      }
    },
    {
      id: 6,
      image: '/assets/hero_bg.png',
      gallery: ['/assets/hero_bg.png', '/assets/blocks_interlock.png', '/assets/piling_drilling.png'],
      title: "Ikeja Industrial Warehouse Complex",
      category: "engineering",
      badge: "Civil Engineering",
      desc: "Structural design, pile cap construction, and full superstructure erection of a 6,500 sqm industrial warehouse facility for a multinational logistics operator.",
      location: "Ikeja, Lagos",
      year: "2023",
      challenge: "Soft clay deposits near the Ikeja axis required a specialized raft-on-pile system to distribute the 250-ton operational floor loading without differential settlement.",
      solution: "Designed a 450mm thick reinforced raft slab supported by 64 micro-piles cast to 18m depth, with structural steel portal frames for the 12m clear-span roof system.",
      specs: {
        "Floor Area": "6,500 sqm",
        "Foundation": "Raft-on-Micro-Piles (64 piles, 18m)",
        "Roof System": "Structural Steel Portal Frame (12m span)",
        "Floor Loading": "250 kN/m²",
        "Duration": "8 Months"
      }
    },
    {
      id: 7,
      image: '/assets/blocks_interlock.png',
      gallery: ['/assets/blocks_interlock.png', '/assets/hero_bg.png', '/assets/luxury_property.png'],
      title: "Alimosho Mass Housing — Block Supply",
      category: "manufacturing",
      badge: "Blocks & Interlocks",
      desc: "Manufactured and delivered over 320,000 vibrated concrete blocks for a state-backed mass housing project across 4 residential estates in Alimosho LGA.",
      location: "Alimosho, Lagos",
      year: "2023",
      challenge: "Tight government delivery schedule required consistent block output of 15,000 units per week while maintaining 4.0 MPa minimum compressive strength standards across all batches.",
      solution: "Scaled up our production line to dual-shift vibration casting. All batches were randomly sampled and cube-tested at an independent COREN laboratory before dispatch.",
      specs: {
        "Total Blocks Supplied": "320,000+ units",
        "Block Types": "9-inch (230,000) and 6-inch (90,000)",
        "Compressive Strength": "≥ 4.0 MPa (tested)",
        "Weekly Output": "15,000 units/week",
        "Quality Standard": "NIS 87 (Nigerian Standard)"
      }
    },
    {
      id: 8,
      image: '/assets/luxury_property.png',
      gallery: ['/assets/luxury_property.png', '/assets/hero_bg.png', '/assets/blocks_interlock.png'],
      title: "Yaba Tech Hub — Structural Renovation",
      category: "consulting",
      badge: "Consulting",
      desc: "Comprehensive structural audit, Bill of Quantities preparation, and supervised renovation of a 4-floor heritage commercial building converted into a modern technology incubator hub.",
      location: "Yaba, Lagos",
      year: "2026",
      challenge: "The original 1970s reinforced concrete structure had severe carbonation-induced corrosion, requiring careful non-destructive evaluation to determine repair extent without full demolition.",
      solution: "Performed Profometer rebar detection, half-cell corrosion potential mapping, and rebound hammer testing. Prescribed a localised concrete repair system and applied penetrating corrosion inhibitor.",
      specs: {
        "Structural Audit": "NDE — Half-cell, Rebound Hammer",
        "Floors Renovated": "4 Floors (2,100 sqm)",
        "BOQ Value": "₦485 Million",
        "Structural System": "RC Frame with shear wall stiffening",
        "Post-repair Certification": "COREN-registered structural engineer"
      }
    },
    {
      id: 9,
      image: '/assets/piling_drilling.png',
      gallery: ['/assets/piling_drilling.png', '/assets/luxury_property.png', '/assets/hero_bg.png'],
      title: "Lekki Shoreline Retaining Wall",
      category: "engineering",
      badge: "Civil Engineering",
      desc: "Design and construction of a 480-meter coastal retaining wall and sheet pile system to protect a high-value real estate development from Atlantic Ocean wave erosion.",
      location: "Lekki Phase 2, Lagos",
      year: "2024",
      challenge: "Atlantic Ocean wave action was actively eroding the coastline at 1.2 metres per year. Without intervention, the development site's structural integrity would have been compromised within 5 years.",
      solution: "Installed 480m of interlocked steel H-pile sheet piling driven to 14 meters depth, tied back with ground anchors and capped with a 600mm reinforced concrete king beam at crest level.",
      specs: {
        "Wall Type": "Interlocked Steel Sheet Piling",
        "Total Length": "480 metres",
        "Pile Depth": "14 metres",
        "Anchor System": "Ground anchors at 3m centres",
        "Design Life": "50 years (coastal durability class)"
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  const handleOpenModal = (project) => {
    setActiveProject(project);
    setActiveImgIdx(0);
    // No body lock needed — fixed overlay covers viewport and handles its own scroll
  };

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev + 1) % activeProject.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length);
  };

  return (
    <section id="portfolio" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Our Work</span>
        <h2 className="section-title">Featured Projects</h2>
      </div>

      {/* Interactive Lagos SVG Map Component */}
      <div className="map-section">
        <div className="map-description">
          <h3>Lagos Project Locations</h3>
          <p>
            Explore our civil engineering, piling, and real estate footprint across Lagos state. Click a location pin on the map to inspect the technical details of our completed projects.
          </p>
        </div>
        <div className="map-wrapper">
          <svg viewBox="0 0 800 350" className="lagos-svg-map">
            {/* Water body background */}
            <rect width="800" height="350" fill="rgba(10, 25, 47, 0.3)" rx="16" />
            <text x="400" y="110" className="map-water-label" fill="rgba(255,255,255,0.06)" textAnchor="middle">LAGOS LAGOON</text>
            <text x="400" y="325" className="map-water-label" fill="rgba(255,255,255,0.06)" textAnchor="middle">ATLANTIC OCEAN</text>
            
            {/* Landmass shapes */}
            {/* Mainland */}
            <path d="M 40,30 L 290,30 L 250,220 L 140,220 L 80,180 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <text x="120" y="90" className="map-land-label">MAINLAND</text>

            {/* Victoria Island */}
            <path d="M 280,250 L 480,250 L 480,300 L 280,300 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <text x="380" y="282" className="map-land-label">VICTORIA ISLAND</text>

            {/* Ikoyi */}
            <path d="M 320,180 L 480,180 L 480,240 L 320,240 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <text x="400" y="215" className="map-land-label">IKOYI</text>

            {/* Banana Island */}
            <path d="M 450,130 L 530,120 L 545,150 L 460,160 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <text x="495" y="145" className="map-land-label-small">BANANA ISLAND</text>

            {/* Lekki Peninsula */}
            <path d="M 495,200 L 760,200 L 760,260 L 495,260 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
            <text x="620" y="235" className="map-land-label">LEKKI PENINSULA</text>

            {/* Interactive Pins */}
            {/* Lekki Skyscraper */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[0])}>
              <circle cx="580" cy="225" r="16" className="pin-pulse" />
              <circle cx="580" cy="225" r="6" className="pin-core" />
              <text x="580" y="202" className="pin-text" textAnchor="middle">Lekki Skyscraper</text>
            </g>

            {/* VI Paving */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[1])}>
              <circle cx="360" cy="275" r="16" className="pin-pulse" />
              <circle cx="360" cy="275" r="6" className="pin-core" />
              <text x="360" y="252" className="pin-text" textAnchor="middle">VI Paving</text>
            </g>

            {/* Ikoyi Piling */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[2])}>
              <circle cx="420" cy="210" r="16" className="pin-pulse" />
              <circle cx="420" cy="210" r="6" className="pin-core" />
              <text x="420" y="187" className="pin-text" textAnchor="middle">Ikoyi Piling</text>
            </g>

            {/* Banana Island */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[3])}>
              <circle cx="500" cy="140" r="16" className="pin-pulse" />
              <circle cx="500" cy="140" r="6" className="pin-core" />
              <text x="500" y="117" className="pin-text" textAnchor="middle">Banana Smart Villa</text>
            </g>

            {/* Ajah — Drainage & Culvert Works */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[4])}>
              <circle cx="720" cy="230" r="16" className="pin-pulse" />
              <circle cx="720" cy="230" r="6" className="pin-core" />
              <text x="720" y="207" className="pin-text" textAnchor="middle">Ajah Drainage</text>
            </g>

            {/* Ikeja — Industrial Warehouse */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[5])}>
              <circle cx="100" cy="80" r="16" className="pin-pulse" />
              <circle cx="100" cy="80" r="6" className="pin-core" />
              <text x="100" y="57" className="pin-text" textAnchor="middle">Ikeja Warehouse</text>
            </g>

            {/* Alimosho — Mass Housing Blocks */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[6])}>
              <circle cx="55" cy="155" r="16" className="pin-pulse" />
              <circle cx="55" cy="155" r="6" className="pin-core" />
              <text x="55" y="132" className="pin-text" textAnchor="middle">Alimosho Blocks</text>
            </g>

            {/* Yaba — Tech Hub */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[7])}>
              <circle cx="210" cy="185" r="16" className="pin-pulse" />
              <circle cx="210" cy="185" r="6" className="pin-core" />
              <text x="210" y="162" className="pin-text" textAnchor="middle">Yaba Tech Hub</text>
            </g>

            {/* Lekki Phase 2 — Shoreline Retaining Wall */}
            <g className="map-pin" onClick={() => handleOpenModal(projectsData[8])}>
              <circle cx="660" cy="220" r="16" className="pin-pulse" />
              <circle cx="660" cy="220" r="6" className="pin-core" />
              <text x="660" y="197" className="pin-text" textAnchor="middle">Lekki Shoreline Wall</text>
            </g>
          </svg>
        </div>
        <p className="map-scroll-hint">← Swipe to explore map →</p>
      </div>

      {/* Grid Display Filters */}
      <div className="portfolio-filters" style={{ marginTop: '3rem' }}>
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'engineering' ? 'active' : ''}`}
          onClick={() => setFilter('engineering')}
        >
          Civil Engineering
        </button>
        <button 
          className={`filter-btn ${filter === 'manufacturing' ? 'active' : ''}`}
          onClick={() => setFilter('manufacturing')}
        >
          Manufacturing
        </button>
        <button 
          className={`filter-btn ${filter === 'properties' ? 'active' : ''}`}
          onClick={() => setFilter('properties')}
        >
          Properties
        </button>
        <button 
          className={`filter-btn ${filter === 'consulting' ? 'active' : ''}`}
          onClick={() => setFilter('consulting')}
        >
          Consulting
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article 
            key={project.id} 
            className="project-card"
            onClick={() => handleOpenModal(project)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-img-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-img" 
                loading="lazy"
              />
              <div className="project-overlay"></div>
              <span className="project-badge">{project.badge}</span>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              
              <div className="projects-grid-footer">
                <div className="project-details">
                  <div className="project-detail-item">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <div className="project-detail-item">
                    <Calendar size={14} />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Detail Modal Overlay */}
      {activeProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal} aria-label="Close details">
              <X size={24} />
            </button>
            
            <div className="modal-content-grid">
              {/* Image Gallery Column */}
              <div className="modal-gallery-panel">
                <div className="modal-main-img-wrapper">
                  <img 
                    src={activeProject.gallery[activeImgIdx]} 
                    alt={activeProject.title} 
                    className="modal-main-img" 
                  />
                  {activeProject.gallery.length > 1 && (
                    <>
                      <button className="gallery-arrow left" onClick={prevImage}>
                        <ChevronLeft size={20} />
                      </button>
                      <button className="gallery-arrow right" onClick={nextImage}>
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>
                
                {/* Dots indicator */}
                <div className="gallery-dots">
                  {activeProject.gallery.map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`gallery-dot ${idx === activeImgIdx ? 'active' : ''}`}
                      onClick={() => setActiveImgIdx(idx)}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Column */}
              <div className="modal-details-panel">
                <span className="project-badge" style={{ display: 'inline-block', width: 'fit-content' }}>
                  {activeProject.badge}
                </span>
                <h3 className="modal-project-title">{activeProject.title}</h3>
                
                <div className="modal-meta">
                  <div className="modal-meta-item">
                    <MapPin size={16} />
                    <span>{activeProject.location}</span>
                  </div>
                  <div className="modal-meta-item">
                    <Calendar size={16} />
                    <span>{activeProject.year}</span>
                  </div>
                </div>

                <hr className="modal-divider" />

                <div className="modal-text-block">
                  <h4>The Geotechnical Challenge</h4>
                  <p>{activeProject.challenge}</p>
                </div>

                <div className="modal-text-block">
                  <h4>Engineering Solution</h4>
                  <p>{activeProject.solution}</p>
                </div>

                <div className="modal-text-block">
                  <h4>Technical Specifications</h4>
                  <div className="spec-table">
                    {Object.entries(activeProject.specs).map(([key, val]) => (
                      <div className="spec-row" key={key}>
                        <span className="spec-key">{key}</span>
                        <span className="spec-val">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={`https://wa.me/2348163193688?text=Hello%20DEGODROD%20Construction%2C%20I%20saw%20your%20project%3A%20${encodeURIComponent(activeProject.title)}%20and%20would%20like%20to%20request%20a%20similar%20consultation.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ marginTop: '1.5rem', justifyContent: 'center' }}
                >
                  <HardHat size={18} /> Request Similar Construction
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
