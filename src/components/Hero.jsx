import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Gem Pazziuagan</h1>
        <h2 className="hero-title">
          OutSystems Developer & Application Support Specialist
        </h2>
        <p className="hero-tagline">
          Building enterprise web & mobile apps that solve real problems —
          from real-time roadside assistance to bulk data processing that
          cuts hours of work down to minutes.
        </p>
        <div className="hero-badges">
          <span className="badge">OutSystems ODC Certified</span>
          <span className="badge">Lean Six Sigma Yellow Belt</span>
          <span className="badge">6+ Years Experience</span>
        </div>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-visual">
        <img src="/profile.png" alt="Gem Pazziuagan" className="avatar-circle" />
        <div className="hero-stat-cards">
          <div className="stat-card">
            <span className="stat-num">6+</span>
            <span className="stat-label">Years experience</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">10+</span>
            <span className="stat-label">Projects delivered</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">70%</span>
            <span className="stat-label">Process time saved</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
