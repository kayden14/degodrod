import React from 'react';
import { ArrowRight, FileDown } from 'lucide-react';

const today = new Date().toLocaleDateString('en-NG', {
  year: 'numeric', month: 'long', day: 'numeric'
});

function generateCorporateProfile() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DEGODROD Construction Limited — Corporate Profile</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@300;400;500;600&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff;padding:0}
  @page{size:A4;margin:20mm 18mm}

  /* COVER PAGE */
  .cover{
    min-height:100vh;display:flex;flex-direction:column;
    background:linear-gradient(160deg,#0a0b0e 60%,#1a2e1c 100%);
    color:#fff;padding:60px 64px;page-break-after:always;
  }
  .cover-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:auto}
  .brand{font-family:'Playfair Display',serif;font-size:13px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.5)}
  .coren-badge{font-size:10px;letter-spacing:1.5px;color:#D4AF37;border:1px solid rgba(212,175,55,.4);padding:6px 14px;border-radius:3px}
  .cover-main{margin-top:auto;padding-bottom:60px}
  .cover-tag{font-size:10px;letter-spacing:3px;color:#D4AF37;text-transform:uppercase;margin-bottom:20px}
  .cover-title{font-family:'Playfair Display',serif;font-size:52px;font-weight:900;line-height:1.05;margin-bottom:24px}
  .cover-title span{color:#D4AF37;font-style:italic}
  .cover-sub{font-size:15px;color:rgba(255,255,255,.6);line-height:1.7;max-width:500px;margin-bottom:40px}
  .cover-rule{width:60px;height:3px;background:#D4AF37;margin-bottom:30px}
  .cover-meta{display:grid;grid-template-columns:1fr 1fr 1fr;gap:24px;padding-top:32px;border-top:1px solid rgba(255,255,255,.1)}
  .cover-meta-item label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.4);display:block;margin-bottom:6px}
  .cover-meta-item p{font-size:13px;font-weight:500;color:#fff}

  /* BODY PAGES */
  .page{padding:48px 64px;page-break-after:always}
  .page:last-child{page-break-after:auto}
  .page-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:20px;border-bottom:2px solid #D4AF37;margin-bottom:36px}
  .page-header h2{font-family:'Playfair Display',serif;font-size:26px;color:#1a1a1a}
  .page-header .pg-num{font-size:11px;color:#999;letter-spacing:1px}

  h3{font-family:'Playfair Display',serif;font-size:18px;color:#1a2e1c;margin:28px 0 12px}
  p{font-size:13px;line-height:1.8;color:#444;margin-bottom:12px}

  /* SERVICE TABLE */
  .service-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:16px}
  .service-card{border:1px solid #e5e5e5;border-left:4px solid #D4AF37;padding:16px 18px;border-radius:3px}
  .service-card h4{font-size:13px;font-weight:700;color:#1a2e1c;margin-bottom:6px}
  .service-card p{font-size:12px;color:#666;margin:0}

  /* STATS */
  .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin:20px 0}
  .stat-box{background:#f8f7f4;border-radius:6px;padding:20px;text-align:center;border-top:3px solid #D4AF37}
  .stat-box .num{font-family:'Playfair Display',serif;font-size:32px;font-weight:900;color:#1a2e1c;line-height:1}
  .stat-box .lbl{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#888;margin-top:6px}

  /* PROJECT TABLE */
  table{width:100%;border-collapse:collapse;margin-top:12px;font-size:12px}
  th{background:#1a2e1c;color:#D4AF37;padding:10px 12px;text-align:left;font-weight:600;letter-spacing:.5px}
  td{padding:9px 12px;border-bottom:1px solid #eee;vertical-align:top}
  tr:nth-child(even) td{background:#fafaf8}

  /* ACCREDITATION */
  .badge-row{display:flex;gap:16px;margin-top:16px}
  .badge{border:2px solid #1a2e1c;border-radius:6px;padding:14px 20px;text-align:center;min-width:120px}
  .badge .abbr{font-family:'Playfair Display',serif;font-size:22px;font-weight:900;color:#1a2e1c}
  .badge .full{font-size:9px;color:#777;margin-top:4px;line-height:1.4}

  /* FOOTER BAR */
  .doc-footer{position:fixed;bottom:0;left:0;right:0;height:36px;background:#1a2e1c;display:flex;align-items:center;justify-content:space-between;padding:0 64px}
  .doc-footer span{font-size:9px;color:rgba(255,255,255,.5);letter-spacing:1px}

  @media print{
    body{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  }
</style>
</head>
<body>

<!-- COVER PAGE -->
<div class="cover">
  <div class="cover-top">
    <div class="brand">DEGODROD Construction Limited</div>
    <div class="coren-badge">COREN REGISTERED</div>
  </div>
  <div class="cover-main">
    <div class="cover-tag">Corporate Profile — ${today}</div>
    <h1 class="cover-title">Building the<br>Future of <span>Lagos</span><br>Infrastructure</h1>
    <div class="cover-rule"></div>
    <p class="cover-sub">A full-service civil engineering, piling foundation, and real estate development firm delivering precision-built structures across Lagos State and Nigeria.</p>
    <div class="cover-meta">
      <div class="cover-meta-item"><label>Head Office</label><p>Lagos, Nigeria</p></div>
      <div class="cover-meta-item"><label>Registration</label><p>CAC — RC No. XXXXXXX</p></div>
      <div class="cover-meta-item"><label>Contact</label><p>+234 816 319 3688</p></div>
    </div>
  </div>
</div>

<!-- PAGE 1 — COMPANY OVERVIEW -->
<div class="page">
  <div class="page-header">
    <h2>Company Overview</h2>
    <span class="pg-num">DEGODROD CONSTRUCTION LTD · PG 01</span>
  </div>

  <p>DEGODROD Construction Limited is an indigenous Nigerian engineering firm established in Lagos, providing comprehensive civil engineering, piling foundation, building material manufacturing, and real estate brokerage services. We serve private individuals, corporate developers, and government agencies across Lagos State.</p>
  <p>Our operational ethos blends rigorous structural analysis with deep-rooted knowledge of Lagos' unique geotechnical profiles — from the stable clay of the mainland to the marshy, high-water-table coastal soils of the Islands. This expertise allows us to deliver structurally sound, cost-effective, and sustainable construction solutions.</p>

  <h3>Our Key Statistics</h3>
  <div class="stats-row">
    <div class="stat-box"><div class="num">20+</div><div class="lbl">Years Experience</div></div>
    <div class="stat-box"><div class="num">300+</div><div class="lbl">Projects Delivered</div></div>
    <div class="stat-box"><div class="num">100%</div><div class="lbl">Client Satisfaction</div></div>
    <div class="stat-box"><div class="num">50+</div><div class="lbl">Expert Engineers</div></div>
  </div>

  <h3>Our Core Services</h3>
  <div class="service-grid">
    <div class="service-card"><h4>Civil &amp; Building Construction</h4><p>Residential homes, commercial office complexes, industrial warehouses — from excavation to final finishes.</p></div>
    <div class="service-card"><h4>Piling &amp; Deep Foundations</h4><p>Bored pile installations, micro-piling, steel casing drilling, and full geotechnical soil testing for Lagos terrains.</p></div>
    <div class="service-card"><h4>Vibrated Blocks &amp; Interlocks</h4><p>In-house manufacturing of high-compressive-strength concrete blocks (6" &amp; 9") and geometric interlocking paving stones.</p></div>
    <div class="service-card"><h4>Land Documentation &amp; Survey</h4><p>Processing of C of O, building plan approvals, survey plans, and title verification within Lagos State.</p></div>
    <div class="service-card"><h4>Engineering Consultancy</h4><p>Structural design, BOQ preparation, site supervision, NDE assessments, and project management services.</p></div>
    <div class="service-card"><h4>Property Brokerage &amp; Sales</h4><p>Turnkey development and brokerage of verified lands, completed homes, and investment properties across Lagos.</p></div>
  </div>
</div>

<!-- PAGE 2 — SELECTED PROJECTS -->
<div class="page">
  <div class="page-header">
    <h2>Selected Project Portfolio</h2>
    <span class="pg-num">DEGODROD CONSTRUCTION LTD · PG 02</span>
  </div>

  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Category</th>
        <th>Location</th>
        <th>Year</th>
        <th>Scope Highlight</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Lekki Commercial Skyscraper</td><td>Civil Engineering</td><td>Lekki Phase 1</td><td>2025</td><td>120 bored piles, 15-storey RC frame structure</td></tr>
      <tr><td>Victoria Island Estate Paving</td><td>Blocks &amp; Interlocks</td><td>Victoria Island</td><td>2026</td><td>45,000 sqm double-T interlocking paving supply</td></tr>
      <tr><td>Ikoyi Luxury Towers Foundation</td><td>Piling &amp; Drilling</td><td>Ikoyi, Lagos</td><td>2024</td><td>120 bored piles to 42m depth, bentonite slurry method</td></tr>
      <tr><td>Banana Island Smart Villas</td><td>Property Sales</td><td>Banana Island</td><td>2025</td><td>Turnkey luxury smart-home development, C of O verified</td></tr>
      <tr><td>Ajah Road Drainage &amp; Culverts</td><td>Civil Engineering</td><td>Ajah, Lagos</td><td>2024</td><td>3.2 km box culvert drainage system, LASBCA-compliant</td></tr>
      <tr><td>Ikeja Industrial Warehouse</td><td>Civil Engineering</td><td>Ikeja, Lagos</td><td>2023</td><td>6,500 sqm warehouse, raft-on-micro-pile foundation</td></tr>
      <tr><td>Alimosho Mass Housing Blocks</td><td>Manufacturing</td><td>Alimosho LGA</td><td>2023</td><td>320,000 vibrated blocks, NIS 87 certified quality</td></tr>
      <tr><td>Yaba Tech Hub Renovation</td><td>Consulting</td><td>Yaba, Lagos</td><td>2026</td><td>NDE structural audit, BOQ: ₦485M, COREN-certified</td></tr>
      <tr><td>Lekki Shoreline Retaining Wall</td><td>Civil Engineering</td><td>Lekki Phase 2</td><td>2024</td><td>480m interlocked steel sheet piling, 50-year design life</td></tr>
    </tbody>
  </table>
</div>

<!-- PAGE 3 — LEADERSHIP & ACCREDITATION -->
<div class="page">
  <div class="page-header">
    <h2>Leadership &amp; Accreditation</h2>
    <span class="pg-num">DEGODROD CONSTRUCTION LTD · PG 03</span>
  </div>

  <h3>Managing Director &amp; CEO</h3>
  <p><strong>Engr. Ugwo Godwin David</strong> is the founding Managing Director and Chief Executive Officer of DEGODROD Construction Limited. A COREN-registered civil engineer with over 20 years of hands-on experience across Lagos' most challenging geotechnical environments, Engr. Ugwo has led the firm from a consulting practice to a full-service construction powerhouse.</p>
  <p><em>"We believe that civil engineering is more than just stacking concrete; it is the physical foundation upon which communities grow and families thrive. At DEGODROD, every pile driven and every block vibrated is a testament to our commitment to Nigeria's structural future."</em></p>

  <h3>Regulatory Accreditations</h3>
  <div class="badge-row">
    <div class="badge"><div class="abbr">COREN</div><div class="full">Council for the Regulation<br>of Engineering in Nigeria<br><strong>Registered Firm</strong></div></div>
    <div class="badge"><div class="abbr">NSE</div><div class="full">Nigerian Society<br>of Engineers<br><strong>Society Member</strong></div></div>
    <div class="badge"><div class="abbr">LASBCA</div><div class="full">Lagos State Building<br>Control Agency<br><strong>Fully Compliant</strong></div></div>
    <div class="badge"><div class="abbr">LSDPC</div><div class="full">Lagos State Dev. &amp;<br>Property Corporation<br><strong>Approved Partner</strong></div></div>
  </div>

  <h3>Contact &amp; Engagement</h3>
  <table>
    <tbody>
      <tr><td><strong>Company Name</strong></td><td>DEGODROD Construction Limited</td></tr>
      <tr><td><strong>Head Office</strong></td><td>Lagos, Nigeria</td></tr>
      <tr><td><strong>Phone / WhatsApp</strong></td><td>+234 816 319 3688</td></tr>
      <tr><td><strong>Email</strong></td><td>progodsuccessservices@gmail.com</td></tr>
      <tr><td><strong>Services</strong></td><td>Civil Engineering · Piling · Blocks &amp; Interlocks · Real Estate · Consulting</td></tr>
      <tr><td><strong>Document Date</strong></td><td>${today}</td></tr>
    </tbody>
  </table>

  <p style="margin-top:28px;font-size:11px;color:#999;border-top:1px solid #eee;padding-top:16px">
    This corporate profile is a confidential document issued by DEGODROD Construction Limited for prospective clients, partners, and government agencies. All project data and statistics are accurate as of the date of issue.
  </p>
</div>

<div class="doc-footer">
  <span>DEGODROD CONSTRUCTION LIMITED — CORPORATE PROFILE ${today}</span>
  <span>CONFIDENTIAL · FOR AUTHORISED USE ONLY</span>
</div>

<script>window.onload = function(){ window.print(); }<\/script>
</body></html>`;

  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
}

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url('/assets/hero_bg.png')` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          Lagos, Nigeria
        </div>
        <h1 className="hero-title">
          Building the Future of <span>Lagos Infrastructure</span>
        </h1>
        <p className="hero-desc">
          DEGODROD Construction Limited delivers elite civil engineering, piling foundation work, high-durability vibrated blocks, interlocks, and premium real estate development. Guided by precision, integrity, and safety.
        </p>
        <div className="hero-ctas">
          <button 
            className="btn btn-primary"
            onClick={() => handleScrollTo('portfolio')}
          >
            Explore Projects <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Work With Us
          </button>
          <button
            className="btn btn-outline"
            onClick={generateCorporateProfile}
            title="Generate & download the corporate profile as PDF"
          >
            <FileDown size={18} /> Corporate Profile
          </button>
        </div>
      </div>
    </section>
  );
}
