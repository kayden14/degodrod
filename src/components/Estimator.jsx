import React, { useState, useEffect } from 'react';
import { Calculator, Send, Info } from 'lucide-react';

export default function Estimator() {
  const [service, setService] = useState('building');
  const [soilType, setSoilType] = useState('mainland');
  
  // Building state
  const [sqm, setSqm] = useState(150);
  const [floors, setFloors] = useState(1);
  const [quality, setQuality] = useState('premium');

  // Blocks/Interlocks state
  const [blockType, setBlockType] = useState('9inch');
  const [quantity, setQuantity] = useState(2000);

  // Piling state
  const [piles, setPiles] = useState(20);
  const [depth, setDepth] = useState(25);

  const [estimateRange, setEstimateRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    let minPrice = 0;
    let maxPrice = 0;

    if (service === 'building') {
      // Base cost per sqm in Naira
      let baseRateSqm = 180000; // Standard
      if (quality === 'premium') baseRateSqm = 260000;
      if (quality === 'luxury') baseRateSqm = 380000;

      // Floors multiply cost slightly for reinforcement
      const floorMultiplier = 1 + (floors - 1) * 0.15;
      
      let totalBase = sqm * baseRateSqm * floorMultiplier;

      // Soil multiplier for structural foundation adjustments (Lagos specific)
      if (soilType === 'island') totalBase *= 1.20;
      if (soilType === 'deep-swamp') totalBase *= 1.45;
      
      minPrice = totalBase * 0.9;
      maxPrice = totalBase * 1.1;
    } else if (service === 'materials') {
      let unitPrice = 750; // 9 inch block
      if (blockType === '6inch') unitPrice = 650;
      if (blockType === 'interlocks') unitPrice = 8500; // Per sqm

      const totalBase = quantity * unitPrice;
      minPrice = totalBase * 0.95;
      maxPrice = totalBase * 1.05;
    } else if (service === 'piling') {
      // Piling base cost: cost per pile per meter
      const ratePerMeterPile = 38000;
      let totalBase = piles * depth * ratePerMeterPile;

      // Geotechnical soil complexity adjustments
      if (soilType === 'island') totalBase *= 1.35;
      if (soilType === 'deep-swamp') totalBase *= 1.65;
      
      minPrice = totalBase * 0.9;
      maxPrice = totalBase * 1.1;
    }

    setEstimateRange({
      min: Math.round(minPrice),
      max: Math.round(maxPrice)
    });
  }, [service, soilType, sqm, floors, quality, blockType, quantity, piles, depth]);

  const formatNaira = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleSendToWhatsApp = () => {
    let text = `Hello DEGODROD Construction, I generated an estimate for my project on your website:\n\n`;
    if (service === 'building') {
      text += `*Service:* Civil & Building Construction\n`;
      text += `*Area:* ${sqm} Sq Meters\n`;
      text += `*Floors:* ${floors} Floor(s)\n`;
      text += `*Finishing Quality:* ${quality.toUpperCase()}\n`;
      text += `*Soil Type:* ${soilType === 'mainland' ? 'Mainland (Stable)' : soilType === 'island' ? 'Island (Marshy)' : 'Deep Swamp (Waterfront)'}\n`;
    } else if (service === 'materials') {
      text += `*Service:* Blocks & Interlocks Supply\n`;
      text += `*Item:* ${blockType === 'interlocks' ? 'Interlocking Paving Tiles' : blockType + ' Vibrated Blocks'}\n`;
      text += `*Quantity:* ${quantity} ${blockType === 'interlocks' ? 'Sqm' : 'Units'}\n`;
    } else if (service === 'piling') {
      text += `*Service:* Piling & Deep Foundation\n`;
      text += `*Piles count:* ${piles} piles\n`;
      text += `*Depth:* ${depth} meters per pile\n`;
      text += `*Soil Type:* ${soilType === 'mainland' ? 'Mainland (Stable)' : soilType === 'island' ? 'Island (Marshy)' : 'Deep Swamp (Waterfront)'}\n`;
    }
    text += `*Estimate Range:* ${formatNaira(estimateRange.min)} - ${formatNaira(estimateRange.max)}\n\n`;
    text += `Please get in touch with me to discuss details.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/2348163193688?text=${encoded}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="estimator" className="section reveal">
      <div className="section-header">
        <span className="section-subtitle">Interactive Tool</span>
        <h2 className="section-title">Project Estimator</h2>
      </div>

      <div className="estimator-container">
        <div className="estimator-form">
          <div className="estimator-group">
            <label className="estimator-label">Select Service Area</label>
            <select 
              className="estimator-select" 
              value={service}
              onChange={(e) => setService(e.target.value)}
            >
              <option value="building">Civil & Building Construction</option>
              <option value="materials">Vibrated Blocks & Interlocks Supply</option>
              <option value="piling">Piling & Deep Foundations</option>
            </select>
          </div>

          {service !== 'materials' && (
            <div className="estimator-group">
              <label className="estimator-label">Geotechnical Soil Condition</label>
              <select 
                className="estimator-select" 
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
              >
                <option value="mainland">Lagos Mainland (Stable Clay/Silt-sand)</option>
                <option value="island">Lagos Island / Coastal (Loose Marine Sand, High Water Table)</option>
                <option value="deep-swamp">Waterfront / Swamp (Marshy Soil, Specialized Rig Required)</option>
              </select>
            </div>
          )}

          {service === 'building' && (
            <>
              <div className="estimator-group">
                <label className="estimator-label">
                  Total Floor Area <span>{sqm} sqm</span>
                </label>
                <input 
                  type="range" 
                  min="50" 
                  max="2000" 
                  step="10" 
                  value={sqm} 
                  onChange={(e) => setSqm(Number(e.target.value))}
                  className="estimator-range"
                />
              </div>

              <div className="estimator-group">
                <label className="estimator-label">
                  Number of Floors <span>{floors} floor(s)</span>
                </label>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  step="1" 
                  value={floors} 
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="estimator-range"
                />
              </div>

              <div className="estimator-group">
                <label className="estimator-label">Finishing Grade</label>
                <select 
                  className="estimator-select" 
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                >
                  <option value="standard">Standard (Quality structural finishes)</option>
                  <option value="premium">Premium (Ideal for Lekki/V.I standard villas)</option>
                  <option value="luxury">Luxury (Waterfront / High-end architectural quality)</option>
                </select>
              </div>
            </>
          )}

          {service === 'materials' && (
            <>
              <div className="estimator-group">
                <label className="estimator-label">Material Category</label>
                <select 
                  className="estimator-select" 
                  value={blockType}
                  onChange={(e) => {
                    setBlockType(e.target.value);
                    if (e.target.value === 'interlocks') {
                      setQuantity(300);
                    } else {
                      setQuantity(2000);
                    }
                  }}
                >
                  <option value="9inch">9-Inch Vibrated Concrete Blocks</option>
                  <option value="6inch">6-Inch Vibrated Concrete Blocks</option>
                  <option value="interlocks">Geometric Interlocking Paving Stones</option>
                </select>
              </div>

              <div className="estimator-group">
                <label className="estimator-label">
                  Quantity <span>{quantity} {blockType === 'interlocks' ? 'sqm' : 'blocks'}</span>
                </label>
                <input 
                  type="range" 
                  min={blockType === 'interlocks' ? "50" : "500"} 
                  max={blockType === 'interlocks' ? "3000" : "15000"} 
                  step={blockType === 'interlocks' ? "25" : "100"} 
                  value={quantity} 
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="estimator-range"
                />
              </div>
            </>
          )}

          {service === 'piling' && (
            <>
              <div className="estimator-group">
                <label className="estimator-label">
                  Number of Bored Piles <span>{piles} piles</span>
                </label>
                <input 
                  type="range" 
                  min="5" 
                  max="150" 
                  step="5" 
                  value={piles} 
                  onChange={(e) => setPiles(Number(e.target.value))}
                  className="estimator-range"
                />
              </div>

              <div className="estimator-group">
                <label className="estimator-label">
                  Average Pile Depth <span>{depth} meters</span>
                </label>
                <input 
                  type="range" 
                  min="10" 
                  max="45" 
                  step="1" 
                  value={depth} 
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="estimator-range"
                />
              </div>
            </>
          )}

          <div className="estimator-result-card">
            <h4 className="result-title">Rough Project Estimate</h4>
            <div className="result-price">
              {formatNaira(estimateRange.min)} - {formatNaira(estimateRange.max)}
              <span>*Lagos Market Pricing Indicator</span>
            </div>
            
            {/* Dynamic Materials & Structural Breakdown Panel */}
            <div className="estimator-breakdown">
              <h5 className="breakdown-title">Estimated Materials Required</h5>
              <div className="breakdown-grid">
                {service === 'building' && (
                  <>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Cement:</span>
                      <span className="breakdown-value">~{Math.round(sqm * floors * (quality === 'luxury' ? 6.0 : quality === 'premium' ? 5.2 : 4.5))} Bags</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Steel Reinforcement:</span>
                      <span className="breakdown-value">~{(sqm * floors * (quality === 'luxury' ? 0.055 : quality === 'premium' ? 0.045 : 0.035)).toFixed(1)} Tons</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Sharp Sand:</span>
                      <span className="breakdown-value">~{Math.round(sqm * floors * 0.5)} m³</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Granite (20mm):</span>
                      <span className="breakdown-value">~{Math.round(sqm * floors * 0.4)} m³</span>
                    </div>
                  </>
                )}
                {service === 'piling' && (
                  <>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Ready-Mix Concrete:</span>
                      <span className="breakdown-value">~{Math.round(piles * depth * 0.28)} m³</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Permanent Casing:</span>
                      <span className="breakdown-value">~{Math.round(piles * (soilType === 'mainland' ? 6 : soilType === 'island' ? 12 : depth))} m</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Bored Holes:</span>
                      <span className="breakdown-value">{piles} holes ({depth}m)</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Steel Cages:</span>
                      <span className="breakdown-value">{piles} cages</span>
                    </div>
                  </>
                )}
                {service === 'materials' && (
                  <>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Total Blocks/Tiles:</span>
                      <span className="breakdown-value">{quantity} {blockType === 'interlocks' ? 'Sqm' : 'Pcs'}</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Mortar Cement:</span>
                      <span className="breakdown-value">~{Math.round(blockType === 'interlocks' ? quantity * 0.15 : quantity / 30)} Bags</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="breakdown-label">Mortar Sand:</span>
                      <span className="breakdown-value">~{Math.round(blockType === 'interlocks' ? quantity * 0.05 : quantity * 0.008)} m³</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <p className="result-disclaimer">
              <Info size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              Calculations assume standard Lagos civil design codes. Localized topography, soil testing, and access will affect final engineering billing.
            </p>
            
            <div className="estimator-actions">
              <button 
                className="btn btn-primary" 
                onClick={handleSendToWhatsApp}
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Send Proposal to WhatsApp <Send size={18} />
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={handlePrint}
                style={{ justifyContent: 'center', minWidth: '50px' }}
                title="Download PDF / Print Proposal"
              >
                <Calculator size={18} /> Print PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Print-Only Proposal Sheet */}
      <div className="print-proposal-sheet">
        <div className="print-header">
          <div className="print-logo">
            <h2>DEGODROD CONSTRUCTION LIMITED</h2>
            <p>Civil Engineering, Bored Piling Foundations & Property Sales</p>
          </div>
          <div className="print-meta">
            <p><strong>Date:</strong> {new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p><strong>Location:</strong> Lagos, Nigeria</p>
            <p><strong>Contact:</strong> progodsuccessservices@gmail.com | +234 816 319 3688</p>
          </div>
        </div>

        <hr className="print-divider" />

        <h3 className="print-title">PRELIMINARY PROJECT ESTIMATE SUMMARY</h3>

        <table className="print-table">
          <thead>
            <tr>
              <th colSpan="2">Project Specifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Service Category:</strong></td>
              <td>
                {service === 'building' && 'Civil & Building Construction'}
                {service === 'materials' && 'Vibrated Blocks & Interlocks Supply'}
                {service === 'piling' && 'Piling & Deep Foundations'}
              </td>
            </tr>
            {service === 'building' && (
              <>
                <tr>
                  <td><strong>Total Floor Area:</strong></td>
                  <td>{sqm} sqm</td>
                </tr>
                <tr>
                  <td><strong>Number of Floors:</strong></td>
                  <td>{floors} Floor(s)</td>
                </tr>
                <tr>
                  <td><strong>Finishing Grade:</strong></td>
                  <td>{quality === 'luxury' ? 'Luxury (Waterfront Architectural)' : quality === 'premium' ? 'Premium (Lekki/VI Standard)' : 'Standard'}</td>
                </tr>
                <tr>
                  <td><strong>Geotechnical Soil Type:</strong></td>
                  <td>
                    {soilType === 'mainland' && 'Lagos Mainland (Stable Ground)'}
                    {soilType === 'island' && 'Lagos Island (Loose Sand/Coastal)'}
                    {soilType === 'deep-swamp' && 'Waterfront / Deep Swamp'}
                  </td>
                </tr>
              </>
            )}
            {service === 'piling' && (
              <>
                <tr>
                  <td><strong>Number of Bored Piles:</strong></td>
                  <td>{piles} piles</td>
                </tr>
                <tr>
                  <td><strong>Average Depth:</strong></td>
                  <td>{depth} meters</td>
                </tr>
                <tr>
                  <td><strong>Soil Profile:</strong></td>
                  <td>
                    {soilType === 'mainland' && 'Lagos Mainland (Stable Ground)'}
                    {soilType === 'island' && 'Lagos Island (Loose Sand/Coastal)'}
                    {soilType === 'deep-swamp' && 'Waterfront / Deep Swamp'}
                  </td>
                </tr>
              </>
            )}
            {service === 'materials' && (
              <>
                <tr>
                  <td><strong>Material Type:</strong></td>
                  <td>{blockType === 'interlocks' ? 'Geometric Interlocking Tiles' : blockType + ' Vibrated Blocks'}</td>
                </tr>
                <tr>
                  <td><strong>Quantity Ordered:</strong></td>
                  <td>{quantity} {blockType === 'interlocks' ? 'sqm' : 'units'}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        <div className="print-cost-card">
          <h4>Estimated Budget Range</h4>
          <div className="print-price">
            {formatNaira(estimateRange.min)} - {formatNaira(estimateRange.max)}
          </div>
          <p className="print-disclaimer-text">*Lagos Market Pricing Indicator (Subject to site survey and soil investigations)</p>
        </div>

        <h3 className="print-title" style={{ marginTop: '2rem' }}>Estimated Material Breakdown</h3>
        <table className="print-table">
          <thead>
            <tr>
              <th>Material Description</th>
              <th>Estimated Quantity</th>
            </tr>
          </thead>
          <tbody>
            {service === 'building' && (
              <>
                <tr>
                  <td>Standard Portland Cement (42.5R grade)</td>
                  <td>~{Math.round(sqm * floors * (quality === 'luxury' ? 6.0 : quality === 'premium' ? 5.2 : 4.5))} Bags</td>
                </tr>
                <tr>
                  <td>Reinforcement Steel Bars (High-tensile, 12mm-25mm)</td>
                  <td>~{(sqm * floors * (quality === 'luxury' ? 0.055 : quality === 'premium' ? 0.045 : 0.035)).toFixed(1)} Tons</td>
                </tr>
                <tr>
                  <td>Sharp Sand (Concrete & blockwork)</td>
                  <td>~{Math.round(sqm * floors * 0.5)} m³</td>
                </tr>
                <tr>
                  <td>Granite Stone (20mm aggregate for reinforced concrete)</td>
                  <td>~{Math.round(sqm * floors * 0.4)} m³</td>
                </tr>
              </>
            )}
            {service === 'piling' && (
              <>
                <tr>
                  <td>Ready-Mix Concrete (Grade M25/M30)</td>
                  <td>~{Math.round(piles * depth * 0.28)} m³</td>
                </tr>
                <tr>
                  <td>Permanent Steel Casing</td>
                  <td>~{Math.round(piles * (soilType === 'mainland' ? 6 : soilType === 'island' ? 12 : depth))} meters</td>
                </tr>
                <tr>
                  <td>Drilled Bored Holes</td>
                  <td>{piles} holes ({depth}m depth)</td>
                </tr>
                <tr>
                  <td>High-strength Reinforcement Cages</td>
                  <td>{piles} units (Full depth)</td>
                </tr>
              </>
            )}
            {service === 'materials' && (
              <>
                <tr>
                  <td>{blockType === 'interlocks' ? 'Geometric Interlocks' : blockType + ' Vibrated Blocks'}</td>
                  <td>{quantity} {blockType === 'interlocks' ? 'sqm' : 'units'}</td>
                </tr>
                <tr>
                  <td>Standard Portland Cement (for laying bed/mortar)</td>
                  <td>~{Math.round(blockType === 'interlocks' ? quantity * 0.15 : quantity / 30)} Bags</td>
                </tr>
                <tr>
                  <td>Laying Sand</td>
                  <td>~{Math.round(blockType === 'interlocks' ? quantity * 0.05 : quantity * 0.008)} m³</td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        <div className="print-disclaimer">
          <h5>Terms & Notes:</h5>
          <ol>
            <li>This document is a preliminary estimate generated via the DEGODROD Construction online estimator tool. It is for budgetary planning purposes only.</li>
            <li>A comprehensive geotechnical soil test (for piling projects) or site topographic survey is required before a final structural proposal can be submitted.</li>
            <li>Prices are based on prevailing Lagos construction market costs and are subject to fluctuations in material pricing (cement, steel, diesel).</li>
          </ol>
        </div>

        <div className="print-signatures">
          <div className="sig-block">
            <p>Prepared by:</p>
            <div className="sig-line"></div>
            <p><strong>Engr. Success</strong></p>
            <p>CEO, DEGODROD Construction Ltd</p>
          </div>
          <div className="sig-block">
            <p>Client Acceptance:</p>
            <div className="sig-line"></div>
            <p>Name:</p>
            <p>Date:</p>
          </div>
        </div>
      </div>
    </section>
  );
}
