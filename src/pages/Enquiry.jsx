import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { submitEnquiry } from '../services/enquiryService.js';
import { CONTACT, ENQUIRY_AUDIENCES, ENQUIRY_TYPES, LINES, routeFor } from '../data/content.js';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function labelOf(list, value) {
  const found = list.find((o) => o.value === value);
  return found ? found.label : '';
}

export default function Enquiry() {
  const [params] = useSearchParams();

  // Pre-fill from the page the visitor came from (?audience=schools&type=demo&line=erp)
  const initialAudience = ENQUIRY_TYPES[params.get('audience')] ? params.get('audience') : '';
  const initialTypeList = ENQUIRY_TYPES[initialAudience] || [];
  const initialType = initialTypeList.some((t) => t.value === params.get('type')) ? params.get('type') : '';
  const initialLine = LINES.some((l) => l.id === params.get('line')) ? params.get('line') : '';

  const [form, setForm] = useState({
    audience: initialAudience,
    type: initialType,
    line: initialLine,
    name: '',
    organisation: '',
    role: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [result, setResult] = useState(null);

  const types = ENQUIRY_TYPES[form.audience] || [];
  const needsOrg = form.audience === 'schools' || form.audience === 'partners';
  const routedTo = useMemo(() => routeFor(form.line, form.audience), [form.line, form.audience]);

  function update(field, value) {
    setForm((f) => {
      const next = { ...f, [field]: value };
      // Changing the audience changes which enquiry types make sense.
      if (field === 'audience') next.type = '';
      return next;
    });
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.audience) e.audience = 'Please tell us who you are.';
    if (!form.type) e.type = 'Please choose what you need.';
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (needsOrg && !form.organisation.trim()) e.organisation = 'Please enter your organisation.';
    if (!EMAIL_PATTERN.test(form.email.trim())) e.email = 'Please enter a valid email address.';
    if (form.contactMethod === 'phone' && !form.phone.trim()) e.phone = 'Please add a phone number, or choose email.';
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const firstField = Object.keys(e)[0];
      const el = document.getElementById('f-' + firstField);
      if (el) el.focus();
      return;
    }
    setStatus('sending');
    const payload = { ...form, routedTo, submittedAt: new Date().toISOString() };
    const res = await submitEnquiry(payload);
    setResult({ reference: res.reference, payload });
    setStatus('sent');
  }

  function reset() {
    setStatus('idle');
    setResult(null);
    setForm((f) => ({ ...f, type: '', line: '', organisation: '', role: '', message: '' }));
  }

  if (status === 'sent' && result) {
    const p = result.payload;
    return (
      <section className="section">
        <div className="container narrow">
          <div className="card confirm" role="status">
            <div className="confirm-icon"><Icon name="check" size={28} /></div>
            <h1>Thank you, {p.name.split(' ')[0]}.</h1>
            <p>
              Your enquiry reference is <strong>{result.reference}</strong>. In the live site this would
              go to <strong>{p.routedTo}</strong>, who would contact you by {p.contactMethod}.
            </p>
            <dl className="summary">
              <div><dt>You are</dt><dd>{labelOf(ENQUIRY_AUDIENCES, p.audience)}</dd></div>
              <div><dt>You need</dt><dd>{labelOf(ENQUIRY_TYPES[p.audience] || [], p.type)}</dd></div>
              {p.line && <div><dt>About</dt><dd>{LINES.find((l) => l.id === p.line)?.name}</dd></div>}
              {p.organisation && <div><dt>Organisation</dt><dd>{p.organisation}</dd></div>}
            </dl>
            <p className="fine-print">
              Prototype notice: nothing was sent. The details above stay in your browser only.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-outline" onClick={reset}>Send another enquiry</button>
              <Link to="/" className="btn btn-primary">Back to home</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="hero hero-compact">
        <div className="container">
          <p className="eyebrow">Enquiry</p>
          <h1>Tell us what you need</h1>
          <p className="hero-sub">
            A few quick details help us send your enquiry to the right MICA team the first time.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container enquiry-grid">
          <form className="card form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="f-audience">I am *</label>
              <select
                id="f-audience"
                value={form.audience}
                onChange={(e) => update('audience', e.target.value)}
                aria-invalid={Boolean(errors.audience)}
                aria-describedby={errors.audience ? 'e-audience' : undefined}
              >
                <option value="">Choose one…</option>
                {ENQUIRY_AUDIENCES.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.audience && <p id="e-audience" className="error">{errors.audience}</p>}
            </div>

            <div className="field">
              <label htmlFor="f-type">I need *</label>
              <select
                id="f-type"
                value={form.type}
                onChange={(e) => update('type', e.target.value)}
                disabled={!form.audience}
                aria-invalid={Boolean(errors.type)}
                aria-describedby={errors.type ? 'e-type' : undefined}
              >
                <option value="">{form.audience ? 'Choose one…' : 'Choose who you are first'}</option>
                {types.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              {errors.type && <p id="e-type" className="error">{errors.type}</p>}
            </div>

            <div className="field">
              <label htmlFor="f-line">Which MICA service? (optional)</label>
              <select id="f-line" value={form.line} onChange={(e) => update('line', e.target.value)}>
                <option value="">Not sure / more than one</option>
                {LINES.map((l) => (
                  <option key={l.id} value={l.id}>{l.name}</option>
                ))}
              </select>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="f-name">Your name *</label>
                <input
                  id="f-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'e-name' : undefined}
                />
                {errors.name && <p id="e-name" className="error">{errors.name}</p>}
              </div>
              <div className="field">
                <label htmlFor="f-role">Your role (optional)</label>
                <input
                  id="f-role"
                  type="text"
                  placeholder="e.g. Principal, Project manager"
                  value={form.role}
                  onChange={(e) => update('role', e.target.value)}
                />
              </div>
            </div>

            {needsOrg && (
              <div className="field">
                <label htmlFor="f-organisation">
                  {form.audience === 'schools' ? 'School name *' : 'Organisation *'}
                </label>
                <input
                  id="f-organisation"
                  type="text"
                  autoComplete="organization"
                  value={form.organisation}
                  onChange={(e) => update('organisation', e.target.value)}
                  aria-invalid={Boolean(errors.organisation)}
                  aria-describedby={errors.organisation ? 'e-organisation' : undefined}
                />
                {errors.organisation && <p id="e-organisation" className="error">{errors.organisation}</p>}
              </div>
            )}

            <div className="field-row">
              <div className="field">
                <label htmlFor="f-email">Email *</label>
                <input
                  id="f-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'e-email' : undefined}
                />
                {errors.email && <p id="e-email" className="error">{errors.email}</p>}
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone (optional)</label>
                <input
                  id="f-phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'e-phone' : undefined}
                />
                {errors.phone && <p id="e-phone" className="error">{errors.phone}</p>}
              </div>
            </div>

            <fieldset className="field radio-group">
              <legend>Best way to reach you</legend>
              {['email', 'phone'].map((m) => (
                <label key={m} className="radio">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={m}
                    checked={form.contactMethod === m}
                    onChange={(e) => update('contactMethod', e.target.value)}
                  />
                  <span>{m === 'email' ? 'Email' : 'Phone call'}</span>
                </label>
              ))}
            </fieldset>

            <div className="field">
              <label htmlFor="f-message">Anything else we should know? (optional)</label>
              <textarea
                id="f-message"
                rows="4"
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send enquiry'}
            </button>
          </form>

          <aside className="side">
            <div className="card route-card" aria-live="polite">
              <h2 className="panel-title">Who will reply</h2>
              <p className="route-to">{routedTo}</p>
              <p className="muted">
                Proposed routing: your choice of service sends the enquiry to the matching MICA unit.
              </p>
            </div>
            <div className="card">
              <h2 className="panel-title">Prefer to talk?</h2>
              <ul className="contact-list dark">
                <li><Icon name="phone" size={18} /><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a></li>
                <li><Icon name="mail" size={18} /><a href={CONTACT.emailHref}>{CONTACT.email}</a></li>
                <li>
                  <Icon name="pin" size={18} />
                  <span>
                    {CONTACT.addressLines.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
