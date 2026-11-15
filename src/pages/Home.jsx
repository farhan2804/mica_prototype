import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import LineCard from '../components/LineCard.jsx';
import ProofStrip from '../components/ProofStrip.jsx';
import { AUDIENCES, AUDIENCE_ORDER, LINES } from '../data/content.js';

const FILTERS = [
  { id: 'all', label: 'All services' },
  ...AUDIENCE_ORDER.map((id) => ({ id, label: AUDIENCES[id].label })),
];

function scrollToId(id) {
  // Anchor links clash with hash routing, so scroll programmatically.
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Home() {
  const [filter, setFilter] = useState('all');
  const visibleLines = filter === 'all' ? LINES : LINES.filter((l) => l.audiences.includes(filter));

  return (
    <>
      {/* 1. Hero: say what MICA does and route the visitor in one glance */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">MICA Educational Co. · Ranchi · 20+ years</p>
            <h1>IT education, software and skills for schools, institutions and learners.</h1>
            <p className="hero-sub">
              We build school software, publish computer textbooks, run IT education in more than 150
              schools, process exams, operate helplines and train people for jobs, across 5+ states.
            </p>

            <p className="hero-ask" id="hero-ask">Who are you? Start here:</p>
            <div className="role-grid" role="group" aria-labelledby="hero-ask">
              {AUDIENCE_ORDER.map((id) => (
                <Link key={id} to={`/for/${id}`} className={'role-btn role-' + id}>
                  <span className="role-label">{AUDIENCES[id].roleLabel}</span>
                  <span className="role-sub">{AUDIENCES[id].roleSub}</span>
                  <span className="role-go">
                    {AUDIENCES[id].desiredAction} <Icon name="arrow" size={16} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="hero-links">
              <button type="button" className="text-link as-button" onClick={() => scrollToId('what-we-do')}>
                See everything MICA does
              </button>
              <Link to="/enquiry" className="text-link">
                Not sure? Send an enquiry <Icon name="arrow" size={14} />
              </Link>
            </div>
          </div>

          <aside className="hero-panel" aria-label="MICA at a glance">
            <h2 className="panel-title">MICA at a glance</h2>
            <ul className="glance">
              <li><strong>9</strong><span>services across education, technology and social programmes</span></li>
              <li><strong>150+</strong><span>partner schools</span></li>
              <li><strong>~7 lakh</strong><span>students reached through Udaan competitions</span></li>
              <li><strong>6</strong><span>ISO and COPC certifications</span></li>
            </ul>
          </aside>
        </div>
      </section>

      {/* 2. Who is this for: three audiences, each with what they typically want */}
      <section className="section" id="who" aria-labelledby="who-title">
        <div className="container">
          <h2 id="who-title" className="section-title">Find what is relevant to you</h2>
          <p className="section-lead">
            MICA serves three kinds of visitors. Pick yours to see only the services that matter to you.
          </p>
          <div className="grid-3">
            {AUDIENCE_ORDER.map((id) => {
              const a = AUDIENCES[id];
              return (
                <article key={id} className={'card audience-card audience-' + id}>
                  <h3>{a.label}</h3>
                  <p className="muted">You might be looking for:</p>
                  <ul className="tick-list">
                    {a.wants.map((w) => (
                      <li key={w}><Icon name="check" size={16} /><span>{w}</span></li>
                    ))}
                  </ul>
                  <Link to={`/for/${id}`} className="btn btn-primary">
                    {a.desiredAction} <Icon name="arrow" size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. What MICA does: nine lines, filterable by audience */}
      <section className="section alt" id="what-we-do" aria-labelledby="what-title">
        <div className="container">
          <h2 id="what-title" className="section-title">What MICA does</h2>
          <p className="section-lead">
            Nine services, each with a plain-language name. MICA's own unit names are shown beneath.
          </p>

          <div className="chips" role="group" aria-label="Filter services by audience">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={'chip' + (filter === f.id ? ' active' : '')}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <p className="result-count" aria-live="polite">
            Showing {visibleLines.length} of {LINES.length} services
          </p>

          <div className="grid-3">
            {visibleLines.map((line) => (
              <LineCard key={line.id} line={line} audience={filter === 'all' ? undefined : filter} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Proof */}
      <ProofStrip />

      {/* 5. Next step */}
      <section className="section cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">Ready to talk?</h2>
            <p>Tell us who you are and what you need. We will route your enquiry to the right MICA team.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/enquiry?audience=schools&type=demo" className="btn btn-light">Request a school demo</Link>
            <Link to="/enquiry?audience=partners&type=partnership" className="btn btn-light">Start a partnership discussion</Link>
            <Link to="/enquiry?audience=students&type=course" className="btn btn-light">Ask about courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
