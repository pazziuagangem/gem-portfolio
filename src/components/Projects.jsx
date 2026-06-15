import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'PacifiGo Mobile Application',
      company: 'Pacifico Assistance Corp.',
      tech: ['OutSystems ODC', 'REST API', 'Google Maps API'],
      role: 'Sole Developer',
      description:
        'Real-time roadside assistance platform replacing a fully manual coordination workflow between clients, dispatchers, and service providers.',
      highlights: [
        'Live driver location tracking on Google Maps with real-time ETA and distance display',
        'Unified group chat between clients, dispatchers, and service providers',
        'Driver photo upload as proof of service completion',
        'Eliminated multi-call coordination workflow entirely',
      ],
      impact: 'Agents shifted from manual status calls to handling more clients simultaneously — directly improving operational throughput.',
      impactStat: { before: 'Manual calls', after: 'Real-time tracking' },
      tag: 'Mobile App',
      screenshots: [
    { src: '/images/login.jpg', caption: 'Login screen' },
    { src: '/images/dashboard.jpg', caption: 'Driver dashboard' },
    { src: '/images/map.jpg', caption: 'Live map & route tracking' },
    { src: '/images/messages.jpg', caption: 'Direct messaging' },
    { src: '/images/photo-upload.jpg', caption: 'Photo proof of service' },
  ],
},
    {
      title: 'Pathways Internal Enterprise System',
      company: 'Pacifico Assistance Corp.',
      tech: ['OutSystems ODC', 'MS SQL', 'REST API'],
      role: 'Sole Developer',
      description:
        'Inherited a system that was ~80% non-functional. Rebuilt and stabilized the entire application, then extended it with new modules.',
      highlights: [
        'Rebuilt from ~80% non-functional to fully operational',
        'New modules for Finance, Marketing, and Operations',
        'Dashboards, automated reports, and audit trail features',
        'Bulk data uploader for 5,000–10,000 record insurance files',
      ],
      impact: 'Reduced file processing from a full day to 5–10 minutes — enabling same-day turnaround for all incoming files.',
      impactStat: { before: 'Full day / file', after: '5–10 mins / file' },
      tag: 'Enterprise Web',
    },
    {
      title: 'Productivity Monitoring Tool (PMT)',
      company: 'SeidoPro Global Inc.',
      tech: ['OutSystems 11', 'MS SQL'],
      role: 'Designer · Developer · Tester · DevOps',
      description:
        'Real-time productivity monitoring system covering rank-and-file employees through management with KPI dashboards and task tracking.',
      highlights: [
        'Real-time KPI dashboards per employee and team',
        'Task tracking, break monitoring, and duration analytics',
        'Supervisors can assign/reassign tasks directly in the system',
        'Reduced need for manual check-ins and status updates',
      ],
      impact: 'Managers gained real-time visibility into team productivity without manual check-ins.',
      impactStat: { before: 'Manual check-ins', after: 'Real-time dashboard' },
      tag: 'Web App',
    },
    {
      title: 'Performance Monitoring System (PMS)',
      company: 'SeidoPro Global Inc.',
      tech: ['OutSystems 11', 'MS SQL'],
      role: 'Designer · Developer · Tester · DevOps',
      description:
        'Performance tracking system integrated with PMT — automatically computing employee grades and ratings from actual productivity data.',
      highlights: [
        'Auto-computes employee grades from PMT productivity data',
        'Supervisors generate structured feedback from the system',
        'Calculates incentive amounts automatically',
        'Eliminated manual computation by supervisors and managers',
      ],
      impact: 'Replaced time-consuming manual performance computation with a fully automated, data-driven workflow.',
      impactStat: { before: 'Manual computation', after: 'Auto-generated ratings' },
      tag: 'Web App',
    },
    {
      title: 'Excel Report Automation Suite',
      company: 'SeidoPro Global Inc.',
      tech: ['Microsoft Excel', 'Advanced Formulas'],
      role: 'Creator & Owner',
      description:
        'Suite of Excel automation templates that eliminated manual report generation — paste raw data and get the required format automatically.',
      highlights: [
        'Users paste raw client data → template auto-produces output',
        'Daily reports: 15–30 mins reduced to 5–15 mins',
        'Monthly reports: 4–6 hours reduced to ~2 hours',
        'Standardized output format across all client deliverables',
      ],
      impact: 'Reduced daily report processing time by 50–70%, freeing the team to focus on data validation instead of formatting.',
      impactStat: { before: '50–70% time wasted', after: '50–70% time saved' },
      tag: 'Automation',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <p className="section-eyebrow">My work</p>
        <h2 className="section-title">Projects & Impact</h2>
        <p className="section-subtitle">
          Real systems built for real businesses — each one solving a specific operational problem.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="card-top">
                <div className="card-meta">
                  <span className="card-tag">{project.tag}</span>
                  <span className="card-role">{project.role}</span>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-company">{project.company}</p>
                <p className="card-desc">{project.description}</p>
              </div>

              <div className="card-highlights">
                {project.highlights.map((h, j) => (
                  <div className="highlight-item" key={j}>
                    <span className="highlight-dot">▸</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
                
              <div className="card-bottom">
                <div className="impact-row">
                  <span className="impact-label">Impact</span>
                  <p className="impact-text">{project.impact}</p>
                </div>
                <div className="impact-stat">
                  <span className="stat-before">{project.impactStat.before}</span>
                  <span className="stat-arrow">→</span>
                  <span className="stat-after">{project.impactStat.after}</span>
                </div>
                <div className="tech-pills">
                  {project.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              {project.screenshots && project.screenshots.length > 0 && (
  <div className="screenshots">
    <div className="screenshots-label">App screenshots</div>
    <div className="screenshots-row">
      {project.screenshots.map((s, k) => (
        <div className="screenshot-item" key={k}>
          <img src={s.src} alt={s.caption} className="screenshot-img" />
          <span className="screenshot-caption">{s.caption}</span>
        </div>
      ))}
    </div>
  </div>
)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
