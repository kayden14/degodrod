import React from 'react';
import { PhoneCall, MapPin, Pickaxe, Hammer, ShieldCheck } from 'lucide-react';

export default function ProcessTimeline() {
  const processes = [
    {
      id: 1,
      icon: <PhoneCall size={24} />,
      title: "Initial Consultation",
      desc: "We discuss your project goals, budget, and timeline, performing an initial feasibility study."
    },
    {
      id: 2,
      icon: <MapPin size={24} />,
      title: "Site Inspection & Geotech Testing",
      desc: "Our engineers conduct topographic surveys and deep soil tests to determine the geotechnical profile."
    },
    {
      id: 3,
      icon: <Pickaxe size={24} />,
      title: "Piling & Foundation Setup",
      desc: "We deploy heavy-duty rigs to install bored piles or raft foundations tailored to the soil conditions."
    },
    {
      id: 4,
      icon: <Hammer size={24} />,
      title: "Superstructure & Finishes",
      desc: "Using our high-strength vibrated blocks, we erect the core structure and apply premium architectural finishes."
    },
    {
      id: 5,
      icon: <ShieldCheck size={24} />,
      title: "Handover & Compliance",
      desc: "We deliver the completed project with all necessary LASBCA approvals and structural integrity certificates."
    }
  ];

  return (
    <section id="process" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">How We Work</span>
        <h2 className="section-title">Our Engineering Process</h2>
      </div>

      <div className="timeline-container">
        {processes.map((step, index) => (
          <div className="timeline-item" key={step.id}>
            <div className="timeline-icon-wrapper">
              <div className="timeline-icon">
                {step.icon}
              </div>
              {index < processes.length - 1 && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
              <span className="timeline-step">Step {step.id}</span>
              <h3 className="timeline-title">{step.title}</h3>
              <p className="timeline-desc">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
