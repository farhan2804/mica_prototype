import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import ProofStrip from '../components/ProofStrip.jsx';
import { AUDIENCES, LINES, TIMELINE, PRESENCE } from '../data/content.js';

export default function About() {
  return (
    <>
      <section className="hero hero-compact">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span aria-hidden="true">/</span> <span>About</span>
          </nav>
          <p className="eyebrow">About MICA</p>
          <h1>A Ranchi organisation that has spent 20+ years taking IT to schools and learners.</h1>
          <p className="hero-sub">
            MICA Educational Co. Pvt. Ltd. started in school IT education and has grown into software,
            publishing, skill training, helplines and exam services. Its stated aim is to build skills and
            give amateurs a platform to begin careers and compete.
          </p>
        </div>
      </section>

      {/* How the units fit together: fixes the naming confusion on the current site */}
      <section className="section" aria-labelledby="units-title">
        <div className="container">
          <h2 id="units-title" className="section-title">What each MICA unit does</h2>
          <p className="section-lead">
            MICA works through several units, each with its own name. This table puts them next to
            plain-language descriptions and shows who each one serves.
          </p>
          <div className="table-wrap">
            <table className="units-table">
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">MICA unit</th>
                  <th scope="col">Who it serves</th>
                </tr>
              </thead>
              <tbody>
                {LINES.map((l) => (
                  <tr key={l.id}>
                    <th scope="row">{l.name}</th>
                    <td>{l.unit}</td>
                    <td>
                      {l.audiences.map((a) => (
                        <Link key={a} to={`/for/${a}`} className={'tag tag-' + a}>
                          {AUDIENCES[a].label}
                        </Link>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="timeline-title">
        <div className="container two-col">
          <div>
            <h2 id="timeline-title" className="section-title">Milestones</h2>
            <ol className="timeline">
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <span className="year">{t.year}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="section-title">Where MICA works</h2>
            <p className="muted">Based in Ranchi, with a presence in:</p>
            <ul className="chip-list">
              {PRESENCE.map((s) => (
                <li key={s} className="chip static">{s}</li>
              ))}
            </ul>

            <h2 className="section-title spaced">Leadership and team</h2>
            <article className="card placeholder">
              <span className="badge">Placeholder</span>
              <p className="muted">
                The current site describes "hundreds of companions" but names nobody. Add leadership
                names, roles and photos here to build trust with partners.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ProofStrip />

      <section className="section cta-band" aria-labelledby="cta-title">
        <div className="container cta-inner">
          <div>
            <h2 id="cta-title">Work with MICA</h2>
            <p>Schools, institutions and learners can all start with a short enquiry.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/enquiry" className="btn btn-light">
              Make an enquiry <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
