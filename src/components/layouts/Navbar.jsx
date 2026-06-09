import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Icon } from '../ui/icons';
import Crest from '../ui/Crest';

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/roster', label: 'Roster' },
  { to: '/standings', label: 'Standings' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="wrap">
        <Link to="/" className="brand" aria-label="Inferno SC home">
          <Crest className="brand__mark" />
          <span className="brand__text">Inferno<span className="sc">SC</span></span>
        </Link>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          {open ? <Icon.Close /> : <Icon.Menu />}
        </button>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}>
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
