import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('pazziuagangem@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contacts = [
    {
      icon: '✉️',
      label: 'Email',
      value: 'pazziuagangem@gmail.com',
      action: copyEmail,
      actionLabel: copied ? '✓ Copied!' : 'Copy email',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+63 905 899 1983',
      action: null,
      actionLabel: null,
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Makati City, Philippines',
      action: null,
      actionLabel: null,
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-title">Let's work together</h2>
        <p className="section-subtitle">
          Open to new opportunities — whether it's a full-time role, a project,
          or just a conversation about tech and problem-solving.
        </p>

        <div className="contact-grid">

          {/* ── Left: contact details ── */}
          <div className="contact-details">
            <h3 className="details-title">Contact information</h3>
            <div className="contact-items">
              {contacts.map((c, i) => (
                <div className="contact-item" key={i}>
                  <div className="contact-icon">{c.icon}</div>
                  <div className="contact-info">
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                    {c.action && (
                      <button className="copy-btn" onClick={c.action}>
                        {c.actionLabel}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <div className="avail-dot"></div>
              <span>Available for new opportunities</span>
            </div>

            <div className="certifications">
              <h4 className="cert-title">Certifications</h4>
              <div className="cert-list">
                <div className="cert-item">
                  <span className="cert-icon">🏅</span>
                  <span>Certified Associate Developer — OutSystems ODC</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🏅</span>
                  <span>Lean Six Sigma Yellow Belt — DMAIC</span>
                </div>
                <div className="cert-item">
                  <span className="cert-icon">🏅</span>
                  <span>UiPath RPA — Introduction to RPA</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: message card ── */}
          <div className="contact-card">
            <h3 className="card-heading">Send a message</h3>
            <p className="card-note">
              I'll get back to you within 24 hours. For urgent matters, feel free to call directly.
            </p>

            <div className="form-group">
              <label>Your name</label>
              <input type="text" placeholder="e.g. Juan dela Cruz" />
            </div>
            <div className="form-group">
              <label>Your email</label>
              <input type="email" placeholder="e.g. juan@company.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="e.g. Job opportunity at Acme Corp" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about the role or project..."></textarea>
            </div>

            <a
              href="mailto:pazziuagangem@gmail.com"
              className="send-btn"
            >
              Send via Email ✉️
            </a>
            <p className="form-note">
              Clicking the button opens your email client with the address pre-filled.
            </p>
          </div>

        </div>
      </div>

      {/* ── Footer ── */}
      <div className="footer">
        <p>© 2026 Gem Pazziuagan · Built with React · Deployed on Vercel</p>
      </div>
    </section>
  );
}

export default Contact;
