import './About.css';

function About() {
  const skills = [
    { category: 'Low-Code', items: ['OutSystems ODC', 'OutSystems 11', 'Web & Mobile Apps'] },
    { category: 'Languages', items: ['SQL / T-SQL', 'HTML & CSS', 'React.js (Basic)', 'PHP (Basic)'] },
    { category: 'Tools', items: ['JIRA', 'Postman', 'MS SQL', 'REST API'] },
    { category: 'Methods', items: ['Agile', 'Waterfall', 'Lean Six Sigma', 'UAT & Deployment'] },
  ];

  const timeline = [
    { year: 'Aug 2024 – Feb 2026', role: 'OutSystems Developer', company: 'Pacifico Assistance Corp.' },
    { year: 'Oct 2023 – Jul 2024', role: 'Business Owner', company: 'Mi Fortress Coffee Shop' },
    { year: 'Jan 2023 – Sep 2023', role: 'System Developer II', company: 'SeidoPro Global Inc.' },
    { year: 'Oct 2020 – Dec 2022', role: 'System Developer', company: 'SeidoPro Global Inc.' },
    { year: 'Aug 2018 – Sep 2020', role: 'Documentation Associate', company: 'SeidoPro Global Inc.' },
  ];

  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="section-label">About me</div>
        <h2 className="section-title">Developer. Problem-solver. Builder.</h2>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              I'm an OutSystems-certified developer based in Makati City, Philippines,
              with over 6 years of experience building and supporting enterprise web and
              mobile applications across insurance, logistics, and operations industries.
            </p>
            <p>
              I've worked as a sole developer — taking full ownership of projects from
              requirements gathering and UI design through deployment and production support.
              I genuinely enjoy finding where manual, time-consuming processes exist and
              engineering solutions that make them disappear.
            </p>
            
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>Makati City, Philippines</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🎓</span>
                <span>BS Information Technology Service Management — University of Makati</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">📧</span>
                <span>pazziuagangem@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <center>
            <div className="skills-block">
              <h3 className="block-title">Technical skills</h3>
              {skills.map((group) => (
                <div className="skill-group" key={group.category}>
                  <span className="skill-category">{group.category}</span>
                  <div className="skill-pills">
                    {group.items.map((item) => (
                      <span className="skill-pill" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </center>
          </div>
        </div>

        <div className="bottom-grid">

  <div className="timeline-block">
    <h3 className="block-title">Career timeline</h3>
    <div className="timeline">
      {timeline.map((item, i) => (
        <div className="timeline-item" key={i}>
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-line"></div>
          <div className="timeline-info">
            <div className="timeline-role">{item.role}</div>
            <div className="timeline-company">{item.company}</div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="achievements-block">
    <h3 className="block-title">Key achievements</h3>

    <div className="achievement-item">
      <div className="achievement-icon">⚡</div>
      <div className="achievement-content">
        <div className="achievement-title">Bulk Data Uploader</div>
        <div className="achievement-company">Pacifico Assistance Corp.</div>
        <p className="achievement-desc">
          Built a bulk uploader for insurance client files of 5,000–10,000 records.
          Reduced processing time from a <strong>full day to 5–10 minutes</strong> per
          file — enabling same-day turnaround instead of a 1–2 file/day backlog.
        </p>
        <div className="achievement-stat">
          <span className="stat-before">~8 hrs</span>
          <span className="stat-arrow">→</span>
          <span className="stat-after">5–10 mins</span>
        </div>
      </div>
    </div>

    <div className="achievement-item">
      <div className="achievement-icon">📊</div>
      <div className="achievement-content">
        <div className="achievement-title">Excel Report Automation</div>
        <div className="achievement-company">SeidoPro Global Inc.</div>
        <p className="achievement-desc">
          Created Excel automation templates eliminating manual report generation.
          Users paste raw data and the template auto-produces the required format —
          cutting daily report time by <strong>50–70%</strong>.
        </p>
        <div className="achievement-stat">
          <span className="stat-before">15–30 mins</span>
          <span className="stat-arrow">→</span>
          <span className="stat-after">5–15 mins</span>
        </div>
      </div>
    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default About;
