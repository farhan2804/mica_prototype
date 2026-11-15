import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon.jsx';

const NAV = [
  { to: '/for/schools', label: 'Schools' },
  { to: '/for/partners', label: 'Institutions & Partners' },
  { to: '/for/students', label: 'Students & Candidates' },
  { to: '/about', label: 'About' },
];

export function Wordmark() {
  return (
    <span className="wordmark" aria-label="MICA Educational Company">
      <span className="wm-mica">MICA</span>
      <span className="wm-sub">Educational Co. (P) Ltd.</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand-link" aria-label="MICA home">
          <Wordmark />
        </Link>

        <nav id="primary-nav" className={'nav' + (open ? ' nav-open' : '')} aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/enquiry" className="btn btn-primary nav-cta">
            Make an enquiry
          </Link>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>
    </header>
  );
}
