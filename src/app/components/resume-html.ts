/**
 * Christopher Kenreigh Resume HTML
 * This file contains the HTML resume that opens in a new tab
 */

export const resumeHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Christopher Kenreigh – Director of UX/UI Software</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --blue: #2563c7;
      --dark: #111111;
      --mid: #444444;
      --light: #666666;
      --rule: #dddddd;
      --bg: #ffffff;
      --sidebar-bg: #f7f8fa;
    }

    body {
      font-family: 'DM Sans', sans-serif;
      font-size: 10.5pt;
      color: var(--dark);
      background: #e8e8e8;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 32px 16px;
      min-height: 100vh;
    }

    .page {
      background: var(--bg);
      width: 850px;
      max-width: 100%;
      box-shadow: 0 4px 40px rgba(0,0,0,0.18);
      display: grid;
      grid-template-rows: auto 1fr;
    }

    /* ── HEADER ── */
    header {
      padding: 28px 36px 18px;
      border-bottom: 2px solid var(--rule);
    }
    header h1 {
      font-family: 'DM Serif Display', serif;
      font-size: clamp(20pt, 5vw, 30pt);
      font-weight: 400;
      color: var(--dark);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }
    header .title-line {
      font-size: clamp(9pt, 2.5vw, 11pt);
      font-weight: 700;
      color: var(--blue);
      margin: 3px 0 8px;
      letter-spacing: 0.2px;
    }
    header .contact {
      font-size: 9.5pt;
      color: var(--mid);
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      align-items: center;
    }
    header .contact a {
      color: var(--blue);
      text-decoration: none;
      font-weight: 500;
    }
    header .contact span { color: var(--rule); }

    /* ── BODY LAYOUT ── */
    .body {
      display: grid;
      grid-template-columns: 1fr 240px;
    }

    /* ── LEFT (Experience) ── */
    .main {
      padding: 24px 36px 32px;
      border-right: 1px solid var(--rule);
    }

    .section-title {
      font-family: 'DM Serif Display', serif;
      font-size: 14pt;
      font-weight: 400;
      color: var(--dark);
      border-bottom: 1.5px solid var(--dark);
      padding-bottom: 4px;
      margin-bottom: 14px;
    }

    .job { margin-bottom: 20px; }

    .job-title {
      font-size: 10.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .job-company {
      font-size: 10pt;
      font-weight: 500;
      color: var(--blue);
      text-decoration: none;
    }
    .job-company:hover { text-decoration: underline; }

    .job-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin: 2px 0 6px;
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .job-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 16px;
      vertical-align: middle;
    }

    .job ul {
      list-style: disc;
      padding-left: 16px;
    }
    .job ul li {
      font-size: 9.5pt;
      color: var(--mid);
      line-height: 1.5;
      margin-bottom: 3px;
    }

    /* ── RIGHT (Sidebar) ── */
    .sidebar {
      background: var(--sidebar-bg);
      padding: 24px 22px 32px;
    }

    .sidebar-section { margin-bottom: 22px; }

    .sidebar .section-title {
      font-size: 12pt;
      border-bottom-color: var(--mid);
    }

    .summary-quote {
      font-size: 9.5pt;
      font-style: italic;
      color: var(--mid);
      line-height: 1.6;
      margin-bottom: 10px;
    }

    .summary-bullets {
      list-style: disc;
      padding-left: 14px;
    }
    .summary-bullets li {
      font-size: 8.8pt;
      color: var(--mid);
      line-height: 1.55;
      margin-bottom: 3px;
    }

    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      margin-top: 6px;
    }
    .tag {
      font-size: 8pt;
      font-weight: 500;
      color: var(--blue);
      background: rgba(37,99,199,0.08);
      border-radius: 3px;
      padding: 2px 7px;
    }

    .dot-list {
      list-style: disc;
      padding-left: 14px;
    }
    .dot-list li {
      font-size: 9pt;
      color: var(--mid);
      line-height: 1.6;
    }

    /* Education */
    .edu-degree {
      font-size: 9.5pt;
      font-weight: 700;
      color: var(--dark);
    }
    .edu-school {
      font-size: 9pt;
      color: var(--blue);
      font-weight: 500;
    }
    .edu-meta {
      font-size: 8.5pt;
      color: var(--light);
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
    }
    .edu-meta .material-symbols-outlined {
      color: #00A000;
      font-size: 15px;
      vertical-align: middle;
    }

    .share-link {
      display: block;
      text-align: right;
      font-size: 8.5pt;
      color: var(--blue);
      text-decoration: none;
      font-style: italic;
      margin-top: 16px;
    }
    .share-link:hover { text-decoration: underline; }

    /* ── MOBILE RESPONSIVE ── */
    @media (max-width: 680px) {
      body {
        padding: 0;
        background: var(--bg);
        align-items: stretch;
      }

      .page {
        width: 100%;
        box-shadow: none;
        border-radius: 0;
      }

      header {
        padding: 20px 18px 14px;
      }

      header h1 {
        font-size: 22pt;
      }

      header .title-line {
        font-size: 9pt;
      }

      header .contact {
        font-size: 9pt;
        gap: 6px;
        row-gap: 4px;
      }

      .body {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
      }

      .main {
        padding: 18px 18px 24px;
        border-right: none;
        border-bottom: 1px solid var(--rule);
        order: 2;
      }

      .sidebar {
        padding: 18px 18px 20px;
        order: 1;
        border-bottom: 2px solid var(--rule);
      }

      .section-title {
        font-size: 13pt;
      }

      .sidebar .section-title {
        font-size: 11pt;
      }

      .job ul li {
        font-size: 9pt;
      }

      .job-meta {
        font-size: 8pt;
        gap: 4px;
      }

      .summary-quote {
        font-size: 9pt;
      }

      .tag {
        font-size: 7.5pt;
      }
    }

    @media (min-width: 681px) and (max-width: 900px) {
      body {
        padding: 16px 8px;
      }

      .page {
        width: 100%;
      }

      header {
        padding: 22px 24px 14px;
      }

      .main {
        padding: 20px 24px 28px;
      }

      .sidebar {
        padding: 20px 16px 28px;
      }

      .body {
        grid-template-columns: 1fr 200px;
      }
    }

    @media print {
      body { background: white; padding: 0; }
      .page { box-shadow: none; width: 100%; }
    }
  </style>
</head>
<body>
<div class="page">

  <!-- HEADER -->
  <header>
    <h1>Christopher Kenreigh</h1>
    <div class="title-line">Director of UX/UI Software &amp; Design Systems | Regulated Product Development | Multi-Disciplinary R&amp;D Leadership | Human Factors | Complex System Programs</div>
    <div class="contact">
      <span style="color: #212121; font-weight:700">480-206-2145</span>
      <span>|</span>
      <a href="mailto:c.kenreigh@gmail.com" style="font-weight:800;">c.kenreigh@gmail.com</a>
      <span>|</span>
      <a href="https://www.linkedin.com/in/kenreigh/" target="_blank">LinkedIn</a>
      <span>|</span>
      <a href="https://www.uxapex.com/portfolioa22" target="_blank">Portfolio</a>
    </div>
  </header>

  <!-- BODY -->
  <div class="body">

    <!-- MAIN EXPERIENCE -->
    <main class="main">
      <h2 class="section-title">Experience</h2>

      <div class="job">
        <div class="job-title">Director of UX/UI Design &amp; Research (Principal)</div>
        <a class="job-company" href="https://www.plexusworldwide.com" target="_blank">Plexus Worldwide</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2024 – Present
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Directed 5 UX/UI designers across a multi-program portfolio spanning 3 international regions; owned concept-through-launch UX/UI development with full accountability for design validation and technology transfer into production</li>
          <li>Led complex system development program modernizing multi-platform product experience; applied root cause analysis via Power BI behavioral data to identify use-error patterns—reducing critical task abandonment 43%</li>
          <li>Translated regulatory compliance requirements and quality standards into validated user interfaces; facilitated formative evaluations and controlled A/B validation studies with cross-functional Product, Engineering, and Operations partners</li>
          <li>Architected common design principles and unified component system across 6 siloed platforms—achieving 60–90% org-wide adoption and establishing visual consistency across product families</li>
          <li>Owned resource planning, personnel development, and outsourcing strategy for UX/UI function; led LLM-driven AI workflow adoption increasing program delivery velocity 35%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX/UI Designer – Regulated Industrial Systems</div>
        <a class="job-company" href="https://www.freeportmcmoran.com" target="_blank">Freeport-McMoRan</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          08/2022 – 10/2023
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Led end-to-end UX/UI design and development for regulated industrial digital tools—delivering compliant web and mobile interfaces improving operational task efficiency 30% while meeting documentation and quality standards</li>
          <li>Facilitated 10+ formative user research workshops translating use-environment analysis into actionable product requirements across multi-disciplinary R&amp;D teams</li>
          <li>Presented program design strategy and Agile development roadmaps to C-suite and senior leadership, securing approval and investment for 5 major regulated product releases</li>
          <li>Executed technology transfer of scalable MUI React design system into production across web, iOS, and Android; authored validation documentation enabling engineering teams to build with full design intent fidelity</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX/UI Designer – Compliance &amp; Regulated Platforms</div>
        <a class="job-company" href="https://www.opentechalliance.com" target="_blank">OpenTech Alliance</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          05/2021 – 08/2022
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Hybrid
        </div>
        <ul>
          <li>Championed human-centered UX/UI methodology to senior leadership, securing budget for 3 new UX programs and elevating design maturity across the organization</li>
          <li>Redesigned Point of Sale kiosk user interface applying validated usability engineering principles—improving critical task completion 75% and eliminating identified use errors in high-frequency workflows</li>
          <li>Designed and validated compliant user data capture processes adhering to government and regulatory requirements—achieving 100% compliance and eliminating legal risk across all end-user-facing flows</li>
          <li>Applied root cause analysis to identify UX friction patterns across end-user journeys, driving design solutions that improved operational fulfillment efficiency 25%</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">UX/UI Design Lead – Industrial &amp; Hardware Systems</div>
        <a class="job-company" href="https://www.siemens.com" target="_blank">Siemens</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          07/2020 – 05/2021
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Remote
        </div>
        <ul>
          <li>Led cross-functional UX/UI integration across 4 simultaneous regulated industrial product programs—unifying design systems and establishing common design principles across a complex hardware-software portfolio</li>
          <li>Produced comprehensive UI specifications, validation guidelines, and design documentation reducing program dissemination overhead 50%—enabling engineering teams to execute with full design intent fidelity</li>
          <li>Managed program planning, resource allocation, and stakeholder alignment—negotiating investment approval for 2 high-impact UX/UI initiatives with senior leadership</li>
          <li>Designed 3D-integrated and AutoCAD-aligned UI layouts for complex industrial hardware application interfaces—demonstrating fluency in hardware-software UX integration across regulated use environments</li>
        </ul>
      </div>

      <div class="job">
        <div class="job-title">Senior UX Designer – Multi-Platform Product Systems</div>
        <a class="job-company" href="https://www.glynlyon.com" target="_blank">Glynlyon Inc</a>
        <div class="job-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          02/2014 – 04/2019
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ | Office
        </div>
        <ul>
          <li>Designed WCAG and ADA-compliant user interfaces across multi-platform products in a regulated environment; applied Android and iOS platform guidelines to ensure standards-compliant experiences</li>
          <li>Drove data-informed UX/UI design decisions through structured user research, usability testing, and formative evaluations—improving task ease-of-use 65%</li>
          <li>Communicated complex UI design rationale and interaction specifications to engineering stakeholders, ensuring technical feasibility and design intent fidelity across development cycles</li>
          <li>Led cross-functional teams through human-centered design and Design Thinking workshops to define user needs, use-environment requirements, and aligned product strategy</li>
        </ul>
      </div>
    </main>

    <!-- SIDEBAR -->
    <aside class="sidebar">

      <div class="sidebar-section">
        <h2 class="section-title">Summary</h2>
        <p class="summary-quote" style="color: #212121; font-weight:700">"Director-level UX/UI R&amp;D leader—integrating software, hardware, and labeling experiences across regulated, compliance-driven programs from concept through validated product launch."</p>
        <ul class="summary-bullets">
          <li>12+ years directing complex, multi-disciplinary UX/UI programs in regulated environments</li>
          <li>People manager of UX/UI teams; drives resource planning, outsourcing strategy, and personnel development</li>
          <li>Translates regulatory constraints and quality standards into validated, compliant user experiences</li>
          <li>Design system architect; establishes common design principles across product families and platforms</li>
          <li>Cross-functional R&amp;D collaborator with Regulatory, Quality, Operations, Marketing, and Clinical stakeholders</li>
          <li>AI workflow integration; formative and summative usability evaluation; root cause analysis</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Key Achievements</h2>
        <ul class="dot-list">
          <li>43% reduction in critical task abandonment via validated UX redesign</li>
          <li>–17% to +2% operating margin reversal through AI-driven design program</li>
          <li>60–90% design system adoption; 50% faster program delivery velocity</li>
          <li>10+ regulated product programs approved at C-suite level</li>
          <li>100% regulatory compliance across all end-user-facing regulated flows</li>
        </ul>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Skills</h2>
        <div class="tag-list">
          <span class="tag">UX/UI Software R&amp;D</span>
          <span class="tag">Regulated Product Development</span>
          <span class="tag">Human Factors Engineering</span>
          <span class="tag">Usability Engineering</span>
          <span class="tag">Formative &amp; Summative Evaluation</span>
          <span class="tag">Root Cause Analysis</span>
          <span class="tag">Technology Transfer</span>
          <span class="tag">Design Systems</span>
          <span class="tag">Common Design Principles</span>
          <span class="tag">Hardware-Software UX</span>
          <span class="tag">Industrial Design Integration</span>
          <span class="tag">Resource Planning &amp; Budgeting</span>
          <span class="tag">Outsourcing Strategy</span>
          <span class="tag">Personnel Development</span>
          <span class="tag">Figma</span>
          <span class="tag">MUI React</span>
          <span class="tag">WCAG / ADA Compliance</span>
          <span class="tag">Agile / Scrum</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">AI &amp; Emerging Tech</h2>
        <div class="tag-list">
          <span class="tag">LLM-Based Workflows</span>
          <span class="tag">AI-Assisted Prototyping</span>
          <span class="tag">Agentic AI</span>
          <span class="tag">RAG Systems</span>
          <span class="tag">Multimodal AI</span>
          <span class="tag">Responsible AI</span>
        </div>
      </div>

      <div class="sidebar-section">
        <h2 class="section-title">Education</h2>
        <div class="edu-degree">Bachelor of Arts – Information Design &amp; Technology</div>
        <div class="edu-school">The Art Institute of Phoenix</div>
        <div class="edu-meta">
          <span class="material-symbols-outlined">calendar_month</span>
          09/2002 – 09/2005
          <span class="material-symbols-outlined">location_on</span>
          Phoenix, AZ
        </div>
        <div style="margin-top:10px; font-size:8pt; color:var(--mid); line-height:1.6;">
          <strong style="color:var(--dark);">Certifications:</strong> Project Management &amp; Agile Workflows (NASBA, 891/1000) · Microsoft Business, Data Analysis &amp; Software Development (95%) · TestMu AI Test Automation — LambdaTest (100%) · CompTIA A+ &amp; Network+
        </div>
      </div>

    </aside>
  </div><!-- /body -->
</div><!-- /page -->
</body>
</html>`;

/**
 * Opens the resume HTML in a new browser tab using Blob URL
 */
export function openResumeInNewTab(): void {
  // Create a Blob from the HTML string
  const blob = new Blob([resumeHTML], { type: 'text/html' });
  
  // Generate a blob URL
  const blobURL = URL.createObjectURL(blob);
  
  // Open in new tab
  const newWindow = window.open(blobURL, '_blank');
  
  // Clean up the blob URL after a delay to ensure the page loads
  if (newWindow) {
    setTimeout(() => {
      URL.revokeObjectURL(blobURL);
    }, 1000);
  }
}
