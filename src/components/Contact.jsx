import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const formRef = useRef();
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const copyEmail = () => {
    navigator.clipboard.writeText('pazziuagangem@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    // ⚠️ Replace these 3 values with your own EmailJS keys
    const SERVICE_ID = 'service_9ms5x0c';
    const TEMPLATE_ID = 'template_c55dhom';
    const PUBLIC_KEY = 'Mxdtm--BTKCh6Ylmg';

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      })
      .finally(() => {
        setSending(false);
      });
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

          <div className="contact-card">
            <h3 className="card-heading">Send a message</h3>
            <p className="card-note">
              I'll get back to you within 24 hours. For urgent matters, feel free to call directly.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your name</label>
                <input type="text" name="from_name" placeholder="e.g. Juan dela Cruz" required />
              </div>
              <div className="form-group">
                <label>Your email</label>
                <input type="email" name="from_email" placeholder="e.g. juan@company.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="e.g. Job opportunity at Acme Corp" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about the role or project..." required></textarea>
              </div>

              <button type="submit" className="send-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Message ✉️'}
              </button>

              {status === 'success' && (
                <p className="form-status success">✓ Message sent successfully! I'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="form-status error">✗ Something went wrong. Please try again or email me directly.</p>
              )}
            </form>
          </div>

        </div>
      </div>

      <div className="footer">
        <p>© 2026 Gem Pazziuagan · Built with React · Deployed on Vercel</p>
      </div>
    </section>
  );
}

export default Contact;
