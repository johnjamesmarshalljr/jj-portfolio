import { useState } from 'react';
import ConnectorDiagram from './ConnectorDiagram';
import { pillars, caseStudies, experience, contact, creative } from './data';
import './App.css';

function App() {
  const [openCase, setOpenCase] = useState(caseStudies[0].id);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">JJ MARSHALL</a>
          <nav className="nav-links" aria-label="Section navigation">
            <a href="#bring">What I Bring</a>
            <a href="#work">Work</a>
            <a href="#beyond">Beyond Product</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-resume" href="/JJ_Marshall_Resume.pdf" target="_blank" rel="noreferrer">
            Resume &#8599;
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Systems Integration Architect &mdash; Technical Product Manager</p>
            <h1>JJ Marshall</h1>
            <p className="hero-quote">
              &ldquo;I build the connective tissue between platforms that don&rsquo;t talk to each
              other &mdash; and the systems product teams use to decide what to ship next.&rdquo;
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">View case studies</a>
              <a className="btn btn-secondary" href="/JJ_Marshall_Resume.pdf" target="_blank" rel="noreferrer">
                Download resume
              </a>
            </div>
            <p className="hero-location">Miami, FL &middot; {contact.email}</p>
          </div>
          <div className="hero-diagram">
            <ConnectorDiagram />
          </div>
        </section>

        <section id="bring" className="pillars">
          <h2 className="section-heading">What I bring</h2>
          <div className="pillar-grid">
            {pillars.map((p) => (
              <div className="pillar-card" key={p.tag}>
                <p className="pillar-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="case-studies">
          <h2 className="section-heading">Selected work</h2>
          <p className="section-sub">
            Three platforms, three different breeds of integration problem. Expand a case study for
            the full arc.
          </p>

          <div className="case-list">
            {caseStudies.map((cs) => {
              const isOpen = openCase === cs.id;
              return (
                <article className={`case-card ${isOpen ? 'is-open' : ''}`} key={cs.id}>
                  <button
                    className="case-summary"
                    onClick={() => setOpenCase(isOpen ? null : cs.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="case-summary-text">
                      <p className="case-meta">
                        <span className="case-tag">{cs.tag}</span>
                        {cs.company} &middot; {cs.period}
                      </p>
                      <h3>{cs.title}</h3>
                      <p className="case-summary-body">{cs.summary}</p>
                    </div>
                    <div className="case-stat">
                      <span className="case-stat-number">{cs.stat}</span>
                      <span className="case-stat-label">{cs.statLabel}</span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="case-detail">
                      <div className="case-detail-block">
                        <p className="case-detail-label">Problem</p>
                        <p>{cs.problem}</p>
                      </div>
                      <div className="case-detail-block">
                        <p className="case-detail-label">Approach</p>
                        <p>{cs.approach}</p>
                      </div>
                      <div className="case-detail-block">
                        <p className="case-detail-label">Impact</p>
                        <p>{cs.impact}</p>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        <section id="beyond" className="beyond">
          <h2 className="section-heading">Beyond product</h2>
          <p className="section-sub">
            The same instinct that drives the integration work \u2014 take something dense, disconnected,
            or overwhelming and make it click for the person in front of you \u2014 also built a media
            presence, a ballroom house, and a production practice.
          </p>
          <div className="creative-grid">
            {creative.map((item) => (
              <a className="creative-card" href={item.link} target="_blank" rel="noreferrer" key={item.tag}>
                <p className="creative-tag">{item.tag}</p>
                <p className="creative-stat">{item.stat}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="creative-link">{item.linkLabel}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="experience">
          <h2 className="section-heading">Experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li className="timeline-item" key={job.company + job.period}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="timeline-period">{job.period} &middot; {job.location}</p>
                  <h3>{job.company}</h3>
                  <p className="timeline-role">{job.role}</p>
                  <p className="timeline-detail">{job.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-inner">
          <div>
            <h2 className="section-heading">Let&rsquo;s talk</h2>
            <p className="footer-sub">
              Open to senior and VP-level product roles building the platform layer for
              growth-stage vertical SaaS.
            </p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">{contact.linkedin}</a>
            <span className="footer-phone">{contact.phone}</span>
          </div>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} JJ Marshall &mdash; {contact.location}</p>
      </footer>
    </>
  );
}

export default App;
