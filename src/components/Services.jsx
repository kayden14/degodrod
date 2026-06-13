import React from 'react';
import { Building2, FileText, Blocks, Drill, FileCheck2, Home, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Building2 />,
      title: "Building Construction",
      desc: "Comprehensive structural developments from excavation to finishes. We build premium residential houses, modern office complexes, and robust commercial warehouses.",
      bullets: ["Residential development", "Commercial complexes", "Renovation & structural reinforcement"]
    },
    {
      icon: <FileText />,
      title: "Contracts & Consultations",
      desc: "Professional civil engineering consulting. We prepare structural drafts, execute site supervision, and manage complex construction project scopes.",
      bullets: ["Structural analysis & design", "Bill of quantities (BOQ)", "Project supervision"]
    },
    {
      icon: <Blocks />,
      title: "Vibrated Blocks & Interlocks",
      desc: "Our material yard manufactures high-compressive-strength concrete blocks and custom geometric interlocking paving stones for elegant driveways.",
      bullets: ["9-inch & 6-inch vibrated blocks", "Premium interlock paving", "Heavy-duty road slabs"]
    },
    {
      icon: <Drill />,
      title: "Piling & Deep Foundations",
      desc: "Custom geotechnical foundation works designed for the damp, high-water table soils of Lagos. Specialized in bored piling, micro-piling, and drilling.",
      bullets: ["Bored pile installations", "Steel casing drilling", "Geotechnical soil testing"]
    },
    {
      icon: <FileCheck2 />,
      title: "Land & Survey Documentation",
      desc: "Hassle-free management of property registration, land surveys, Building Approvals, and Certificate of Occupancy (C of O) processing within Lagos state.",
      bullets: ["Survey plan mapping", "C of O processing", "Building plan approval approvals"]
    },
    {
      icon: <Home />,
      title: "Property Brokerage & Sales",
      desc: "Direct sales of high-yield investment properties, verified lands, and premium building materials (sand, granite, cement, reinforcement bars).",
      bullets: ["Verified land acquisition", "Completed housing sales", "Building materials supply"]
    }
  ];

  return (
    <section id="services" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">What We Do</span>
        <h2 className="section-title">Our Capabilities</h2>
      </div>

      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-list">
              {service.bullets.map((bullet, idx) => (
                <li key={idx} className="service-list-item">
                  <ArrowUpRight size={14} /> {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
