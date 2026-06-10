import './About.css';

function About() {
  const skills = [
    { category: 'Low-Code', items: ['OutSystems ODC', 'OutSystems 11', 'Web & Mobile Apps'] },
    { category: 'Languages', items: ['SQL / T-SQL', 'HTML & CSS', 'React.js (Basic)', 'PHP (Basic)'] },
    { category: 'Tools', items: ['JIRA', 'Postman', 'MS SQL', 'REST API'] },
    { category: 'Methods', items: ['Agile', 'Waterfall', 'Lean Six Sigma', 'UAT & Deployment'] },
  ];

  const timeline = [
    { year: '2024–2026', role: 'OutSystems Developer', company: 'Pacifico Assistance Corp.' },
    { year: '2023–2024', role: 'Business Owner', company: 'Mi Fortress Coffee Shop' },
    { year: '2020–2023', role: 'System Developer II', company: 'SeidoPro Global Inc.' },
    { year: '2018–2020', role: 'Documentation Associate', company: 'SeidoPro Global Inc.' },
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
            <p>
              One of my proudest achievements: building a bulk data uploader that reduced
              insurance client file processing from a <strong>full day down to 5–10 minutes</strong> —
              enabling same-day turnaround instead of a growing backlog.
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
          </div>
        </div>

        <div className="timeline-block">
          <h3 className="block-title">Career timeline</h3>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-dot"></div>
                <div className="timeline-info">
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
