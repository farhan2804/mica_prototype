import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { AUDIENCES } from '../data/content.js';

// One business line. Plain name first, MICA's own unit name second.
export default function LineCard({ line, audience }) {
  const audienceParam = audience && audience !== 'other' ? audience : line.audiences[0];
  return (
    <article className="card line-card">
      <div className="line-top">
        <span className="mono" aria-hidden="true">{line.mono}</span>
        <div>
          <h3 className="line-name">{line.name}</h3>
          <p className="line-unit">{line.unit}</p>
        </div>
      </div>

      <p className="line-tagline">{line.tagline}</p>
      <p className="line-desc">{line.description}</p>

      <ul className="tick-list">
        {line.highlights.map((h) => (
          <li key={h}>
            <Icon name="check" size={16} />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="tag-row" aria-label="Who this is for">
        {line.audiences.map((a) => (
          <span key={a} className={'tag tag-' + a}>{AUDIENCES[a].label}</span>
        ))}
      </div>

      <div className="line-actions">
        <Link
          className="btn btn-outline btn-sm"
          to={`/enquiry?audience=${audienceParam}&line=${line.id}`}
        >
          Enquire about this
        </Link>
        <a className="text-link" href={line.page} target="_blank" rel="noreferrer">
          Current page <Icon name="external" size={14} />
        </a>
      </div>
    </article>
  );
}
