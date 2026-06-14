import React from 'react';
import { Award, ShieldCheck, CheckSquare, Building } from 'lucide-react';

export default function TrustBar() {
  const credentials = [
    {
      icon: <ShieldCheck size={20} className="trust-icon" />,
      name: "COREN",
      status: "Registered Firm",
      desc: "Council for the Regulation of Engineering in Nigeria"
    },
    {
      icon: <Award size={20} className="trust-icon" />,
      name: "NSE",
      status: "Society Member",
      desc: "Nigerian Society of Engineers"
    },
    {
      icon: <Building size={20} className="trust-icon" />,
      name: "LASBCA",
      status: "Fully Compliant",
      desc: "Lagos State Building Control Agency"
    },
    {
      icon: <CheckSquare size={20} className="trust-icon" />,
      name: "LSDPC",
      status: "Approved Partner",
      desc: "Lagos State Development and Property Corporation"
    }
  ];

  return (
    <section className="trust-bar-section">
      <div className="trust-bar-container">
        <h4 className="trust-bar-title">Accredited &amp; Compliant With</h4>
        <div className="trust-logos-grid">
          {credentials.map((cred, idx) => (
            <div className="trust-logo-card" key={idx} title={cred.desc}>
              <div className="trust-logo-header">
                {cred.icon}
                <span className="trust-logo-name">{cred.name}</span>
              </div>
              <span className="trust-logo-status">{cred.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
