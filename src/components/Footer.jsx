import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import { Wordmark } from './Header.jsx';
import { CONTACT } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Wordmark />
          </div>
          <p className="footer-text">
            IT education, software and skills for schools, institutions and learners.
          </p>
          <ul className="contact-list">
            <li>
              <Icon name="pin" size={18} />
              <span>
                {CONTACT.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Find your way</h2>
          <ul className="footer-links">
            <li><Link to="/for/schools">For schools</Link></li>
            <li><Link to="/for/partners">For institutions and partners</Link></li>
            <li><Link to="/for/students">For students and candidates</Link></li>
            <li><Link to="/about">About MICA</Link></li>
            <li><Link to="/enquiry">Make an enquiry</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer-title">Elsewhere</h2>
          <ul className="footer-links">
            <li>
              <a href={CONTACT.careersUrl} target="_blank" rel="noreferrer">
                Careers at MICA <Icon name="external" size={14} />
              </a>
            </li>
            <li>
              <a href={CONTACT.currentSite} target="_blank" rel="noreferrer">
                Current website <Icon name="external" size={14} />
              </a>
            </li>
            {CONTACT.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label} <Icon name="external" size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-note">
        <p>
          Design prototype for a proposed MICA website. Content is drawn from micaeduco.com;
          items marked "placeholder" are not real data. The enquiry form does not send anything.
        </p>
      </div>
    </footer>
  );
}
