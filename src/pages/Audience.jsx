import { Link, Navigate, useParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import LineCard from '../components/LineCard.jsx';
import Faq from '../components/Faq.jsx';
import ProofStrip from '../components/ProofStrip.jsx';
import { AUDIENCES, AUDIENCE_ORDER, LINES } from '../data/content.js';

// One template, three variants: /for/schools, /for/partners, /for/students
export default function Audience() {
  const { audience } = useParams();
  const data = AUDIENCES[audience];

  if (!data) return <Navigate to="/" replace />;

  const lines = data.lineIds.map((id) => LINES.find((l) => l.id === id)).filter(Boolean);
  const others = AUDIENCE_ORDER.filter((id) => id !== audience);

  return (
    <>
      <section className={'hero hero-compact hero-' + audience}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>{data.label}</span>
          </nav>
          <p className="eyebrow">For {data.label.toLowerCase()}</p>
          <h1>{data.title}</h1>
          <p className="hero-sub">{data.blurb}</p>
          <div className="hero-actions">
            <Link to={`/enquiry?audience=${audience}&type=${data.cta.type}`} className="btn btn-primary">
              {data.cta.label} <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="offer-title">
        <div className="container">
          <h2 id="offer-title" className="section-title">What you can get from MICA</h2>
          <p className="section-lead">
            {lines.length} services relevant to {data.label.toLowerCase()}.
          </p>
          <div className="grid-3">
            {lines.map((line) => (
              <LineCard key={line.id} line={line} audience={audience} />
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="evidence-title">
        <div className="container two-col">
          <div>
            <h2 id="evidence-title" className="section-title">{data.proofTitle}</h2>
            <ul className="tick-list large">
              {data.proofItems.map((item) => (
                <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-title">Success stories</h2>
            <div className="case-list">
              {data.caseStudies.map((c) => (
                <article key={c.title} className="card case placeholder">
                  <span className="badge">Placeholder</span>
                  <h3>{c.title}</h3>
                  <p className="muted">{c.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProofStrip showCerts={audience === 'partners'} />

      <section className="section" aria-labelledby="faq-title">
        <div className="container narrow">
          <h2 id="faq-title" className="section-title">Questions {data.label.toLowerCase()} ask</h2>
          <Faq items={data.faqs} />
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">{data.desiredAction}</h2>
            <p>Send us a short note and the right MICA team will get back to you.</p>
          </div>
          <div className="cta-buttons">
            <Link to={`/enquiry?audience=${audience}&type=${data.cta.type}`} className="btn btn-light">
              {data.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container other-paths">
          <span className="muted">Not what you were looking for?</span>
          {others.map((id) => (
            <Link key={id} to={`/for/${id}`} className="text-link">
              {AUDIENCES[id].label} <Icon name="arrow" size={14} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
