import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      question: "What land documents do you verify, and can you help with Lagos state building approvals?",
      answer: "We verify survey plans, Certificates of Occupancy (C of O), Governor's Consent, and Gazette records. We also manage the entire building plan approval process (via LASBCA) and coordinate with local planning authorities so your project is 100% compliant."
    },
    {
      question: "Why is geotechnical soil testing mandatory before piling in Lagos Island?",
      answer: "Most soils in Lekki, Ikoyi, Victoria Island, and coastal Lagos are loose sand or organic marsh. Soil testing is required to find the depth of stable bearing strata (usually between 20m and 45m). This dictates the design length, pile diameter, and concrete/steel specifications to prevent structural settlement."
    },
    {
      question: "What is the compressive strength of your vibrated concrete blocks?",
      answer: "Our blocks are mixed using sharp sand, granite dust, and high-grade cement before being consolidated on industrial vibrating tables. Our 9-inch and 6-inch blocks achieve a compressive strength of 3.5MPa to 4.5MPa, making them far stronger than standard commercial sandcrete blocks."
    },
    {
      question: "Do you offer structural design consultations and BOQ estimates?",
      answer: "Yes, we offer complete civil consulting services. This includes structural drafting, preparing standard Bills of Quantities (BOQ), conducting integrity testing on existing concrete elements, and providing qualified site supervision."
    },
    {
      question: "How do you manage construction projects for diaspora clients?",
      answer: "We offer complete turnkey construction contracts for clients abroad. This includes transparent milestone billing, weekly high-fidelity video/photo progress updates, material receipt verification, and direct digital access to Engr. Success and our project engineers."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
      </div>

      <div className="faq-container">
        <div className="faq-list">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                onClick={() => toggleFAQ(idx)}
              >
                <button className="faq-trigger" aria-expanded={isOpen}>
                  <span className="faq-question">
                    <HelpCircle size={18} className="faq-icon-help" />
                    {item.question}
                  </span>
                  <ChevronDown size={18} className="faq-icon-arrow" />
                </button>
                <div 
                  className="faq-content"
                  style={{
                    maxHeight: isOpen ? '250px' : '0',
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease-in-out',
                    overflow: 'hidden'
                  }}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
