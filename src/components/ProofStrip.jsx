import { PROOF_STATS, PROOF_NOTE, CERTS } from '../data/content.js';

export default function ProofStrip({ showCerts = true }) {
  return (
    <section className="section proof" aria-labelledby="proof-title">
      <div className="container">
        <h2 id="proof-title" className="section-title">Trusted by schools and institutions</h2>
        <div className="stat-grid">
          {PROOF_STATS.map((s) => (
            <div key={s.label} className="stat">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {showCerts && (
          <ul className="cert-row" aria-label="Certifications">
            {CERTS.map((c) => (
              <li key={c.code} className="cert">
                <strong>{c.code}</strong>
                <span>{c.what}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="fine-print">{PROOF_NOTE}</p>
      </div>
    </section>
  );
}
