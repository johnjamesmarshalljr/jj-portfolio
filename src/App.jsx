import { useState } from 'react';
import ConnectorDiagram from './ConnectorDiagram';
import { pillars, caseStudies, experience, contact, creative, essays } from './data';
import './App.css';

function App() {
  const [openCase, setOpenCase] = useState(caseStudies[0].id);
  const [activeEssay, setActiveEssay] = useState(null);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">JJ MARSHALL</a>
          <nav className="nav-links" aria-label="Section navigation">
            <a href="#bring">What I Bring</a>
            <a href="#work">Work</a>
            <a href="#beyond">Beyond Product</a>
            <a href="#writing">Writing</a>
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
            <p className="eyebrow">Systems Architect &mdash; Technical Product Manager</p>
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
            From a solo-built platform to enterprise integration architecture to products I pitched
            myself. Expand a case study for the full arc.
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
            The same instinct that drives the integration work &mdash; take something dense, disconnected,
            or overwhelming and make it click for the person in front of you &mdash; also built a media
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

        <section id="writing" className="writing">
          <h2 className="section-heading">Writing</h2>
          <p className="section-sub">
            Ten essays on product, leadership, and the work that matters &mdash; written across
            February and March 2026.
          </p>
          <div className="essay-list">
            {essays.map((essay) => (
              <button
                className="essay-row"
                key={essay.id}
                onClick={() => setActiveEssay(essay.id)}
              >
                <span className="essay-number">{essay.number}</span>
                <span className="essay-row-text">
                  <span className="essay-category">{essay.category} &middot; {essay.date}</span>
                  <span className="essay-title">{essay.title}</span>
                  <span className="essay-dek">{essay.dek}</span>
                </span>
                <span className="essay-arrow">&rarr;</span>
              </button>
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

      {activeEssay && (() => {
        const essay = essays.find((e) => e.id === activeEssay);
        if (!essay) return null;
        return (
          <div className="essay-overlay" role="dialog" aria-modal="true">
            <div className="essay-overlay-inner">
              <button className="essay-close" onClick={() => setActiveEssay(null)} aria-label="Close essay">
                &times;
              </button>
              <p className="essay-overlay-meta">
                ESSAY {essay.number} OF {String(essays.length).padStart(2, '0')} &middot; {essay.category} &middot; {essay.date}
              </p>
              <h2 className="essay-overlay-title">{essay.title}</h2>
              <p className="essay-overlay-dek">{essay.dek}</p>
              <div className="essay-overlay-body">
                {essay.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
    </>
  );
}

export default App;
